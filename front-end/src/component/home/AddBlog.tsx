import { SimpleGrid, Heading, FormControl, FormLabel, Input, Flex, Button, Center } from '@chakra-ui/react'
import React, { useState } from 'react'

function AddBlog() {
    const [AddBlog, setAddBlog] = useState({title:'',messege:''})
    return (
        <Center>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Add Blog</Heading>
                <FormControl>
                    <FormLabel>title</FormLabel>
                    <Input type={"text"} onChange={(e) => { setAddBlog({...AddBlog,title:e.target.value}) }} />
                </FormControl>
                <FormControl>
                    <FormLabel>messege</FormLabel>
                    <Input type={"text"} onChange={(e) => { setAddBlog({...AddBlog,messege:e.target.value})}} />
                </FormControl>
                <Flex><Button onClick={e => {fetch('',{
                    method:'POST',
                    mode:'cors',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(AddBlog)
                }) }}>Add Blog</Button></Flex>
            </SimpleGrid>
        </Center>


    )
}
export default AddBlog