import express from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js'
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config()
const app=express();

app.use(express.json());
app.use('/projects',projectRoutes)
app.use('/auth',authRoutes)

app.use(errorHandler)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`The Server is running on port ${process.env.PORT || 3000}`)
})