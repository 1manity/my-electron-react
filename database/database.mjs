// database.mjs

import mongoose from "mongoose";
import dotenv from "dotenv";

// 加载环境变量
dotenv.config();

// 从环境变量中获取 MongoDB URI
const mongoURI = process.env.MONGODB_URI;

// 连接到 MongoDB 数据库
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

export default mongoose;
