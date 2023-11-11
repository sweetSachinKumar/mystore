
const jwt = require("jsonwebtoken")
const JWT_SECRET = "sldkf@534k3jfsi"


const fetchuser = (req, res, next)=>{
// get the user from jwt token and add id to req object
    const token = req.header('auth-token')
    try{
    if(!token){
        res.status(401).json({success: false, error: "No Account! Sign up Now."})
    }
   
    const data = jwt.verify(token, JWT_SECRET)
    req.user = data.user


    next()
    }  catch(err){
        res.status(500).json({success: false, error:"No any Account! Sign Up Now"})
        // console.log(err)
    
        }
}

module.exports = fetchuser