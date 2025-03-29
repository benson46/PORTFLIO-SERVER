import express from "express";
import morgan from "morgan";
import config from "./config/dotenv.js";
import client from "./utils/redis/redis.js";
import routes from "./routes.js";
import cors from "cors";
import connectDB from "./config/db.js";
import cookie_parser from 'cookie-parser'

const app = express();
const PORT = config.PORT;
const CLIENT_URL = config.CLIENT_URL;


//Middlewares
app.use(morgan("short"));
app.use(express.json());
app.use(cookie_parser())
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "User-Email"],
  })
);

app.use("/api", routes);

app.listen(PORT, async () => {
  await client.connect();
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
