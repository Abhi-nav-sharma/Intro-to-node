// const sum= require('./sum')
// console.log(sum(5,6))

const http= require('http')

const server= http.createServer((req,res)=>{
    res.writeHead(200)
    res.end(JSON.stringify({
        data:'Hello World'
    }))
})

server.listen(3002,()=>{
    console.log('listening on port 3002')
})