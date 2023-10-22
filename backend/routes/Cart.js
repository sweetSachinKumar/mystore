const express = require("express")
const router = express.Router()
const Cart = require("../model/cart")
const cart = require("../model/cart")


router.get("/", async (req, res)=> {
    try{
    const allcartItem = await Cart.find({})
    res.json({allcartItem})
}

catch (err){
    res.json({error:"some error occuerd"})
}
})
 

// url for add to cart 
router.post("/addtocart", async (req, res)=> {
    try{
    const {title, description, price, rating, brand, category, thumbnail, images} = req.body

    const findProduct = await Cart.find({title,price, thumbnail})
   
console.log(findProduct)
    if(findProduct.length >= 1){
        res.json({status:"product is already exit", cartToAdd})
   console.log("already exit")
    }else{
  
   const cartToAdd = await Cart.create({title, description, price, rating, brand,images, category, thumbnail})
   console.log("not exit")

        res.json({status :"ok"})
    }
    
}

catch (err){
    res.json({error:"some error occuerd"})
}
})


// url for delete a cart by id 
router.delete("/removefromcart/:id", async (req, res)=> {
    try{
    const urlId = req.params.id
    const removedFromCart = await Cart.findByIdAndDelete(urlId)
    res.json({status :"ok", removedFromCart})
}

catch (err){
    res.json({error:"some error occuerd"})
}
})


// url for update a cart by id
router.put("/updatetocart/:id", async (req, res)=> {
    try{
    const urlId = req.params.id
    const {quantity} = req.body

    let getItem = await Cart.findById(urlId)
    if(!getItem) {
       return console.log("this is not exist")
    res.json({status:'not allowed'})

    }
if(quantity >0){
    getItem = await Cart.findByIdAndUpdate(urlId, {$set : {quantity}}, {new:true})
    res.json({status :"ok"})
}
else{
    res.json({status:'not allowed'})
}

}

catch (err){
    res.json({error:"some error occuerd"})
}
})
 


module.exports = router