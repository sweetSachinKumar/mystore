require('dotenv').config()


const express = require("express")
const app = express()
const PORT = 4000 || process.env.PORT 
const connectDB = require("./db")
const cors = require("cors")
app.use(cors())
app.use(express.json())
 
app.use("/product/", require('./routes/product'))
app.use("/cart/", require("./routes/Cart2"))
app.use("/auth", require("./routes/user"))
let url = process.env.MONGODB_URL
// console.log(url)
app.get("/", (req, res)=> {
    res.send("hey")
})

const startServer = async ()=> {
    try{

    await connectDB(process.env.MONGODB_URL)
    app.listen(PORT, ()=> {
    console.log(`this port is running on http://localhost:${PORT}`)
})
    } 
    catch (err){
        console.log(err)
    }

}


startServer()