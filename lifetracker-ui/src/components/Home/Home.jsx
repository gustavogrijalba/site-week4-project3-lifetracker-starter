import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Link to = "/auth/login">
            <button>Login</button>
        </Link>

        <Link to = "/auth/register">
            <button>Register</button>
        </Link>
    </div>
  )
}

export default Home