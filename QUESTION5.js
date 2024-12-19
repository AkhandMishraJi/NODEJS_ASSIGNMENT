const path = require('path');
const filepath = 'NODEJS_ASSIGNMENT/Question2/output.txt'
const filename = path.basename(filepath);
console.log(`The Path Is:${filepath}:\nAnd The File Name Is:${filename}`);
const fileextension = path.extname(filepath)
console.log(`The Path Is:${filepath}:\nAnd The File Extension Is:${fileextension}`)