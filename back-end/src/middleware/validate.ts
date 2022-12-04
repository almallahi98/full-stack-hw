import { NextFunction, Request, Response } from 'express'
import {AnyZodObject,ZodError} from 'zod'
export const validate=(schema: AnyZodObject)=>(req:Request,res:Response,next:NextFunction)=>{
    try{
       schema.parse({
        body:req.body,
        params:req.params,
        });
        next();
    }
    catch(err){
        const zodError= err as ZodError;
        return res.status(400).json({msg:zodError.errors[0].message})
    }
}