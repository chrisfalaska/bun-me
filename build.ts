import { build } from "bun";

async function runBuild() {
  const result = await build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    target: 'node',
    minify: true,
  });

  if (!result.success) {
    console.error('Build failed', result.logs);
    process.exit(1);
  }

  console.log('Build completed successfully!');
}

runBuild();