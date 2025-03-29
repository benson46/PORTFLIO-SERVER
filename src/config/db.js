import  config from "./dotenv.js";
import mongoose from "mongoose";

const MONGO_URI = config.MONGO_URI;

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      console.error("MongoDB URI not found in environment variables.");
      process.exit(1);
    }

    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;