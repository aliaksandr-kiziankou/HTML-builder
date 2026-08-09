const fs = require('fs/promises');
const path = require ('path');
const cssDirPath = path.join(__dirname, 'styles');
const bundleDirPath = path.join(__dirname, 'project-dist');
const bundleFilePath = path.join(bundleDirPath, 'bundle.css');

async function main() {
    const cssFiles = await fs.readdir(cssDirPath, { withFileTypes: true });
    let result = '';
    for (const file of cssFiles) {
        if (file.isFile() && path.extname(file.name) === '.css') {
            const filePath = path.join(cssDirPath, file.name);
            const content = await fs.readFile(filePath, 'utf8');

            result+= content + '\n';
        };
    };

    await fs.writeFile(bundleFilePath, result);
};

main();