import React from 'react'
import {Tr,Td, useToast, Button, Flex} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
 export interface tdData{
    tiltle:string,
    massage:string,
    b_id:string,
    getall:Function
}
function TableElm(props:tdData) {
    const toast=useToast();
    const deleteBlog=async()=>{
        const request=await fetch(`http://localhost:5000/api/v1/blog/deleteblog/${props.b_id}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        const data=await request.json();
        if(request.status !== 200){
            console.log('not good');
            
            toast({
                position:'bottom',
                status:'error',
            title:data.msg,
            duration:3000
        })
            return;
        }
        toast({position:'bottom',
        status:'success',
        title:data.msg,
        duration:3000})
        console.log('good');
        props.getall();
    }
  return (
    <Tr>
        <Td textAlign={'center'}>{props.tiltle}</Td>
        <Td textAlign={'center'}>{props.massage}</Td>
        <Td><Flex justifyContent={'center'}><Button onClick={deleteBlog}><CloseIcon mr={'15%'}/>   delete</Button></Flex></Td>
      </Tr>
  )
}

export default TableElm