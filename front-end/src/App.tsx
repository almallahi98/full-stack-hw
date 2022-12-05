import * as React from "react"
import {
  ChakraProvider,

  theme,
} from "@chakra-ui/react"
import{Routes,Route}from 'react-router-dom'
import Reg from "./component/auth/register/Reg"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Reg/>}/>
    </Routes>
  </ChakraProvider>
)
