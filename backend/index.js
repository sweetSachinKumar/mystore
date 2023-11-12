require('dotenv').config()


const express = require("express")
const app = express()
const PORT = 4000 || process.env.PORT 
const connectDB = require("./db")
const cors = require("cors")
app.use(cors())
app.use(express.json({}))
 
app.use("/product/", require('./routes/product'))
app.use("/cart/", require("./routes/Cart2"))
app.use("/auth", require("./routes/user"))
app.use("/order", require("./routes/order"))


app.get("/", (req, res)=> {
    res.send("hey")
})

const startServer = async ()=> {
    try{

        app.listen(PORT, ()=> {
            console.log(`this port is running on http://localhost:${PORT}`)
        })
        await connectDB(process.env.MONGODB_URL)
    } 
    catch (err){
        console.log(err)
    }

}


startServer()

// app.listen(PORT, ()=> console.log(`this port is running on http://localhost:${PORT}`) )
// connectDB(process.env.MONGODB_URL)