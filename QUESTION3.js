const http = require('http')

const server = http.createServer((req ,res)=>{
if (req.url == '/') {

    res.end('HELLO WORLD'  )

} else{
    res.writeHead(404)
    res.end('PAGE NOT FOUND(404)')
}
})

server.listen(3000,()=>{
console.log('SERVER GOT STARTED ');
})