import React from 'react'
import "./Hero.css"
import HeroImage from "../../../src/assets/tracker.jpg"


const Hero = () => {
  return (
    <div class="Herocontainer">
        <div class= "content">
            <div class= "text">
                <h1>lainTracker</h1>
            <h2>Helping you take escape from the WIRED.</h2>
            </div>
            <div class = "image">
            <img src = "https://systemspace.dimden.dev/res/img/others/lain.png"/> 
            </div>
        </div>
    </div>
  )
}

export default Hero