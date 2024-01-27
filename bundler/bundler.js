async function bundle() {
  await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: './buid',
    minify: true,
    sourcemap: 'external',
    target: 'browser',
  });
}
await bundle();
export {};
// # sourceMappingURL=bundler.js.map
