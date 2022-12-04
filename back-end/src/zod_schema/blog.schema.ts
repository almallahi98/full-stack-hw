import {z,TypeOf} from 'zod'

export const deleteBlogSchema=z.object({
    params:z.object({
        id:z.string({required_error:"blog id is required",invalid_type_error:"id typr must be a string"})
    })
})
export type deleteBlogSchema= TypeOf <typeof deleteBlogSchema>['params'];