import { build } from "bun";
import { readdir } from "fs/promises";
import { join } from "path";

const packagesDir = "./packages";

function kebabToPascalCase(str: string): string {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

async function getComponents() {
  const entries = await readdir(packagesDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

async function buildComponent(componentName: string) {
  console.log(`Building ${componentName}...`);
  const pascalCaseName = kebabToPascalCase(componentName);
  const result = await build({
    entrypoints: [join(packagesDir, componentName, "src", `${pascalCaseName}.ts`)],
    outdir: join("./public/dist", componentName),
    target: 'browser',
    format: 'esm',
  });

  if (!result.success) {
    console.error(`Build failed for ${componentName}`, result.logs);
    return false;
  }

  console.log(`Build completed successfully for ${componentName}`);
  return true;
}

async function buildAllComponents() {
  const components = await getComponents();
  console.log(`Found components: ${components.join(", ")}`);

  const results = await Promise.all(components.map(buildComponent));

  if (results.every(Boolean)) {
    console.log("All components built successfully");
  } else {
    console.error("Some components failed to build");
    process.exit(1);
  }
}

buildAllComponents();