const express = require("express")
const router = express.Router()
const Cart = require("../model/cart")
const {body, validationResult} = require('express-validator')
const fetchuser = require("../middleware/fetchuser")

router.get("/",fetchuser, async (req, res)=> {
    try{
        const userId = req.user.id
    const allcartItem = await Cart.find({user:userId})
    res.json({allcartItem})
}

catch (err){
    res.json({error:"some error occuerd"})
}
})




 

// url for add to cart 
router.post("/addtocart",fetchuser, [
    body('title', "description can Not be blanked").exists(),
    body("description", "description can Not be blanked").exists(),
    body("price", "price can Not be blanked").exists(),
    body("rating", "rating can Not be blanked").exists(),
    body("brand", "brand can Not be blanked").exists(),
    body("category", "category can Not be blanked").exists(),
    body("thumbnail", "description can Not be blanked").exists()
],async (req, res)=> {
    
            // if there are errors then return bad request  and error
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({error: errors.array()})
            }

            const {title, description, price, rating, brand, category, thumbnail, images} = req.body

    try{






    const findProduct = await Cart.find({title,price, thumbnail})
   
    const cartToAdd = await Cart.create({title, description, price, rating, brand,images, category, thumbnail, user: req.user.id})
    res.json({status :"ok", cartToAdd})


    }catch (err){
        return res.status(500).json({error: "internal server error"})
    }
})











// url for delete a cart by id 
router.delete("/removefromcart/:id",fetchuser, async (req, res)=> {
    const urlId = req.params.id
    try{
        let removedFromCart = await Cart.findById(urlId)
        
        
        // first find the cart product is exist or not
        if(!removedFromCart) {
            return res.status(404).json({status:'Not found'})
        }
        // check user's cart 
        if(removedFromCart.user.toString() !== req.user.id){
            return res.status(401).json({status:"Not Allowed!"})
        }
    


     removedFromCart = await Cart.findByIdAndDelete(urlId)
    res.json({status :"removed successfully", removedFromCart})
}

catch (err){
    res.json({error:"some error occuerd"})
}
})








// url for update a cart by id  :Login required
router.put("/updatetocart/:id",fetchuser, async (req, res)=> {
    const urlId = req.params.id
    const {quantity} = req.body
    if(!quantity){
      return  res.status(400).json({error: "quantity is undefinde"})
    }
    
    try{

        let getItem = await Cart.findById(urlId)


    if(!getItem) {
     return res.status(404).json({status:'Not found'})
    }

    if(getItem.user.toString() !== req.user.id){
        return res.status(401).json({status:"Not Allowed!"})
    }



if(quantity >=1){
    getItem = await Cart.findByIdAndUpdate(urlId, {$set : {quantity}}, {new:true})
    res.json({status :"ok",getItem})
}
else{
    getItem = await Cart.findByIdAndUpdate(urlId, {$set : {quantity: 1}}, {new:true})
    res.json({status :"ok",getItem})

 
}

}catch (err){
        return res.status(500).json({error: "internal server error"})
    }
})
 

module.exports = router
