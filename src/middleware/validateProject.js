import { AppError } from "../utils/AppError.js";

const NAME_RE = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/;
const REPO_RE = /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

export const validateProject= (req,res,next)=>{
    const{name,repo_url}=req.body ?? {};
    
    if(typeof name !=='string' || !NAME_RE.test(name)) throw new AppError(400,'Enter a valid name')
    if(typeof repo_url !=='string' || !REPO_RE.test(repo_url)) throw new AppError (400,'Enter a valid url ')     
    
    next();
}