import { SimpleGrid, Heading, FormControl, FormLabel, Input, Flex, Button, Center } from '@chakra-ui/react'
import React from 'react'

function AddBlog() {
    return (
        <Center>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Add Blog</Heading>
                <FormControl>
                    <FormLabel>title</FormLabel>
                    <Input type={"text"} onChange={(e) => { }} />
                </FormControl>
                <FormControl>
                    <FormLabel>messege</FormLabel>
                    <Input type={"text"} onChange={(e) => { }} />
                </FormControl>
                <Flex><Button onClick={e => { }}>Add Blog</Button></Flex>
            </SimpleGrid>
        </Center>


    )
}
export default AddBlog