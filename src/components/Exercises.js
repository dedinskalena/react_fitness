import React, {useState,useEffect} from 'react'
import { Pagination } from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import {exerciseOptions,fetchData} from '../utuls/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises,setExercises,bodyPart}) => {
  useEffect(()=>{
    const fetchExerciseData=async ()=>{

      let exerciseData=[]
      if(bodyPart==='all'){
        exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9999',
        exerciseOptions)
      }else{
        exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=900`,
        exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  },[bodyPart])


  return (
   <Box id='exercises'
   sx={{
    mt:{lg:'110px',}
   }}
   mt='50px'
   p='20px'
   >
    <Typography variant='h3' mb='46px'>
      Showing Results
    </Typography>
    <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
    flexWrap='wrap' justifyContent='center' >
      {exercises.map((exercise,index)=>(
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
    </Stack>
   </Box>
  )
} 

export default Exercises