const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)

//GET:http://localhost:5000/
app.get('/',(req,res)=>{
    res.send({"message":"Home"})
})

//GET:http://localhost:5000/hello
app.get('/hello',(req,res,next)=>{
    res.send({"message":"Hello"})
    next()
})

//POST:http://localhost:5000/hello
app.post('/user',(req,res)=>{
    res.send({'message':'Got a POST request at /user'})
})  

//PUT:http://localhost:5000/hello
app.put('/user',(req,res)=>{
    res.send({'message':'Got a PUT request at /user'})
})

//Delete:http://localhost:5000/hello
app.delete('/user',(req,res)=>{
    res.send({'message':'Got a Delete request at /user'})
})

app.all('/user',(req,res)=>{
    res.send({'message':'Got a All request at /user'})
})

server.listen(5000)