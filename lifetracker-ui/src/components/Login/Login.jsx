import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css"


const Login = ({handleLogin, isLoggedIn, LoginError}) => {
  //needed useStates for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //using this for redirect
  let navigate = useNavigate()

  //submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    const status = await handleLogin(email, password)

    if (status) {
      navigate("/")
    }

  }


  return (
      <div className = "center">
    <h2>Enter the GATES</h2>
    <div className = "lainImg">
    <img src = "https://i.pinimg.com/originals/d7/64/84/d76484f755763b87d45ec9c56e21b37c.gif"/>
    </div>
    <form className = "login-form"  onSubmit = {handleSubmit}>
      <label>Email:</label>
      <br/>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br/>
      <label>Password:</label>
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br/>
      <button type="submit">Login</button>

      {LoginError ? 
      <p>Error with login</p>: null}

    </form>
  </div> 

  )
}

export default Login