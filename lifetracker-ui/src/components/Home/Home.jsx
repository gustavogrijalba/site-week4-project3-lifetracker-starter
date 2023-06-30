import React from 'react'
import {Link} from "react-router-dom"
import Hero from '../Hero/Hero'
import "./Home.css"

const Home = () => {
  return (
    <div className = 'homepage'>
        <Hero/>
        
    </div>
  )
}

export default Home