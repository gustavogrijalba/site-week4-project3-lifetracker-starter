import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar.css"

const Navbar = ({isLoggedIn, handleLogout}) => {

    const navigate = useNavigate()

    const handleHandleLogout = () => {
        handleLogout()
        navigate('/auth/login')
    }

  return (
    
    <div className = 'Navbar'>

        <Link to = "/">
            <img className = "messi" src = "https://i.pinimg.com/originals/c7/cb/99/c7cb995fd8765992c95aaac931a040d6.png"/>
        </Link>

        <Link className='navbar-link' to = "/activity">
            <p>Activity</p>
        </Link>

        <Link className = "navbar-link" to = "/exercise">
            <p>Exercise</p>
        </Link>

        <Link className = "navbar-link" to = "/nutrition">
            <p>Nutrition</p>
        </Link>

        <Link className = "navbar-link" to = "/sleep">
            <p>Sleep</p>
        </Link>

        {isLoggedIn ? 
        <button onClick = {handleHandleLogout}>Logout</button>: 
        
        <div>
        <Link className = "navbar-link" to = "/auth/login">
        <button>Login</button>
         </Link>

    <Link className = "navbar-link" to = "/auth/register">
        <button >Register</button>
    </Link> 
    </div> }

    </div>
  )
}

export default Navbar