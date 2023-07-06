import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate, Navigate } from "react-router-dom";


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
    <div>
      <div>
    <h2>Login</h2>
    <form onSubmit = {handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>

      {LoginError ? 
      <p>Error with login</p>: null}

    </form>
  </div> 
    </div>

  )
}

export default Login