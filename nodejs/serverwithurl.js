import http from 'http'
import fs from 'fs'
const server = http.createServer((req,res)=>{
    if(req.url=="/") //http://localhost:4000
    {res.writeHead(200,{'content-type':"text/html"})
    res.write("hello from nodejs server")
    res.end()}
    else if(req.url=="/about"){ //http://localhost:4000/about
        fs.readFile("about.html",(err,data)=>{
        if(err) throw err
        else {
            console.log(data)
            res.end(data.toString())
        }
})
    }
})

server.listen(4000,()=>{
    console.log("server started at http://localhost:4000")
})