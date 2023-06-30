import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin, isLoggedIn}) => {
  //needed useStates for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  }


  return (
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

        {isLoggedIn &&
        <p>Success!</p>
        }
      </form>
    </div>

  )
}

export default Login