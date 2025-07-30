import mongoose from "mongoose";
const BookData =new mongoose.Schema({
title:String,
author:String,
category:String,
cover:String,
price:Number

})
const BooDataModel =mongoose.model("BookDataModel",BookData)
export default BooDataModel