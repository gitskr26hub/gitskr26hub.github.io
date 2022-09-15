import { Text , Box} from '@chakra-ui/react'
import React, { useState } from 'react'
import './Skills.css'

import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';




const Skills = () => {
  

  return (
    <div className='main-Skill-Box'>
<div>
<Text fontWeight="semibold" className='skills'>Skills</Text>
<Text className='myTech' fontWeight="semibold">My technical level</Text>
</div>

<div className='skill-mainBox'>
    <div >
        <Text fontWeight="semibold" style={{alignItems:"center"}}> <CodeIcon/> Frontend Development</Text>
         <div> </div>
    </div>
     <div>
    <Text fontWeight="semibold"><DataObjectIcon/>  Data Structure And Algorithms</Text>
    </div>
    </div>




    </div>
  )
}

export default Skills