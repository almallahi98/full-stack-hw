import {

    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid,
} from "@chakra-ui/react";

import React, { useState } from "react";

function Reg() {
const [RegisterData, setRegisterData] = useState({username:'',email:'',password:''})
const Register=()=>{
    fetch('http://localhost:5000/api/v1/auth/register',
    {
        method:'POST',
        mode:"cors",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(RegisterData)
    })
}
    return (
        <Center mt={'15vh'}>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Registeration form</Heading>
                <FormControl>
                    <FormLabel>User Name</FormLabel>
                    <Input type={"text"} onChange={(e)=>{setRegisterData({...RegisterData,username:e.target.value})}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>email</FormLabel>
                    <Input type={"email"}  onChange={e=>{setRegisterData({...RegisterData,email:e.target.value})}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>password</FormLabel>
                    <Input type={"password"} onChange={e=>{setRegisterData({...RegisterData,password:e.target.value})}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>re-password</FormLabel>
                    <Input type={"password"} onChange={e=>{}}/>
                </FormControl>
                <Flex justifyContent={"end"} pr='15px'>
                    <Button mt={4} w='60%' onClick={Register}>Register</Button>
                </Flex>
            </SimpleGrid>
        </Center>
    );
}

export default Reg;
