import { build } from "bun";

async function buildProject() {
  const result = await build({
    entrypoints: ['./index.ts'],
    outdir: './public/dist',
    target: 'browser',
    format: 'esm',
  });

  if (!result.success) {
    console.error('Build failed', result.logs);
    process.exit(1);
  }

  console.log('Build completed successfully');
}

buildProject();