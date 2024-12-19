const http = require('http')

const server = http.createServer((req ,res)=>{
if (req.url == '/') {

    res.end('HELLO WORLD'  )

} 
})

server.listen(3000,()=>{
console.log('SERVER GOT STARTED ');
})