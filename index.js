// const sum= require('./sum')
// console.log(sum(5,6))

const http= require('http')
const {getUsers,addUser,getAllUsers,newUser,getUserById}= require('./users/index')

const server= http.createServer((req,res)=>{
    // res.writeHead(200)
    // res.end(JSON.stringify({
    //     data:'Hello World'
    // }))
    try{
        const [url,query]= req.url.split('?')
        if(url==='/users'){
            if(req.method==='GET'){
                if(query){
                    const q= new URLSearchParams(`?${query}`)
                    const page= q.get('page') ?? 1
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify(getUsers(Number(page))))
                }
                else{
                    res.writeHead(200,{'Content-Type':'application/json'})
                    res.end(JSON.stringify(getAllUsers()))
                }
            }
            else if( req.method==='POST'){
                const q= new URLSearchParams(`?${query}`)
                const value= q.get('name')
                addUser(value)
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(newUser()))
            }
        }
        else if(url.startsWith('/users/')){
            const index= Number(url.split('/')[2])
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(getUserById(index)))
        }
        else{
            throw new Error('Invalid url')
        }
    }
    catch(err){
        res.writeHead(500,{'Content-Type':'application/json'})
        res.end(JSON.stringify({
            error:err.message
        }))
    }
})

server.listen(3002,()=>{
    console.log('listening on port 3002')
})