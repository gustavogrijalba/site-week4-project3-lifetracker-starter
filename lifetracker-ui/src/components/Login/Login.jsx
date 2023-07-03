import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from '../Home/Home'


const Login = ({handleLogin, isLoggedIn}) => {
  //needed useStates for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //submission handler
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }


  return (
    <div>
      {isLoggedIn ? 
      <Home></Home> : 
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

    </form>
  </div> 
      }
    </div>

  )
}

export default Login