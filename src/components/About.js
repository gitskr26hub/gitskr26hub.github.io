import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text,Link,Heading,Center } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import sugamImg from '../Images/sugam.jpg'
import './About.css'
import Resume from './Resume/Sugam_kumar_Resume.pdf'

function About() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const openInNewTab = url => {
        window.open(url, '_blank');
      };



    return (<Box className='aboutmainBox'>
        <Box className='stackbox'  >
        <Box  className="textbox" w={['100%','100%','70%']}>
<Text fontSize={["2xl","3xl","5xl"]}  fontWeight="semibold">Hi, I am</Text>
<Text fontSize={["3xl","4xl","6xl"]} fontWeight="bold" bgGradient="linear(to-r, cyan.300, blue.500, purple.700)" 
bgClip='text' >Sugam Kumar</Text>
<Text fontSize={["3xl","4xl","6xl"]} fontWeight="bold" bgGradient="linear(to-r,purple.500, blue.400, cyan.400, )" 
bgClip='text' >Full Stack Web Developer</Text>
<Text fontSize={["14px","14px","20px"]} style={{textAlign:"justify",marginBottom:"2%"}} width={["100%","100%","100%"]} 
color={isDark ? "white" : "#454545"}>
Self-Motivated and Aspiring Full Stack Web Developer with expertise in creating user-friendly designs & architecture, and ready-to-use websites. Looking for an entry-level position in the web development field to utilize knowledge, improve skills, and for growth.</Text>
<a href={Resume} download>
<Button mt={8} class="button-29" role="button" size={['xs','sm','md','lg']} colorScheme="blue" value="download" className='downloadbutton'
onClick={() =>
 openInNewTab('https://drive.google.com/file/d/1tfdvtXfI_ECHZdVdF2ZR0K3OvmmaEYl_/view?usp=share_link')} >
            Download Resume</Button></a>
           
                </Box>
                <Center className="imgbox">
    <Image cla alignSelf="center" className="sugamimg"
                     borderRadius='full'
    backgroundColor="transparent" boxShadow="lg" 
boxSize={["200px","250px","300px"]} src={sugamImg} />
 </Center>
            </Box>

        </Box>
      
    )
}

export default About
