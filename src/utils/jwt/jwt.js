import jwt from "jsonwebtoken";
import config from "../../config/dotenv.js";

const ACCESS_TOKEN = config.ACCESS_TOKEN;
const ACCESS_TOKEN_EXPIRES = config.ACCESS_TOKEN_EXPIRES;

const REFRESH_TOKEN = config.REFRESH_TOKEN;
const REFRESH_TOKEN_EXPIRES = config.REFRESH_TOKEN_EXPIRES;

//GenerateAccessToken (short-lived)
export const generate_access_token = (adminId) => {
  return jwt.sign({ adminId }, ACCESS_TOKEN, {
    expiresIn: ACCESS_TOKEN_EXPIRES,
  });
};

//GenerateRefreshToken (long-lived)
export const generate_refresh_token = (adminId) => {
  return jwt.sign({ adminId }, REFRESH_TOKEN, {
    expiresIn: REFRESH_TOKEN_EXPIRES,
  });
};

//VerifyAccessToken (short-lived)
export const verify_access_token = (token) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN);
  } catch (error) {
    return null;
  }
};

//VerifyRefreshToken (long-lived)
export const verify_refresh_token = (token) => {
  try {
    return jwt.verify(token, REFRESH_TOKEN);
  } catch (error) {
    return null;
  }
};
