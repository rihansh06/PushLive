import { loginController, signUpController } from "../controllers/authController.js";
import { validateAuth } from "../middleware/validateAuth.js";
import express from "express"
import { validateLogin } from "../middleware/validateLogin.js";

const authRoutes=express.Router()

authRoutes.post("/signup",validateAuth,signUpController);
authRoutes.post("/login",validateLogin,loginController);

export default authRoutes;