import React from 'react'
import "./Hero.css"
import HeroImage from "../../../src/assets/tracker.jpg"


const Hero = () => {
  return (
    <div class="container">
        <div class="content">
            <div class="text">
                <h1>LifeTracker</h1>
            <h2>Helping you take back control of your world.</h2>
            </div>
            <div class="image">
            <img src ={HeroImage} /> 
            </div>
        </div>
    </div>
  )
}

export default Hero