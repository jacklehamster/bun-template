async function bundle() {
    await Bun.build({
        entrypoints: ['./src/hello-world.tsx'],
        outdir: './build',
      });
}

bundle();