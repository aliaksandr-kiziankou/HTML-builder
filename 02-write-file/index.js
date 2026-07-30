const fs = require ('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath, {
    flags: 'a',
});

console.log('Hello, please enter your text here...');

process.stdin.setEncoding('utf8');

process.stdin.on('data', text => {
    const result = text.trim();
    if (result === 'exit') {
        goodbye();
    } else {
        writeStream.write(result + '\n');
    };
});

process.on('SIGINT', goodbye);

function goodbye() {
    console.log('Goodbye');
     writeStream.end();
    process.exit();
};