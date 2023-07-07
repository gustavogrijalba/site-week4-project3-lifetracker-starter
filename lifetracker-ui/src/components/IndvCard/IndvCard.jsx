import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./IndvCard.css"


const IndvCard = ({userID}) => {

    const [existingData, setExistingData] = useState({})

    const {id} = useParams()

    console.log(id)

    const fetchindvData = async () => {
        try {
    
          const response = await axios.get(`http://localhost:3001/nutrition/detail/${id}`)
          console.log(response.data)
          setExistingData(response.data.indvData)
    
        } catch(error) {
          console.error("Error:", error)
        }
      }

      useEffect(() => {
        fetchindvData()
      }, [])

  return (
    <div className = 'center'>
        {userID === existingData.user_id ?
        <div className = 'Nutritioncontainer'>
            <h1>EXPANDED VIEW</h1>
        <img id = "expanded" src = {existingData.image_url}/>
        <h1>NAME: {existingData.name}</h1> 
        <h1>CATEGORY: {existingData.category}</h1>
        <h1> CALORIES: {existingData.calories}</h1>
        <h1>LOGGED AT : {existingData.created_at}</h1>
        </div> : <h1>YOU SHOULDN'T BE HERE >:(</h1>
        }
    </div>
  )
}

export default IndvCard