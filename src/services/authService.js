import bcrypt from "bcrypt"
import prisma from "../db.js"

const signUpService= async (email,password)=>{
    const hash=await bcrypt.hash(password,10);

  return await prisma.users.create({
        data:{email,password_hash:hash},
        select:{email:true,id:true,created_at:true},
    });

    

}

export {signUpService};