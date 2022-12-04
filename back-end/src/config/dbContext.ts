import { PrismaClient } from "@prisma/client";

const dbContext=new PrismaClient({
    log:['query'],
    errorFormat:'pretty',
});

const connectDB= async ()=>{
    try{
        await dbContext.$connect();
        console.log('DB connected..');
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


export {dbContext,connectDB};