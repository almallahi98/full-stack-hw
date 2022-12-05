import * as React from "react"
import {
  ChakraProvider,

  theme,
} from "@chakra-ui/react"
import{Routes,Route}from 'react-router-dom'
import Reg from "./component/auth/register/Reg"
import Login from "./component/auth/login/Login"
import Blog from "./component/home/Blog"
import AddBlog from "./component/home/AddBlog"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/addblog" element={<AddBlog/>}/>
    </Routes>
  </ChakraProvider>
)
