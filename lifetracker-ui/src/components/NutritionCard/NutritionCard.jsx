import React from 'react'
import "./NutritionCard.css"
import { Link, Route, Routes } from 'react-router-dom'
import IndvCard from '../IndvCard/IndvCard'


const NutritionCard = ({data}) => {

    const image = data.image_url


  return (
        <div className = 'Nutritioncontainer'>
          <Link to = {`/nutrition/detail/${data.id}`}>
          <img src = {image}/>
          </Link>
        <p>Name: {data.name}</p>
        <p>Category: {data.category}</p>
        <p>Calories: {data.calories}</p>
        <p>Time added: {data.created_at}</p>
        </div>
  )
}

export default NutritionCard