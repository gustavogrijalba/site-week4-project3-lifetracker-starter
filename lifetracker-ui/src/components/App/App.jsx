import React, { useState } from "react";
import './App.css'
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"
import Register from "../Register/Register"
import Login from "../Login/Login"
import Home from "../Home/Home"

function App() {

  //useState for loggedin status
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //registration handler
  const handleRegistration = async ( email, username, first_name, last_name, password) => {
    try {
      console.log(JSON.stringify({email, username, first_name, last_name, password}))
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, username, first_name, last_name, password})
      })

      //wait for the response
      const data = await response.json()

      if (response.ok) {
        //Registration successful
        setIsLoggedIn(true);

      } 
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  //login handler
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json();

      if (response.ok) {
        //Successful Login
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/auth/register" element = {<Register handleRegistration = {handleRegistration}/>}/>
        <Route path = "/auth/login" element = {<Login handleLogin = {handleLogin} isLoggedIn = {isLoggedIn}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
