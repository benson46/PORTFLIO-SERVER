import { config } from "../../config/appConfig";
import JWT from "jsonwebtoken";

export const generateAccessToken = async (adminId) => {
    const accessToken = await JWT.sign(
        { adminId },
        config.jwt.accessSecret,
        { expiresIn: config.jwt.accessExpiry },
    )
    return accessToken;
}


export const generateRefreshToken = async (adminId) => {
    const refreshToken = await JWT.sign(
        { adminId },
        config.jwt.refreshSecret,
        { expiresIn: config.jwt.refreshSecret},
    )

    return refreshToken;
}


export const decodeRefreshToken = async (refreshToken) => {
    const decode = JWT.verify(refreshToken, config.jwt.refreshSecret);
    return {...decode};
}

export const decodeAccessToken = async (accessToken) => {
    const decode = JWT.verify(accessToken, config.jwt.accessSecret);
    return decode;
}