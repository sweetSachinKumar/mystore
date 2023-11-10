const mongoose = require('mongoose')

const productSchema =  new mongoose.Schema({
    title: {
        type:String
    },
    description: {
        type:String
    },
    price:{
        type:Number
    },
    brand:  {
        type:String
    },
    category:  {
        type:String
    },
    thumbnail:  {
        type:String
    }
})


// module.exports = mongoose.model("allproduct", productSchema)
module.exports = mongoose.model("product", productSchema)