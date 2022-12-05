import { Request, Response } from "express";
import { Blog } from '@prisma/client'
import { dbContext } from "../config/dbContext";
import { IUser } from "../middleware/auth";
import { deleteBlogSchema } from "../zod_schema/blog.schema";


export const addNewBlog = async (req: Request, res: Response) => {
    try {
        const data = req.body as Blog;
        data.user_id=res.locals.user.user_id
        //const user = res.locals.user as IUser;
        //console.log(data);
        if(!data){
            return
        }
        await dbContext.blog.create({data:{
            tiltle:"sss",
            massage:"sss",
            user:{connect:{user_id:data.user_id}}
        }})
   
        
        return res.status(201).json({ msg: "new blog is added .." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({msg:err})
    }
}

export const deleteBlog = async (req: Request, res: Response) => {
    const { id } = req.params as deleteBlogSchema;
    const user = res.locals.user as IUser;
    console.log(req.params);

    const deleteBlog = await dbContext.blog.deleteMany({
        where: {
            b_id: parseInt(id), AND: { user_id: user.user_id }
        }
    })
    if (deleteBlog.count == 0) {
        return res.status(400).json({msg:'no blog fund with the given id'})
    }
    return res.status(200).json({ msg: "blog deleted" })
}

export const getAllBlog = async (req: Request,res: Response) => {
    try {
        
        const user= res.locals.user
        console.log(user)
        const Blogs = await dbContext.blog.findMany({ where: { user_id: user.user_id } });
        return res.status(200).json(Blogs);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({msg:"user bloges is empty"})
        
    }
    // console.log(res.locals.user);
    


}