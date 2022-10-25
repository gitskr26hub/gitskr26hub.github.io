import './portfolio.css'
import zee1 from './ProjectImages/zee1.JPG'
import zee2 from './ProjectImages/zee2.JPG'
import zee3 from './ProjectImages/zee3.JPG'
import far1 from './ProjectImages/farfetch1.JPG'
import far2 from './ProjectImages/farfetch2.JPG'
import far3 from './ProjectImages/farfetch3.JPG'
import { Button,Text,Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {Heading,Link } from '@chakra-ui/react'
import * as React from "react";
// import { Link } from "react-router-dom";

const zeeData=[zee1,zee2,zee3]
const farData=[far1,far2,far3]


export const Portfolio=()=>{
const[zee,setZee]=useState(zee1)

const zeelen=zeeData.length;
const farlen=farData.length;







    return (<>
        <Box className="Portfolio-main">


<Box>
{/* <Box>   haeding Box */}
<Box className="portfolio" >
    <Heading fontSize={["30px",'40px','70px']}>Portfolio</Heading>
     </Box>
<Box fontSize={['20px','25px','40px']}>Most recent work</Box>
</Box>
{/* Box for image and projects */}

<Box className='project-img'>

<Box className='one-projct-box'>
<Box className='image-box'><img className='image' src={zee} alt='zee'/></Box>
<Heading style={{marginLeft:"1%"}}>Zee clone</Heading>
<Box className='about-project-text'>
<Text style={{marginLeft:"1%"}}>
ZEE5 is an OTT platform to watch movies,tv shows etc. 
ZEE5 is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.
<br/>
A collaborative project built by a team of 5, executed in 6 days.
<Heading as='h6' size='xs'>Features:</Heading> Login and Signup page,subscription page. 
<Heading as='h6' size='xs'>Tech-Stack:</Heading> HTML, CSS, JavaScript

</Text></Box>
<Box className='button-box'>
    <Box><Link href="https://github.com/SHASHANKpandey-ncr/unit2_project_web18_zee5.git" isExternal><Button className='button'>Git Repo</Button></Link>  </Box>
    <Box><Link href="https://zee5-clone-project.netlify.app/" isExternal>  <Button className='button'>Live</Button></Link></Box>
</Box>
</Box>

<Box className='one-projct-box'>
<Box className='image-box'><img className='image' src={far1} alt='farfetch'/></Box>
<Heading style={{marginLeft:"5px"}}>Farfetch clone</Heading>
<Box className='about-project-text'><Text style={{marginLeft:"1%"}}>
Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.
<br/>
A collaborative project built by a team of 5, executed in 6 days.
<Heading as='h6' size='xs'>Features:</Heading> Login and Signup page, Sorting for price, Add to cart opt for adding items, Increment and Decrement Number of product according to that price is also changes, Discount price after applying coupon.
<Heading as='h6' size='xs'>Tech-Stack:</Heading> HTML, CSS, JavaScript
</Text></Box>
<Box className='button-box'>
    <Box><Link href="https://github.com/Sumit-Gangwar/Farfetch-Project.git" isExternal>
    <Button className='button'>Git Repo</Button></Link> </Box>
    <Box><Link href='https://sage-lebkuchen-9075e9.netlify.app/' isExternal><Button className='button'>Live</Button></Link></Box>
</Box>
</Box>
</Box>





</Box>
</>)
}