import { signUpController } from "../controllers/authController.js";
import { validateAuth } from "../middleware/validateAuth.js";
import express from "express"

const authRoutes=express.Router()

authRoutes.post("/signup",validateAuth,signUpController);

export default authRoutes;