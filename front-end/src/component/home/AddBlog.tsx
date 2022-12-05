import { SimpleGrid, Heading, FormControl, FormLabel, Input, Flex, Button, Center,useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import{useNavigate} from 'react-router-dom'

function AddBlog() {
    const [AddBlog, setAddBlog] = useState({tiltle:'',massage:''});
    const navigate=useNavigate()
    const toast=useToast();
    const addNewBlog=async()=>{
       try{
        console.log(AddBlog);
        
        const request =await fetch('http://localhost:5000/api/v1/blog/addnewblog',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    },
                    body:JSON.stringify(AddBlog)
                }) 
                const data=await request.json();
                if(request.status !== 201){
                    console.log(data);
                    
                    toast({
                        title:data.msg,
                        duration:3000,
                        position:'bottom',
                        status:'error'
                        })
                }
                toast({
                    title:data.msg,
                    duration:3000,
                    position:'bottom',
                    status:'success'
                })
                navigate('/blog');
       }
       catch(err){
        console.log(err);
        
       }
    }
    return (
        <Center>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Add Blog</Heading>
                <FormControl>
                    <FormLabel>title</FormLabel>
                    <Input type={"text"} onChange={(e) => { setAddBlog({...AddBlog,tiltle:e.target.value}) }} />
                </FormControl>
                <FormControl>
                    <FormLabel>messege</FormLabel>
                    <Input type={"text"} onChange={(e) => { setAddBlog({...AddBlog,massage:e.target.value})}} />
                </FormControl>
                <Flex><Button onClick={addNewBlog}>Add Blog</Button></Flex>
            </SimpleGrid>
        </Center>


    )
}
export default AddBlog


