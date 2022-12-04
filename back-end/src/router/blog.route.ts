import express from "express";
import { addNewBlog, deleteBlog } from "../controller/blog.controller";
import { protect } from "../middleware/auth";

const blogRoute=express.Router();
blogRoute.post('/addnewblog',protect,addNewBlog);
blogRoute.get('/deleteblog/:id',protect,deleteBlog);

export default blogRoute;