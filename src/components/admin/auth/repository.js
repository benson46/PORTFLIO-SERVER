import Admin from "./adminModel.js";
import { config } from "../../../config/appConfig.js";
import { hashPassword } from "../../../utils/secure/password.js";

export const adminRepository = {
    findAdminByEmail: async (email) => {
        try {
            const admin = await Admin.findOne({ email });
            return admin
        } catch (error) {
            console.error('Error finding user by ID:', error.message);
            throw new Error('Error retrieving user data', 404 );
        }
    },
    createAdmin: async (email, password) => {
        try {
            const admin = new Admin({
                email,
                password : await hashPassword(password),
                role: 'admin',
            })
            admin.save()
            return 'Admin saved'
            
        } catch (error) {
            throw new Error("hi",500)
        }
    } 
}