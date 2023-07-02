const mongoose = require("mongoose")

const InstaSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,'please enter the username']
    },
    password:{
        type:String,
        required:[true,'please enter the username']
    }
})

module.exports = mongoose.model('Credential',InstaSchema)