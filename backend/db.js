const mongoose = require('mongoose')

// const url = "mongodb://sachinwebmern:MERNstack2023@ac-k0uvxlw-shard-00-00.crcmwgs.mongodb.net:27017,ac-k0uvxlw-shard-00-01.crcmwgs.mongodb.net:27017,ac-k0uvxlw-shard-00-02.crcmwgs.mongodb.net:27017/myecomerce?ssl=true&replicaSet=atlas-jw1sco-shard-0&authSource=admin&retryWrites=true&w=majority"


// const url = "mongodb://127.0.0.1:27017/myAPI"

const connectDB = async (url) => {
    console.log("connected to mongodb",url)
    await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB