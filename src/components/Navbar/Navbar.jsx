import React from 'react'
import "./Navbar.css"
import {Heading } from "@chakra-ui/layout"
import { useState ,useEffect} from 'react'




const Navbar = () => {
  

  

  return (
  

    <div className="n-wrapper">
    <div className='n-left'>
    <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">iamskr</Heading>

    </div>
    <div className='n-right'>
    <div className='n-list'>
<ul style={{listStyleType:"none",fontWeight:"bold"}}>
    <li>Home</li>
    <li>About</li>
    <li>Tech Learned</li>
    <li>Skills</li>
    <li>Qualification</li>
    <li>Portfolio</li>

</ul>

    </div>
    <button className='button n-button'>Contact</button>
    </div>


   </div>

 
  )
}

export default Navbar