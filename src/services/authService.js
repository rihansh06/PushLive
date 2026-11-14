import bcrypt from "bcrypt"
import prisma from "../db.js"
import { AppError } from "../utils/AppError.js";


const signUpService= async (email,password)=>{
    const hash=await bcrypt.hash(password,10);

  return await prisma.users.create({
        data:{email,password_hash:hash},
        select:{email:true,id:true,created_at:true},
    });

    

}

const loginService=async(email,password)=>{
    const user=await prisma.users.findUnique({where:{email}});

    if(!user || !await bcrypt.compare(password,user.password_hash)) throw new AppError(401,"Incorrect email or Password");

    return {id:user.id,email:user.email,created_at:user.created_at};
}

export {signUpService,loginService};