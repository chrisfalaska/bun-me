import { serve } from "bun";
import { join } from "path";
import { readdir } from "fs/promises";

const getComponents = async () => {
  const entries = await readdir("./public/dist", { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
};

const server = serve({
  port: 3000,
  async fetch(req: Request) {
    const url = new URL(req.url);

    if (url.pathname === "/api/components") {
      const components = await getComponents();
      return new Response(JSON.stringify(components), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
    const fullPath = join(import.meta.dir, "public", filePath);

    try {
      const file = Bun.file(fullPath);
      return new Response(file);
    } catch (error) {
      return new Response("File not found", { status: 404 });
    }
  },
});

console.log(`Server running at http://localhost:${server.port}`);