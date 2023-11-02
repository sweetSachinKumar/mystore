const mongoose = require('mongoose')

const cartSchema =  new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }  ,
    title: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        default: 1
    },
    
    description: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:  {
        type:String,
        default:"sachin"
    },
    category:  {
        type:String,
        required:true
    },
    thumbnail:  {
        type:String,
        required:true
    }
})


module.exports = mongoose.model("mycart", cartSchema)