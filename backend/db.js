const mongoose = require('mongoose')

// const url = "mongodb://127.0.0.1:27017/myAPI"

const connectDB = async (url) => {
    console.log("connected to mongodb")
    await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB