const fs = require('fs/promises');
const path = require ('path');
const dirPath = path.join(__dirname, 'files');
const copyDirPath = path.join(__dirname, 'files-copy');

async function main() {
    await fs.rm(copyDirPath, { recursive: true, force: true });
    await fs.mkdir(copyDirPath, { recursive: true });

    const files = await fs.readdir(dirPath, { withFileTypes: true });

    for (const file of files) {
        if (file.isFile()) {
            const filePath = path.join(dirPath, file.name);
            const fileCopyPath = path.join(copyDirPath, file.name);
            await fs.copyFile(filePath, fileCopyPath);
        };
    };
};

main();