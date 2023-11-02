const mongoose = require('mongoose')


const connectDB = async (url) => {
    console.log("connected to mongodb")
    await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB