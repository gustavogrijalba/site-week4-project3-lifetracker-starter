import React from 'react'
import "./NutritionCard.css"


const NutritionCard = ({data}) => {

    const image = data.image_url


  return (
        <div className = 'Nutritioncontainer'>
        <img src = {image}/>
        <p>Name: {data.name}</p>
        <p>Category: {data.category}</p>
        <p>Calories: {data.calories}</p>
        <p>Time added: {data.created_at}</p>
        </div>
  )
}

export default NutritionCard