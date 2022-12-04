import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
export interface IUser{
    user_id:string,
    username:string,
    
}
export const protect=(req:Request,res:Response,next:NextFunction)=>{
    const msg="you are not allowed to enter";
    try{
        let token=req.headers.authorization;
        if(!token){
            return res.status(401).json({msg:msg});
        }
        token=token.split(' ')[1];
        const user= jwt.verify(token,process.env.SECRET as string) as IUser;
        res.locals.user= user;
        next();
    }
    catch(err){
        return res.status(401).json({msg:msg});
    }
}