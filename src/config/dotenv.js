import dotenv from 'dotenv';
dotenv.config();

const config ={
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES: process.env.ACCESS_TOKEN_EXPIRES||"15m",
    REFRESH_TOKEN: process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRES: process.env.REFRESH_TOKEN_EXPIRES||"7d",
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    CLIENT_URL: process.env.CLIENT_URL,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV:process.env.NODE_ENV
}


export default config;