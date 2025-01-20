import express from 'express';
import { connectDB } from './config/dbConfig.js';

const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Server running in ${config.app.environment} mode`);
});

export default app;