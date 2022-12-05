import express from 'express'
import { connectDB } from './config/dbContext';
import router from './router/auth.route';
import blogRoute from './router/blog.route';
import cros from 'cors';

const app=express();
app.use(express.json());
app.use(cros())
connectDB();

app.use("/api/v1/auth",router)
app.use('/api/v1/blog',blogRoute)

app.listen(5000,()=>{
    console.log("server is running ");
})