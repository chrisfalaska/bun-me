import { serve } from "bun";
import { join } from "path";

const server = serve({
  port: 3000,
  fetch(req: Request) {
    const url = new URL(req.url);
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