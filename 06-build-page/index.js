const fs = require('fs/promises');
const path = require('path');
const projectDist = path.join(__dirname, 'project-dist');
const projectHTMLPath = path.join(projectDist, 'index.html');
const stylesDirPath = path.join(__dirname, 'styles');
const bundleCSSPath = path.join(projectDist, 'style.css');
const assetsDirPath = path.join(__dirname, 'assets');
const assetsProjectPath = path.join(projectDist, 'assets');
const templateDir = path.join(__dirname, 'template.html');

async function main() {
    await fs.rm(projectDist, { recursive:true, force:true });
    await fs.mkdir(projectDist, { recursive:true });

    let template = await fs.readFile(templateDir, 'utf8');

    const regexp = /\{\{(.*?)\}\}/g;
    const matches = template.matchAll(regexp);

    for (const match of matches) {
        const name = match[1];
        const matchPath = path.join(__dirname, 'components' , `${name}.html`);
        const content = await fs.readFile(matchPath, 'utf8');

        template = template.replace(match[0], content);
    };

    await fs.writeFile(projectHTMLPath, template);

    const cssFiles = await fs.readdir(stylesDirPath, { withFileTypes: true });
    let result = '';

    for (const file of cssFiles) {
        if (file.isFile() && path.extname(file.name) === '.css') {
            const filePath = path.join(stylesDirPath, file.name);
            const content = await fs.readFile(filePath, 'utf8');

            result+= content + '\n';
        };
    };

    await fs.writeFile(bundleCSSPath, result);
    await copyAssets(assetsDirPath, assetsProjectPath);
};

async function copyAssets(source, destination) {
    await fs.mkdir(destination, { recursive:true });

    const assetsContent = await fs.readdir(source, { withFileTypes: true });

    for (const asset of assetsContent) {
        if (asset.isFile()) {
            const filePath = path.join(source, asset.name);
            const fileCopyPath = path.join(destination, asset.name);
            await fs.copyFile(filePath, fileCopyPath);
        } else {
            const sourcePath = path.join(source, asset.name);
            const destinationPath = path.join(destination, asset.name);

            await copyAssets(sourcePath, destinationPath);
        };
    };    
};

main();