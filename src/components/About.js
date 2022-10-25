import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text,Link,Heading,Center } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import sugamImg from '../Images/sugam.jpg'
import './About.css'
import Resume from './Resume/Sugam_kumar_resume.pdf'

function About() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (<Box className='aboutmainBox'>
        <Box className='stackbox'  >
        <Box  className="textbox" w={['100%','100%','70%']}>
<Text fontSize={["2xl","3xl","4xl"]}  fontWeight="semibold">Hi, I am</Text>
<Text fontSize={["3xl","4xl","5xl"]} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Sugam Kumar</Text>
<Text fontSize={["3xl","4xl","5xl"]} fontWeight="bold" bgGradient="linear(to-r,purple.500, blue.400, cyan.400, )" bgClip='text' >Full Stack Web Developer</Text>
<Text fontSize={["10px","12px","12px"]} color={isDark ? "gray.200" : "gray.500"}>
I am Sugam Kumar from Uttar Pradesh, currently studying Full stack web developer course from "MASAI SCHOOL". 
I am very keen to 
learn new technologies and use them to either create 
something useful or improve the projects. </Text>
<a href={Resume} download>
<Button mt={8}  size={['xs','sm','md','lg']} colorScheme="blue" value="download" >
            Download Resume</Button></a>

                </Box>
                <Center className="imgbox">
    <Image cla alignSelf="center" className="sugamimg"
                     borderRadius='full'
    backgroundColor="transparent" boxShadow="lg" 
boxSize={["100px","250px","300px"]} src={sugamImg} />
 </Center>
            </Box>

        </Box>
      
    )
}

export default About
