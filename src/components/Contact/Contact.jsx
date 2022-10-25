import { Heading ,Text,Box,Link} from '@chakra-ui/react'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import './Contact.css'


const Contact = () => {

  return (
    <Box className='Contact-mainBox'>
    <Box className='heading' w={["95%","90%","70%","80%"]}>
<Heading  fontSize={['30px','40px','70px']}>Contact Me</Heading>
<Heading fontSize={['20px','25px','40px']} size={['sm','md','lg']}>Get in Touch</Heading>
  </Box>

  <Box className='contact-detail'>
  <Box w={['60%',"40%",'30%']} style={{display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",gap:"30px",margin:"3%"}}  >
  <a href='https://www.linkedin.com/in/sugam-kumar-6b07041bb'>
  <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png'  /></a>

  <a href='https://github.com/gitskr26hub'>
  <img src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png'/></a>

      </Box>
      <Box className="textbox">

      <Box 
      style={{display:"flex",alignItems:"center",height:"20px",margin:"3%",textAlign:"left",gap:"2%",}}>
      <PermPhoneMsgIcon/> 
      <Heading fontSize={["15px",'20px','25px']} size={['sm','md','lg']} >Call me:+918299227112</Heading> </Box> 

      <Box style={{display:"flex",alignItems:"center",height:"20px",margin:"3%",textAlign:"left",gap:"2%",}}>
      <EmailIcon/> 
      <Heading fontSize={["10px",'20px','25px']} size={['xs','md','lg']} >
      <Link  _hover={{background: "white",color: "blue.500",
    }} type='email' href='mailto:kumarsugam26@gmail.com' isExternal>  Email:kumarsugam26@gmail.com</Link>
      </Heading> </Box> 

      <Box style={{display:"flex",alignItems:"center",height:"20px",margin:"3%",textAlign:"left",gap:"2%",}}>
      <FmdGoodIcon/> 
      <Heading fontSize={["10px",'20px','25px']} size={['sm','md','lg']} className="location" >location: UTTAR PRADESH , INDIA 
      </Heading> </Box> 

      </Box>


<Box>

</Box>




  </Box>

    </Box>
  )
}

export default Contact