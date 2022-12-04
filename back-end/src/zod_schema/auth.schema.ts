import {z} from 'zod'

const msg="user name or passwod is wrong";
export const registerSchema=z.object({
    body:z.object({
        username:z.string({required_error:"username is required"}),
        password:z.string({required_error:"password is required"})
    })
})
export const loginSchema=z.object({
    body:z.object({
        username:z.string({required_error:msg,invalid_type_error:msg}).min(6,msg),
        password:z.string({required_error:msg,invalid_type_error:msg}).min(6,msg),
    })
})