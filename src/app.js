import express from 'express';
import { connectDB } from './config/dbConfig.js';
import authRoute from './components/admin/auth/route.js';
import { corsConfig } from './config/corsConfig.js';
const app = express();
connectDB();

app.use(corsConfig)

app.use(express.json());

console.log('hi')
app.use('/admin/api', authRoute);

export default app;