import http from 'http'
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':"text/html"})
    res.write("hello from nodejs server")
    res.end()
})

server.listen(4000,()=>{
    console.log("server started at http://localhost:4000")
})