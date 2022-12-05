import express from "express";
import { addNewBlog, deleteBlog, getAllBlog } from "../controller/blog.controller";
import { protect } from "../middleware/auth";

const blogRoute=express.Router();
blogRoute.post('/addnewblog',protect,addNewBlog);
blogRoute.get('/deleteblog/:id',protect,deleteBlog);
blogRoute.get('/getallblogs',protect,getAllBlog);

export default blogRoute;