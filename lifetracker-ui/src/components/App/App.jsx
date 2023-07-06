import React, { useEffect, useState } from "react";
import './App.css'
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"
import Register from "../Register/Register"
import Login from "../Login/Login"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import NutritionPage from "../NutritionPage/NutritionPage";
import jwtDecode from "jwt-decode";
import ActivityPage from "../ActivityPage/ActivityPage";


function App() {

  //keeping track of the userID user token
  const [userID, setUserID] = useState("")

//checking for login 

  useEffect(() => {
    const checkLoggedIn = async () => {
      //check if the user is logged in when the user first accesses the webapp
      const token = localStorage.getItem("token");
      if (token) {
        //decode the stored token
        const  decodedToken = await jwtDecode(token)

        if (decodedToken.exp * 1000 > Date.now()) {
          setIsLoggedIn(true)
          setUserID(decodedToken.userID)
        } else {
          //Token has expired, log out the user
          handleLogOut()
        }
      }
    };

    checkLoggedIn();
  }, []);


  //useState for loggedin status
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [LoginError, setLoginError] = useState(false)

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

      if (response.status === 201) {
        //get the token 

        const { token } = data 
        localStorage.setItem('token', token)
        const decodedToken = jwtDecode(token)

        //Registration successful
        setIsLoggedIn(true)
        setUserID(decodedToken.userID)
        return true
      } 
    } catch (error) {
      console.error("Error: ", error)
      setLoginError(true)
      return false 
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

      if (response.status === 200 ) {

        //get the token 

        const {token} = data 
        localStorage.setItem('token', token)
        const decodedToken = jwtDecode(token)

        //Successful Login, setting accordingly
        setIsLoggedIn(true)
        setUserID(decodedToken.userID)
        console.log(userID)

        return true
      }


    } catch (error) {
      console.error("Error:", error)
      setLoginError(true)
      return false
    }
  }

  //handler for logout
  const handleLogOut = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setLoginError(false)
  }

  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isLoggedIn = {isLoggedIn} handleLogout={handleLogOut}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/auth/register" element = {<Register handleRegistration = {handleRegistration}/>}/>
        <Route path = "/auth/login" element = {<Login handleLogin = {handleLogin} isLoggedIn = {isLoggedIn} LoginError = {LoginError}/>}/>
        <Route path = "/nutrition" element = {<NutritionPage isLoggedIn = {isLoggedIn} userID={userID}/>} />
        <Route path = "/activity" element = {<ActivityPage></ActivityPage>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
