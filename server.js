const express = require("express") 
const mongoose = require("mongoose")
const UserRouter = require("./router/UserRouter")
const ProductRouter = require("./router/ProductRouter")
const cors = require("cors")


const authMiddleware = require("./middleware/auth")

const dotenv = require("dotenv").config()

mongoose.connect("mongodb+srv://emreckorkmaz:emreckorkmaz@cluster0.js6xdpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err))


const app = express()
app.use(express.json())




app.use(cors({origin:"*"}))

app.use("/user",UserRouter)
app.use("/product",ProductRouter)

app.use(authMiddleware)

app.listen(9000,()=>{
    console.log('NodeJs Backend 9000 Portunda Çalışıyor')
})


