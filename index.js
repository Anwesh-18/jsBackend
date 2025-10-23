// import { configDotenv } from 'dotenv';
// require('dotenv').config();
// const express = require('express')
import express from 'express'; // this will give error unless we add type:'module' in package.json
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT||4000

app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id: "joke1",
            title: "first joke"
        },
        {
            id: "joke2",
            title: "first joke"
        },
        {
            id: "joke3",
            title: "third joke"
        },
        {
            id: "joke4",
            title: "fourth joke"
        },
        {
            id: "joke5",
            title: "fifth joke"
        }
    ]
    res.send(jokes);
});

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})