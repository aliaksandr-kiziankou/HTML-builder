const fs = require ('fs/promises');
const path = require('path');
const dirPath = path.join(__dirname, 'secret-folder');

async function result() {
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    for (const file of files) {

        if (file.isFile()) {
            const filePath = path.join(dirPath, file.name);
            const stat = await fs.stat(filePath);
            const ext = path.extname(file.name);
            const extName = ext.slice(1);
            const name = file.name.slice(0, - ext.length);
            const size = (stat.size/1024).toFixed(2);
            console.log(`${name} - ${extName} - ${size}kB`);
        };
    };
};

result();