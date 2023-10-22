const express = require("express")
const router = express.Router()
const User = require("../model/User")
const { model } = require("mongoose")

router.post('/createuser', async (req, res)=> {
        console.log(req.body)
    let user = await User.create(req.body)
    res.json({status:"ok", user})
})

router.post('/login', async (req, res)=> {
    
    const {email, password} = req.body
    let user = await User.findOne({email, password})
    if(!user) {
        return res.status(400).json({error:"user not exit"})
    }
    res.json({status:"ok", user})
})
module.exports = router