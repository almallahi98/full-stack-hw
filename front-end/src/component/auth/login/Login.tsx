import { Center, SimpleGrid,Heading, FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
    const [LoginData, setLoginData] = useState({username:'',password:''})
    const Login=()=>{
        fetch('http://localhost:5000/api/v1/auth/login',{
            method:'POST',
            mode:'cors',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(LoginData)
    }).then((res)=>{if(res.status===201){localStorage.setItem("token",JSON.stringify(res.body))}})
    }
  return (
    <Center mt={'15vh'}>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Registeration form</Heading>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type={"text"} onChange={(e)=>{setLoginData({...LoginData,username:e.target.value})}}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type={"password"} onChange={(e)=>{setLoginData({...LoginData,password:e.target.value})}}/>
                </FormControl>
                </SimpleGrid>
                <Flex justifyContent={"end"} pr='15px'>
                    <Button mt={4} w='60%' onClick={Login}>Login</Button>
                </Flex>
                </Center>

  )
}

export default Login