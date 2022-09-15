import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack,Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Technologies from "./components/LearnedTech/Technologies";

import Navbar from "./components/Navbar/Navbar"
import { Portfolio } from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (<>

  <Navbar/>
    <VStack p={5}>

      <Flex w="100%">
       

        <Spacer></Spacer>
  <a  href="https://www.linkedin.com/in/sugam-kumar-6b07041bb" >  
   <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton></a>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
        <a  href="https://github.com/gitskr26hub" > 
           <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton></a>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      
     
    </VStack>

    <Technologies/>

    {/* // skills  */}
    <Skills/>

    
    <Portfolio/>
    


    </>
  );
}

export default App;
