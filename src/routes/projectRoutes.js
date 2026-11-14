import express from "express";
import { getProjects,getProject,createProject,deleteProject } from "../controllers/projectController.js";
import { validateProject } from "../middleware/validateProject.js";

const router=express.Router();

router.get('/',getProjects);

router.get('/:id',getProject);

router.post('/:id',validateProject,createProject);

router.delete('/:id',deleteProject);

export default router;