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

        <div className='navbar-image'>
        <Link to = "/">
            <img className = "messi" src = "https://steamuserimages-a.akamaihd.net/ugc/811055404668406828/C20377A85AC435CB00B000AFAD88A7B0C7D85A87/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"/>
            </Link>
            </div>
            
        <Link className='navbar-link' to = "/activity">
            <p>Activity</p>
        </Link>

        <Link className = "navbar-link" to = "/nutrition">
            <p>Nutrition</p>
        </Link>

        {isLoggedIn ? 
        <button onClick = {handleHandleLogout} className = 'coolbttn'>Logout</button>: 
        
        <div>
        <Link className = "navbar-link" to = "/auth/login">
        <button className='coolbttn'>Login</button>
         </Link>

    <Link className = "navbar-link" to = "/auth/register">
        <button className='coolbttn'>Register</button>
    </Link> 
    </div> }

    </div>
  )
}

export default Navbar