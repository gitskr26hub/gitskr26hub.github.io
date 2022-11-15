import GitHubCalendar from "react-github-calendar";
import {Heading,Image} from '@chakra-ui/react'
import './GithubCalender.css'
import React from 'react'
import { Box } from "@chakra-ui/react";



const GithubCalender = () => {
  return (
    <Box className="githubmain">
        <Heading className="github-name">GitHub Profile Summary Cards</Heading>

        <Box className="graph"><Image style={{width:"100%"}} src='http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=gitskr26hub&theme=2077'/></Box>

<Box className="cards">
  <Box><Image src='http://github-profile-summary-cards.vercel.app/api/cards/stats?username=gitskr26hub&theme=2077'/></Box>


<Box><Image src='http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=gitskr26hub&theme=2077&utcOffset=8'/>  </Box>
</Box>

       <Box className="githubcalender"><GitHubCalendar  style={{width:"100%",}}  blockSize={18} blockMargin={5} username="gitskr26hub" /></Box> 
    </Box>
  )
}

export default GithubCalender