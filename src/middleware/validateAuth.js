
import { AppError } from "../utils/AppError.js";
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const PASSWORD_RE = /^\S{8,72}$/;
export const validateAuth=(req,res,next)=>{
    const {email,password,confirmPassword}=req.body ?? {};

    if(typeof email!=='string' || !EMAIL_RE.test(email) ) throw new AppError(400,"Enter a valid Email (abc@email.com)");

    if(typeof password!=='string' || !PASSWORD_RE.test(password)) throw new AppError(400,"Password must be 8 to 72 characters with no spaces");

    if(password!==confirmPassword) throw new AppError(400,"Password and Confirmed Password should match");

    next();
}