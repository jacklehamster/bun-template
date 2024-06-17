async function bundle() {
  return await Bun.build({
    entrypoints: ['./src/index.tsx'],
    outdir: './dist',
    minify: true,
    sourcemap: "external",
    target: "browser",
  });
}

const result = await bundle();
result?.logs.forEach((log, index) => console.log(index, log));

export { }
