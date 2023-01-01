import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack,Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Contact from "./components/Contact/Contact";

import Technologies from "./components/LearnedTech/Technologies";

import Navbar from "./components/Navbar/Navbar"
import { Portfolio } from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

import { Link } from "react-scroll";
import './App.css'
import About from "./components/About";
import Qualification from "./components/Qualification/Qualification";

import { ChakraProvider } from "@chakra-ui/react";
import { Github } from "./components/GithubCalender/GithubCalender";
import GithubCalender from "./components/GithubCalender/GithubCalender";
import Resume from "../src/components/Resume/Sugam_kumar_Resume.pdf"

//start doing code from here ----->


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const openInNewTab = url => {
    window.open(url, '_blank');
  };




  return (

 


<div className="mainBoxAPP">  
     <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT ME
              </Link>
            </li>
            {/* <li>
              <Link activeClass="active" smooth spy to="techlearn">
               TECH LEARN
              </Link>
            </li> */}
            <li>
              <Link activeClass="active" smooth spy to="skills">
              SKILLS
              </Link>
            </li>



            {/* <li>
              <Link activeClass="active" smooth spy to="qualification">
              QUALIFICATION
              </Link>
            </li> */}
            <li>
              <Link activeClass="active" smooth spy to="portfolio">
              PROJECTS
              </Link>
            </li>
            {/* <li>
              <Link activeClass="active" smooth spy to="github">
              GITHUB 
              </Link>
            </li> */}
            <li>
            <Link activeClass="active" smooth spy to="contact">
                CONTACT
              </Link>
            </li>
            <li>

          
            {/* <Link activeClass="active" smooth spy to="about" > */}
             
             <a href={Resume} download onClick={() => openInNewTab('https://drive.google.com/file/d/1tfdvtXfI_ECHZdVdF2ZR0K3OvmmaEYl_/view?usp=share_link')}>  

               
                RESUME 
                {/* </button> 
              */}
              {/* </Link> */}
              </a>
            </li>
          </ul>
        </nav>
      </header>


      <VStack p={5}>

<Flex w="100%">
 

  <Spacer></Spacer>
<a  href="https://www.linkedin.com/in/sugam-kumar-6b07041bb" target="_blank">  
<IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton></a>
<a href='https://www.instagram.com/dkr.9987/' target="_blank">
  <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton></a>

  <a  href="https://github.com/gitskr26hub" target="_blank"> 
     <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton></a>
  <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
</Flex>

</VStack>


   

      <section id="about"><About/></section>
      {/* <section id="techlearn"><Technologies/> </section> */}
      <section id="skills"><Skills/> </section>
      {/* <section id="qualification"><Qualification/> </section> */}
      <section id="portfolio"><Portfolio/></section>
      <section id="github"><GithubCalender/></section>
      <section id="contact"><Contact/></section>
    










{/* 
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
      
     
    </VStack> */}
{/* 
    <Technologies/>

    {/* // skills  */}
    {/* <Skills/>

    
    <Portfolio/> */}
{/*     
     
     <Contact/> */} 

    

</div>



    
  )
}

export default App;
