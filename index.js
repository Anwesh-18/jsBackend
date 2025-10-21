require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.get('/twitter',(req,res)=>{
    res.send(`Anwesh_`)
})

app.get('/login',(req,res)=>{
    res.send(`<h2>Please login here!</h2>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})