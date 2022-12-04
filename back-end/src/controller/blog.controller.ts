import { Request, Response } from "express";
import { Blog } from '@prisma/client'
import { dbContext } from "../config/dbContext";
import { IUser } from "../middleware/auth";
import { deleteBlogSchema } from "../zod_schema/blog.schema";


export const addNewBlog = async (req: Request, res: Response) => {
    try{
        const blog = req.body as Blog;
    const user = res.locals.user as IUser;
    console.log(req.body);
    
    await dbContext.blog.create({
        data: {
            massage: blog.massage,
            tiltle: blog.tiltle,
            user_id: user.user_id,
        }
    });
    return res.status(201).json({ msg: "new blog is added .." });
    }
    catch(err){
        console.log(err);
        
    }
}

export const deleteBlog = async (req: Request, res: Response) => {
    const {id} = req.params as deleteBlogSchema;
    const user=res.locals.user as IUser;
    console.log(req.params);
    
    const deleteBlog = await dbContext.blog.deleteMany({
        where: {
            b_id: parseInt(id) ,AND:{user_id:user.user_id}
        }
    })
    if (deleteBlog.count == 0) {
        return res.status(400).json('no blog fund with the given id')
    }
    return res.status(200).json({ msg: "blog deleted" })
}