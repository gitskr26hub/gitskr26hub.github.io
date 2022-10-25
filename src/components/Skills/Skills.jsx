import { Text , Box,Heading} from '@chakra-ui/react'
import React, { useState } from 'react'
import './Skills.css'

import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';




const Skills = () => {
  

  return (
    <Box className='main-Skill-Box'>
<Box>
<Heading fontWeight="bold" fontSize={['30px','40px','70px']}  className='skills'>Skills</Heading>
<Heading className='myTech' fontSize={['20px','25px','40px']} fontWeight="bold">My technical level</Heading>
</Box>

<Box className='skill-mainBox'>
    <Box >
        <Heading as='h4' size={['sm','md','lg']} 
        fontWeight="bold"
         style={{alignItems:"center"}}> <CodeIcon/> Frontend Development</Heading>
         <Box> </Box>
    </Box>
     <Box>
    <Heading as='h4' size={['sm','md','lg']} 
    fontWeight="bold"><DataObjectIcon/>  Data Structure And Algorithms</Heading>
    </Box>
    </Box>




    </Box>
  )
}

export default Skills