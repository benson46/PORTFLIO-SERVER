import express from "express";
import { login, logout } from "./auth.controller.js";

const auth_router = express.Router();

auth_router.post("/login", login);
auth_router.post("/logout", logout);

export default auth_router; 
