require('dotenv').config();
const express = require('express')
// import express from "express";clear

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Read me!')
  })
let frObj = {'name': "abhi, kisu, yash"}
app.get('/fri', (req, res)=>{
    res.json('Data:'+ JSON.stringify(frObj))
})
  
app.listen(port, () => {
  console.log(`Example app listening(Server) on port -${port}`)
})
  