import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import { exerciseOptions,fetchData, youtubeOptions } from '../utuls/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'




const ExerciseDetails = () => {

const [exerciseDetails, setexerciseDetails] = useState({})
const [exerciseVideos, setexerciseVideos] = useState([])
const [targetMuscleExercises,setTargetMuscleExercises] = useState([])
const [equipmentExercises,setEquipmentExercises] = useState([])

const {id}=useParams()
useEffect(()=>{
const fetchExerciseData=async ()=>{
  const exerciseDbUrl='https://exercisedb.p.rapidapi.com/exercises'
  const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'

  const exerciseDetailsData=await fetchData(`${exerciseDbUrl}/exercise/${id}`,exerciseOptions)
  setexerciseDetails(exerciseDetailsData)

  const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=
  ${exerciseDetailsData.name}`,youtubeOptions)
  setexerciseVideos(exerciseVideosData.contents)

  const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/target/${exerciseDetailsData.target}`,exerciseOptions)
  setTargetMuscleExercises(targetMuscleExercisesData)

  const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailsData.equipment}`,exerciseOptions)
  setEquipmentExercises(equipmentExercisesData)
}
 fetchExerciseData()
},[id])


  return(
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}   equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails