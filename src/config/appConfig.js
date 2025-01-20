import dotenv from 'dotenv';
dotenv.config();

export const config = {
  app: {
    port: process.env.PORT || 5000, 
    environment: process.env.NODE_ENV || 'development', 
  },
  db: {
    uri: process.env.MONGO_URI, 
  },
  jwt: {
    accessSecret: process.env.ACCESS_TOKEN_SECRET, 
    accessExpiry: process.env.ACCESS_TOKEN_LIFETIME|| '15m', 
    refreshSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshExpiry: process.env.REFRESH_TOKEN_LIFETIME || '7d'
  },
  email: {
    sendGridApiKey: process.env.SENDGRID_API_KEY, 
    fromEmail: process.env.FROM_EMAIL || 'noreply@example.com', 
  },
  apiKeys: {

  },
};