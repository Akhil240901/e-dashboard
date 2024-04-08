const express=require('express');
const user = require('./db/user');
require('./db/config');

const app=express();

app.use(express.json());

app.post("/register",async(req,resp)=>{
    const data=new user(req.body);
    const result=await data.save();
    console.log(result)
    resp.send(result);
})
app.listen(5000);