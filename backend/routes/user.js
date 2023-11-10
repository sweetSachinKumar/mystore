const express = require("express")
const router = express.Router()
const User = require("../model/User")
const {body, validationResult} = require('express-validator')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "sldkf@534k3jfsi"
// get user
router.post('/getAllUser', async (req, res)=> {
  try{  
    let myQuery =  User.find({}).sort("-date")
    let userLength = await User.find({})
    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 12
    let skip = (page-1)*limit
    myQuery = myQuery.skip(skip).limit(limit)

    const userData = await myQuery
    res.json({dataLength: userLength.length, status:"ok", userData})
  }
    catch (err){
        return res.status(500).json({error: "internal server error"})
    }

    
})


// authenticate a user using POST: /auth/createuser ... No login required
router.post('/createuser',[
    body('name', "name should be at least 3 character").isLength({min:3}),
    body('email', "enter a valid email").isEmail(),
    body("password", "password should be atleast 3 character").isLength({min:3})
], async (req, res)=> {
    try{
        // if there are errors then return bad request  and error
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()})
        }

        // check weather the user with this email is exists already 
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).json({error: "a user is already exists with this email"})
        }
        const salt = await bcrypt.genSalt(10)
        const secPassword = await bcrypt.hash(req.body.password, salt)

      user = await User.create({
        name: req.body.name ,
        email: req.body.email ,
        password: secPassword
     })
     const data = {
        user: {
            id: user.id
        }
     }
     const authtoken =  jwt.sign(data, JWT_SECRET)
    res.json({success: true, user, authtoken})


    } catch(err){
    res.status(500).json({success: false, error:"Please enter a unique value"})

    }
})



// authenticate a user using POST: /auth/createuser ... No login required

router.post('/login',[
    body('email', "enter a valid email").isEmail(),
    body("password", "password can Not be blanked").exists()
], async (req, res)=> {
            // if there are errors then return bad request  and error
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({error: errors.array()})
            }
    
    
    const {email, password} = req.body
    try{
    let user = await User.findOne({email})
    if(!user) {
        return res.status(400).json({error:"incorrect email"})
    }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if(!passwordCompare){
        return res.status(400).json({error:"Password is not correct"})
    }
    const data = {
        user: {
            id: user.id
        }
     }
     const authtoken =  jwt.sign(data, JWT_SECRET)
    res.json({success: true, user, authtoken})



} catch (err){
    return res.status(500).json({error: "internal server error"})
}
})




router.post('/getaUser',fetchuser, async (req, res)=> {


    try{
      
        const user = await User.findById(req.user.id).select("-password")
        res.json({success: true, user})

        
    }  catch (err){
        return res.status(500).json({error: "internal server error"})
    }

})




// url for delete a cart by id 
router.delete("/removeuser/:id", async (req, res)=> {
    const urlId = req.params.id
    try{
        let removeUser = await User.findById(urlId)
         
        // first find the  user is exist or not
        if(!removeUser) {
            return res.status(404).json({status:'Not found'})
        }

     removeUser = await User.findByIdAndDelete(urlId)
    res.json({status :"removed successfully", removeUser})
}

catch (err){
    res.json({error:"some error occuerd"})
}
})








module.exports = router
