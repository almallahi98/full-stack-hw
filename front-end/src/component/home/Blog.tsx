import { Box, Button, Center, Flex, Link, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TableElm, { tdData } from './TableElm';
import {useNavigate} from 'react-router-dom'
function Blog() {
 
const [GetBlogs, setGetBlogs] = useState([]);
const navigate=useNavigate();
useEffect(() => {
  getAllBlogs()
},[])

const getAllBlogs=()=>{
  console.log(localStorage.getItem('token'));
  
  fetch(`http://localhost:5000/api/v1/blog/getallblogs`,{
    method:'GET',
   
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('token')
    }
  }).then(res=>{
    return res.json();
  }).then(data=>{
    setGetBlogs(data);
  });
  
}

    
  return (
    <>
    <Flex justifyContent={'end'} m={5} mr={'15%'}>
     <Button onClick={e=>{navigate('/addblog')}}>addblog</Button>
    </Flex>
    <Center>
      <TableContainer  w={'100%'} p={5}>
      <Table variant='simple'>
        <Thead>
          <Tr>
          <Td textAlign={'center'} fontWeight={'bold'}>Tiltle</Td>
          <Td textAlign={'center'} fontWeight={'bold'}>massage</Td>
          <Td textAlign={'center'} fontWeight={'bold'}>Action</Td>
          </Tr>
        </Thead>
        <Tbody >
          {GetBlogs.map((elm:tdData)=>{
            console.log(elm);
            
            return <TableElm tiltle={elm.tiltle} massage={elm.massage} b_id={elm.b_id} getall={getAllBlogs} />})}
        </Tbody>
      </Table>
    </TableContainer>
    </Center>
    
    </>


  )
}

export default Blog

