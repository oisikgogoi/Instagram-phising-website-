//jshint esversion:6
const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000
const mongoose = require('mongoose')
const path = require('path');
const connectDB = require("./connectDb")



const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const model =  require('./models/instaModel.js')



app.post('/', async function(req,res){
    const {email, password} = req.body
    let user
    if(!email || !password){
        return res.status(400).json({msg:false})
    }
    try{
      user = await model.create({
        email,
        password
    })

    }catch(err){
        return res.status(500).json({msg:'something went wrong '})
    }
    
   return res.status(200).json({msg:user})

})


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

const startServer = async  ()=>{

    try{
         connectDB("mongodb+srv://oisik:oisik@cluster1.itdrfyl.mongodb.net/credentialsDB?retryWrites=true&w=majority")
     
        app.listen(port,()=>{
            console.log(`server running on http://localhost:${port}`)
        })
    }catch(err){
        console.log("server error")
    }
}

startServer()