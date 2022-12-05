import React from 'react'
import {Tr,Td, Icon} from '@chakra-ui/react'
 export interface tdData{
    tiltle:string,
    massage:string,
    b_id:string,
}
function TableElm(props:tdData) {
  return (
    <Tr>
        <Td>props.tiltle</Td>
        <Td>props.massage</Td>
        <Td><Icon as='button'/></Td>
      </Tr>
  )
}

export default TableElm