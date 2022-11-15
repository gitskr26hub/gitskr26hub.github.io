import { Heading, Stack,Box,Center } from '@chakra-ui/react'
import React from 'react'
import './Qualification.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Qualification = () => {
  return (<Center>
    <Box className='main-qualification box' w={["95%","90%","70%"]}>
      <Box fontSize={['sm', 'md', 'lg', 'xl']} className='heading'>
      <Heading  fontSize={['30px','40px','70px']}>Qualification</Heading>
      <Heading fontSize={['20px','25px','40px']}>My personal Journey</Heading>
  </Box>

  <Box className='education'>
   {/* <Stack className='stack'>
   <Heading as='h4' size={['sm','md','lg']}>Matriculation(Class X)</Heading>
  
  <Heading as='h5' size='sm'>
    <CalendarMonthIcon/> <i>2012</i>
  </Heading>
   </Stack> */}
   {/* <Stack className='stack'>
   <Heading as='h4' size={['sm','md','lg']}>Intermediate (Class Xll)</Heading>
  
  <Heading as='h5' size={['xs','sm','md']}>
    <CalendarMonthIcon/><i>2014</i>
  </Heading>
   </Stack> */}
   
   <Stack className='stack'>
   <Heading as='h4' size={['sm','md','lg']}>Full Stack Web Developer (Masai School)</Heading>
  
  <Heading as='h5' size={['xs','sm','md']}>
    <CalendarMonthIcon/> <i>2022-Present</i>
  </Heading>
   </Stack>
   <Stack className='stack'>
   <Heading as='h4' size={['sm','md','lg']}>Bachelor of Engineering (Mechanical)</Heading>
  
  <Heading as='h5' size={['xs','sm','md']}>
    <CalendarMonthIcon/> <i>2021</i>
  </Heading>
   </Stack>




















    </Box>



    </Box>
    </Center>


  )
}

export default Qualification