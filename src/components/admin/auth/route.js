import express from "express";
import { login, logout } from "./controller.js";
const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/logout", logout);
// authRoute.post('/signup', createAdmin );

export default authRoute;
