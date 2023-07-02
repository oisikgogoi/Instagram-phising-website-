const mongoose = require("mongoose")

const CrendentialSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,'please enter the username']
    },
    password:{
        type:String,
        required:[true,'please enter the username']
    }
})

module.exports = mongoose.model('Credential',CrendentialSchema)