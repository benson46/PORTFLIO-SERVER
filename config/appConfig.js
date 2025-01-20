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
    secret: process.env.JWT_SECRET, 
    expiry: process.env.JWT_EXPIRY || '7d', 
  },
  email: {
    sendGridApiKey: process.env.SENDGRID_API_KEY, 
    fromEmail: process.env.FROM_EMAIL || 'noreply@example.com', 
  },
  apiKeys: {

  },
};
