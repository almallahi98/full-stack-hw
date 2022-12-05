import {
    Center,
    SimpleGrid,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
    Box,
    Text,
    Toast,
    useToast,
    
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [LoginData, setLoginData] = useState({ username: "", password: "" });
    const toast=useToast()
    const Login = async() => {
       const request= await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
           headers: {
             "Content-Type": "application/json" },
                body: JSON.stringify(LoginData),
            
        });
        const data=await request.json();
        if(request.status !== 200)
        {
            toast({
                title:data.msg,
                status:"error",
                duration:3000,
                position:"bottom"
            })
            return;
        }
        toast({
            title:data.msg,
            status:'success',
            duration:3000,
            position:'bottom'
        })
        localStorage.setItem('token',data);
        navigate("/blog");
        };
    return (
        <Center mt={"15vh"}>
            <SimpleGrid column={1} spacing={1} w={"30%"} mt={5}>
                <Heading>Registeration form</Heading>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type={"text"}
                        onChange={(e) => {
                            setLoginData({ ...LoginData, username: e.target.value });
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type={"password"}
                        onChange={(e) => {
                            setLoginData({ ...LoginData, password: e.target.value });
                        }}
                    />
                </FormControl>
                <Flex direction={"row"} justifyContent={"right"} mr={5}>
                    <Text mr={2}>your noe a user yet!!</Text>
                    <Link to='/reg'>Register</Link>
                </Flex>
                <Flex justifyContent={"end"} pr="15px">
                    <Button mt={4} w="60%" onClick={Login}>
                        Login
                    </Button>
                </Flex>
            </SimpleGrid>
        </Center>
    );
}

export default Login;
