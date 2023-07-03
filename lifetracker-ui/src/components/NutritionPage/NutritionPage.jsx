import React from 'react'
import './NutritionPage.css'

const NutritionPage = ({isLoggedIn}) => {
  return (
    <div>
        {isLoggedIn ? <p>You're Logged In</p>: <p>Login to see nutrition data</p> }
    </div>
  )
}

export default NutritionPage