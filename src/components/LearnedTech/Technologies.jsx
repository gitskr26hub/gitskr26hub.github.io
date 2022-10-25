import { Text,Box,Image,Heading } from "@chakra-ui/react"
import "./Tech.css"
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'








const Technologies = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";


  return (<>
<Box className="techmain">
 
 <Box fontSize={['sm', 'md', 'lg', 'xl']}>
  <Heading  className="tech">Technologies Learned</Heading></Box>
  

<Box className='techImg' >
    
<Image  className="img" src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png" alt='html'/>
<Image  className="img" src="https://t4.ftcdn.net/jpg/00/75/92/23/240_F_75922336_Jz2QgNOx7dnRea9ZI6yQTDtn1vHq5ejF.jpg" alt='css'/>
<Image  className="img" src="https://t4.ftcdn.net/jpg/00/75/92/23/240_F_75922332_V8jiJ9I2F9d9HqV7RtPzUAxr5s7YHWOd.jpg" alt='js'/>
<Image  className="img" src='data:image/png;base64,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' />
  
  <Image  className="img" src='https://ivazz.com/wp-content/uploads/2021/05/react.png'  alt='react'/> 
  <Image className="img"  src='data:image/png;base64,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' alt='chakra'/> 
  <Image className="img"
  src="https://lh3.googleusercontent.com/WgTVt2TUmCDrJuhBVQi84ynGogOcDzzAwKrR4IUxObCoNd-VAVeRph3gQtlUEgYq2yj9OgwtsGw0ylIwigC66jHmy1I0oxJ3GbNaS1criuH6-ohZ39dnwLOdhAzYuqaR1OX5ln7n" alt='material ui'/> 
    </Box>


</Box>
    </>
  )
}

export default Technologies



