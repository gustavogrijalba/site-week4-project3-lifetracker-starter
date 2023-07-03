import React from 'react'
import {Link} from "react-router-dom"
import Hero from '../Hero/Hero'
import "./Home.css"
import Tile from "../Tile/Tile"

const Home = () => {
  return (
    <div className = 'homepage'>
        <Hero/>
        <Tile/>
    </div>
  )
}

export default Home