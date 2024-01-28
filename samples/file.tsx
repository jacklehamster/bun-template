// To test:
//  bun run file.tsx

async function testFile() {
    const file = Bun.file('samples/data/test.json'); // BunFile

    const pkg = JSON.parse(await file.text());
    pkg.name = 'my-package';
    pkg.version = '1.0.0';
    pkg.date = new Date().toString();
    
    await Bun.write(file, JSON.stringify(pkg, null, "  "));    
}

testFile();
