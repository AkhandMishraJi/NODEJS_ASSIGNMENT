const fs = require('fs')
// READING FILE: input.txt
const content = fs.readFileSync('NODEJS_ASSIGNMENT/Question2/input.txt')
console.log(`Content Read From input.txt: ${content}`);
//  WRITING FILE: output.txt
const contentopbefore = fs.readFileSync('NODEJS_ASSIGNMENT/Question2/output.txt')
console.log(`Content Read  From output.txt before writing: ${contentopbefore}`);
fs.writeFileSync('NODEJS_ASSIGNMENT/Question2/output.txt' , "HELLO WORLD WRITTEN IN output.txt")

const contentopafter = fs.readFileSync('NODEJS_ASSIGNMENT/Question2/output.txt')
console.log(`Content Read  From output.txt after writing: ${contentopafter}`);
