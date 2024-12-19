const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function performOperation(num1 , num2 , operator) {
    const operations = {
        add : ()=>num1+num2,
        subtract : ()=>num1-num2,
        multiply : ()=>num1*num2,
        divide : ()=>num1/num2
    }
    return operations[operator]?.() || "INVALID OPERATOR"
}
 function calculator(){
 rl.question("Enter First No.: " , (inputnumone)=>{
 const firstno = parseFloat(inputnumone)
   

 rl.question("Enter Second No.: " , (inputnumtwo)=>{
const secondno = parseFloat(inputnumtwo)
   

rl.question(`Enter Operatop To Perform (CORRECT VALUES-add,subtract,multiply,divide): ` , (inputoperation)=>{
const result = performOperation(firstno , secondno , inputoperation.toLowerCase())
    console.log(`RESULT FOR ${inputoperation} ON ${firstno} AND ${secondno} :${result}`);
    rl.close()
})})})
}
calculator()