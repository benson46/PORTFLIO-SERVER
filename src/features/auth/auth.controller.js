import * as authService from "./auth.service.js";
import config from "../../config/dotenv.js";

const NODE_ENV = config.NODE_ENV
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin_login = await authService.login_admin(email, password);

    res.cookie("access_token", admin_login.access_token, {
      httpOnly: true,
      secure: NODE_ENV === "production", 
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refresh_token", admin_login.refresh_token, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, message: "Login successful", access_token:admin_login.access_token});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
