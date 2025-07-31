import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './Routes/book.route.js'
import cors from 'cors'
import userRoute from './Routes/user.route.js'
dotenv.config()
const app=express();

const dbUri = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await mongoose.connect(dbUri);
    console.log("db connected");
    app.use(express.json());
   app.use(cors({
  origin: "https://book-store-5jxk.vercel.app"
}));
    app.use('/book', bookRoute);
    app.use('/user', userRoute);
    app.get('/', (req, res) => {
      if (req.url === '/') res.send("Hello World");
    });
    app.listen(PORT, () => {
      console.log(`App listening at port ${PORT}`);
    });
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
}

startServer();