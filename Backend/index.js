import express from 'express'
import dotenv from 'dotenv'
const app=express();

dotenv.config()
app.get('/',(req,res)=>{
    if(req.url==='/')
res.send("Hello World")
})
const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("App listning at port 3000")
})