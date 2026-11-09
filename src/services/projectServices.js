import  Prisma  from "../db.js";

const listProjects= async ()=>{
    return  await Prisma.projects.findMany();
}

const listProject=async (id)=>{
    return await Prisma.projects.findUnique({where: {id}})
}

const createProjectService= async (name,repo_url)=>{
    return await Prisma.projects.create({
        data:{name,repo_url,user_id:1},
    })
}

const deleteProjectService=async (id) =>{
    await Prisma.projects.delete({where: {id}})
}
export {listProjects,listProject,createProjectService,deleteProjectService}