import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBaner from '../components/HeroBaner'
import Exercises from '../components/Exercises'
import SearchExercise from '../components/SearchExercise'

const Home = () => {
  const [exercises,setExercises] =useState([])
  const [bodyPart, setBodyPart] = useState('all')
  console.log(bodyPart)
  return (
    <Box>
      <HeroBaner/>
      <SearchExercise  
      setExercises={setExercises} 
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
      exercises={exercises}
      setExercises={setExercises} 
      bodyPart={bodyPart}
  
      />

    </Box>
  )
}

export default Home