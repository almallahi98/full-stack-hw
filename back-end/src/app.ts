import express from 'express'
import { connectDB } from './config/dbContext';
import router from './router/auth.route';
import blogRoute from './router/blog.route';

const app=express();
app.use(express.json());
connectDB();

app.use("/api/v1/auth",router)
app.use('/api/v1/blog',blogRoute)

app.listen(5000,()=>{
    console.log("server is running ");
})