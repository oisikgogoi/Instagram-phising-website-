const mongoose = require('mongoose');

const connectDB = (url)=>{
    mongoose.set('strictQuery',true)

    mongoose.connect(url)
    .then(()=> console.log('db connected succesfully'))
    .catch(err=> console.log('err while connecting db',err.message))

}

module.exports = connectDB