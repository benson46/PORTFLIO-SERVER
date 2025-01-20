import { comparePassword } from "../../../utils/secure/password";
import { adminRepository } from "./repository";
import bcrypt from "bcryptjs";

export const adminService = {
  login: async (email, password) => {
    try {
      const admin = adminRepository.findAdminByEmail(email);
      if (!admin) {
        throw new Error("Invalid credentials");
      }

      const isMatch = await comparePassword(password,admin.password)
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }

      
    } catch (error) {}
  },
};
