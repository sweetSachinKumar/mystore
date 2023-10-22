const express = require("express")
const app = express()
const PORT = 4000 || process.env.PORT 
const connectDB = require("./db")
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.use("/product/", require('./routes/product'))
app.use("/cart/", require("./routes/Cart"))
app.use("/auth", require("./routes/user"))

app.get("/", (req, res)=> {
    res.send("hey")
})

const startServer = async ()=> {
    try{

    await connectDB()
    app.listen(PORT, ()=> {
    console.log(`this port is running on http://localhost:${PORT}`)
})
    } 
    catch (err){
        console.log(err)
    }

}


startServer()