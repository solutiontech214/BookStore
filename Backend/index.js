import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './Routes/book.route.js'
import cors from 'cors'
import userRoute from './Routes/user.route.js'
import e from 'cors';
dotenv.config()
const app=express();
const dbUri=process.env.MONGO_DB_URI
try{
mongoose.connect(dbUri)

}
catch(error){
    console.log("Connection error")
}
mongoose.connection.on("connected",()=>{
    console.log("db connected")
})
app.use(express.json())
app.use(cors())
app.use('/book',bookRoute)
app.use('/user',userRoute)
app.get('/',(req,res)=>{
    if(req.url==='/')
res.send("Hello World")
})
const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("App listning at port 3000")
})