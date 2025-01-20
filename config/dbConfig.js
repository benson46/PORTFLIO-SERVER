import mongoose from 'mongoose';
import { config } from './appConfig.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri);
    console.log(' MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};