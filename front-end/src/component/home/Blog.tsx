import { Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TableElm, { tdData } from './TableElm';
function Blog() {
 
const [GetBlogs, setGetBlogs] = useState([]);
const getAllBlogs=()=>{
  fetch(`http://localhost:5000/api/v1/blog/getallblogs`,{
    method:'POST',
   
    headers:{
      'Content-Type': 'application/json',
      'Authorization': ''
    }
  }).then(res=>{
    return res.json();
  }).then(data=>{
    setGetBlogs(data);
  });
  
}

    
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
          <Td>Tiltle</Td>
          <Td>massage</Td>
          <Td></Td>
          </Tr>
        </Thead>
        <Tbody>
          {GetBlogs.map((elm:tdData)=>{return <TableElm tiltle={elm.tiltle} massage={elm.massage} b_id={elm.b_id} />})}
        </Tbody>
      </Table>
    </TableContainer>


  )
}

export default Blog

