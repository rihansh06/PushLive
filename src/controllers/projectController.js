import { listProjects,listProject,createProjectService,deleteProjectService } from "../services/projectServices.js";

const getProjects= async (req,res)=>{
   return res.status(200).json(await listProjects());
}
const getProject=async (req,res)=>{
   const project = await listProject(Number(req.params.id));
   if (!project) throw new AppError(404, 'Project not found');
   return res.status(200).json(project)
}
const createProject= async (req,res)=>{
   const {name,repo_url}=req.body;
   const project=await createProjectService(name,repo_url);
   return await res.status(201).json(project)
}

const deleteProject= async (req,res)=>{
   return res.status(200).json(await deleteProjectService(Number(req.params.id)));
}
export {getProjects,getProject,createProject,deleteProject}