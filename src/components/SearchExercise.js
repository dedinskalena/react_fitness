import React, {useEffect,useState} from 'react'
import {Box, Stack, Button,TextField, Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utuls/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercise = ({setExercises,bodyPart,setBodyPart}) => {
const [search,setSearch]=useState('')

const [bodyParts, setbodyParts] = useState([])

useEffect(() => {
  const fetchExercisesData=async ()=>{
    const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    exerciseOptions)
    setbodyParts(['all',...bodyPartsData])
  }

  fetchExercisesData()
}, [])





const handleSearch= async ()=>{
  if(search){
    const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9999',exerciseOptions)
    
    const searchedExercises=exercisesData.filter(
      (exercise)=>exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
    )
    setSearch('')
    setExercises(searchedExercises)
     
  }

}
  return (
    <Stack alignItems='center' mt='37px'
    justifyContent='center' p='20px'>
      <Typography   fontWeight={700} sx={{fontSize:{
        lg:'44px',xs:'3opx'
      }}} mb='50px' textAlign='center'>
        Awesome Exercise You <br/>
        Shoud Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        sx={{
          input:{fontWeight:'700', border:'none',BorderRadius:'4px'},
          width:{lg:'800px',xs:'300px'}
        }}
        height='76px'
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        type='text'
         />
        <Button className='sesrch-btn'
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          fontSize:{lg:'20px',xs:'14px'},
          height:'56px',
          position:'absolute',
          right:'0px'
        }}
        onClick={handleSearch}
        >
         Search                                                       
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%', p:'20px'}} >
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
          setBodyPart={setBodyPart} isBodyParts
          />
      </Box>
    </Stack>
  )
}

export default SearchExercise