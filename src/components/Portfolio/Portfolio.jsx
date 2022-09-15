import './portfolio.css'
import zee1 from './ProjectImages/zee1.JPG'
import zee2 from './ProjectImages/zee2.JPG'
import zee3 from './ProjectImages/zee3.JPG'
import far1 from './ProjectImages/farfetch1.JPG'
import far2 from './ProjectImages/farfetch2.JPG'
import far3 from './ProjectImages/farfetch3.JPG'
import { Button, Link, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


const zeeData=[zee1,zee2,zee3]
const farData=[far1,far2,far3]


export const Portfolio=()=>{
const[zee,setZee]=useState(zee1)

const zeelen=zeeData.length;
const farlen=farData.length;







    return (<>
        <div className="Portfolio-main">


<div>
{/* <div>   haeding div */}
<div className="portfolio">Portfolio</div>
<div>Most recent work</div>
</div>
{/* div for image and projects */}

<div className='project-img'>

<div className='one-projct-box'>
<div className='image-box'><img className='image' src={zee} alt='zee'/></div>
<h3>Zee clone</h3>
<div className='about-project-text'><Text>

</Text></div>
<div className='button-box'>
    <div><Link to="https://joyful-horse-ba7b50.netlify.app/"><Button className='button'>Github Code</Button></Link>  </div>
    <div><Button className='button'>Deploy</Button></div>
</div>
</div>

<div className='one-projct-box'>
<div className='image-box'><img className='image' src={far1} alt='farfetch'/></div>
<div className='about-project-text'><Text></Text></div>
<div className='button-box'>
    <div><Button className='button'>Github Code</Button> </div>
    <div><Button className='button'>Deploy</Button></div>
</div>
</div>
</div>





</div>
    </>)
}