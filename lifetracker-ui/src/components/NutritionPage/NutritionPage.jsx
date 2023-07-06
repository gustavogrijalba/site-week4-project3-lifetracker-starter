import React, { useEffect, useState } from 'react'
import './NutritionPage.css'
import axios from "axios"
import NutritionCard from '../NutritionCard/NutritionCard'


const NutritionPage = ({isLoggedIn, userID}) => {

  const [newNutritionData, setNewNutritionData] = useState({})
  const [existingNutritionData, setExistingNutritionData] = useState([])

  const fetchExistingNutritionData = async () => {
    try {

      const response = await axios.get(`http://localhost:3001/nutrition/${userID}`)

      console.log("userID", userID); 
      console.log(response)

      setExistingNutritionData(response.data.userNutritionData)

    } catch(error) {
      console.error("Error:", error)
    }
  }

  useEffect(() => {
    fetchExistingNutritionData()
  }, [userID])


const addNutritionData = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post("http://localhost:3001/nutrition/add", {
      ...newNutritionData,
      user_id: userID
    })
    setNewNutritionData({
      name:"",
      calories:"",
      category:"",
      image_url:""
    })
    fetchExistingNutritionData()
  } catch(err) {
    console.error(err)
  }

  console.log(newNutritionData)
}

const handleInputChange = (e) => {
  const { name, value } = e.target
  setNewNutritionData((prevNutrition) => ({ ...prevNutrition, [name]: value }));
  console.log(newNutritionData); 
}


  return (
    <div>
        {isLoggedIn ? 
        <div>
          <form onSubmit={addNutritionData}>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={newNutritionData.name}
            onChange={handleInputChange}
            className="input"
            required
          />

          <label className = "label">Category:</label>
          <select name = "category" onChange={handleInputChange}>
            <option value = "">Select a Category</option>
            <option value = {newNutritionData.category}>fruit</option>
            <option value = {newNutritionData.category}>meat</option>
            <option value = {newNutritionData.category}>vegetable</option>
          </select>

          <label className='label'>Calories:</label>
          <input
            type="number"
            name="calories"
            value={newNutritionData.calories}
            onChange={handleInputChange}
            className="input"
            required
          />

          <label className='label'>Image Url: </label>
          <input
            type="text"
            name="image_url"
            value={newNutritionData.image_url}
            onChange={handleInputChange}
            className="input"
            required=""
          />

          <button>Submit</button>

          </form>
          {existingNutritionData.map((data) => (
            (<NutritionCard data = {data}/>)
          ))}
          
          </div>
        
        : <p>Login to see nutrition data</p> }
    </div>
  )
}

export default NutritionPage