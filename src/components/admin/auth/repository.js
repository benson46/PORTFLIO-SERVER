import Admin from "./adminModel.js";
import { config } from "../../../config/appConfig.js";


export const adminRepository = {
    findAdminByEmail: async (email) => {
        try {
            const admin = await Admin.find({email});
            return admin;
        } catch (error) {
            console.error('Error finding user by ID:', error.message);
      throw new Error('Error retrieving user data');
        }
    }
}