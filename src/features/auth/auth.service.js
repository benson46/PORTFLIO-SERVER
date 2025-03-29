import { generate_access_token, generate_refresh_token } from "../../utils/jwt/jwt.js";
import { compare_password } from "../../utils/secure/password.js";
import Admin from "./auth.model.js";


export async function login_admin(email, password) {
  try {
    function validate_data(email, password) {
      if (!email || !password) {
        throw new Error("Email and password are required");
      } else if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(password)
      ) {
        throw new Error(
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        );
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Email must be a valid email address");
      }
    }
    validate_data(email, password);

    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw new Error("Admin not found");
    }

    const is_password_valid = await compare_password(password,admin.password);
    if (!is_password_valid) {
      throw new Error("Invalid password");
    }

    const refresh_token = generate_refresh_token(admin._id);
    const access_token = generate_access_token(admin._id);

    return {
      success: true,
      message: "Login successful",
      refresh_token,
      access_token
    };
  } catch (error) {
    throw new Error(error.message);
  }
}