import { loginService, signUpService } from "../services/authService.js";

const signUpController= async (req,res)=>{
   const{email,password}=req.body ?? {};
   
   const user= await signUpService(email,password);

   return res.status(201).json(user);

}

const loginController= async (req,res)=>{
    const {email,password}=req.body ?? {};

    const user=await loginService(email,password);

    return res.status(200).json(user);
}

export {signUpController,loginController}