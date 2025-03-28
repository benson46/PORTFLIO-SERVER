import { generateAccessToken, generateRefreshToken } from "../../../utils/jwt/jwt.js";
import { comparePassword } from "../../../utils/secure/password.js";
import { adminRepository } from "./repository.js";

export const adminService = {
    login: async (email, password) => {
        try {
            const admin = await adminRepository.findAdminByEmail(email);
            if (!admin) {
                throw new Error('Invalid credentials')
            }

            const isMatch = await comparePassword(password, admin.password)
            if (!isMatch) {
                throw new Error('Invalid credentials')
            }

            const accessToken = await generateAccessToken(admin._id);
            const refreshToken = await generateRefreshToken(admin._id);

            return { accessToken, refreshToken };

        } catch (error) {
            console.log(error)
            throw new Error('Internal Server Error', 500);
        }
    },
    // signup: async (email, password) => {
    //     try {

    //         const response = await adminRepository.createAdmin(email, password);
    //         return response;
    //     } catch (error) {
    //         throw new Error('Internal Server Error', 500);
    //     }
    // }
    
}