import { serve } from "bun";

const server = serve({
  port: 3000,
  fetch(req: Request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Server running at http://localhost:${server.port}`);