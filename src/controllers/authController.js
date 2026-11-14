import { signUpService } from "../services/authService.js";

const signUpController= async (req,res)=>{
   const{email,password}=req.body ?? {};
   
   const user= await signUpService(email,password);

   return res.status(201).json(user);

}

export {signUpController}