import React from 'react'

const NutritionCard = ({data}) => {

    const image = data.image_url

    
  return (
    <div>
        <p>{data.name}</p>
        <p>{data.category}</p>
        <p>{data.calories}</p>
        <img src = {image}/>
    </div>
  )
}

export default NutritionCard