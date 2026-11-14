import { AppError } from "../utils/AppError.js";

export const validateLogin=(req,res,next)=>{
    const {email,password}=req.body ?? {};
    if(typeof email!=='string' || email.trim()==='') throw new AppError(400,"Enter a valid Email id");

    if(typeof password!=='string'|| password.trim()==='') throw new AppError(400,"Enter a valid Password");

    next();
}