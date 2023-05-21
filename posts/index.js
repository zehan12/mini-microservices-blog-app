const express = require("express");
const {randomBytes} = require("crypto")
const axios = require("axios");

const app = express();
app.use(express.json());
const post = {};

app.get("/posts",(req,res)=>{
    res.send(post)
})

app.post("/posts",(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    post[id] = {
        id,title
    }
    res.status(201).send(post[id]);
})

app.listen(4000,()=>{
    console.log("listing on port 4000")
})