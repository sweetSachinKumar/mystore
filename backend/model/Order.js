const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    title: {
        type:String
    },
    quantity: {
        type:Number,
        
    }, 
    shipping: {
        type:Number,
        default: 40
        
    }, 
     price:{
        type:Number,
        required:true
    },
    thumbnail:  {
        type:String,
        required:true
    },
    orderStatus: {
        type:String,
        default: "processing"

    },
    date : {
        type: Date,
        default: Date.now
    },
    payment : {
        type:String,
        required:true,
        default: "Pay on delevery"
    }
    
})

module.exports = mongoose.model('myorder', orderSchema)