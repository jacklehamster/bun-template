async function bundle() {
  await Bun.build({
    entrypoints: ['./src/index.tsx'],
    outdir: './build',
    minify: true,
    sourcemap: "external",
    target: "browser",
  });
}

await bundle();

export { }
