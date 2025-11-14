import express from 'express'
import 'dotenv/config'

const app = express()

//http://localhost:5000
app.get("/",(req,res)=>{ res.send("Hello from expressjs")})
app.get("/user",(req,res)=>{
    // console.log(req.query)
    // res.send(`hello user and Query String  = ${JSON.stringify(req.query)}` )
    res.send(`hello user and Query String  = ${req.query.name}` )
})

app.get("/user/:id",(req,res)=>{
        res.send(`hello user and dynamic parameter  = ${JSON.stringify(req.params)}` )
    // res.send(`user with ${req.params.id}`)
})

app.listen(process.env.PORT ,()=>console.log(
    `server started at http://localhost:${process.env.PORT}`))