import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({handleRegistration}) => {

    //necessary usestate variables for each part of the form 
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")

    //using this for redirect on register
    let navigate = useNavigate()

    //submit event handler 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const status = await handleRegistration(email, username, first_name, last_name, password)
        if (status) {
          navigate('/')
        }
    }

  return (
    <div className = 'center'>
        <h2>Unlock the GATE, unlock the FUTURE </h2>

        <form onSubmit = {handleSubmit} className = 'login-form'>
            <label>Email: </label>
            <input type = "email" 
            value = {email} 
            onChange = {(e) => setEmail(e.target.value)} required/>

            <label>Username: </label>
            <input type = "text" 
            value = {username} 
            onChange = {(e) => setUserName(e.target.value)} required/>
            
            <label>First Name : </label>
            <input type = "text" 
            value = {first_name} 
            onChange = {(e) => setFirstName(e.target.value)} required/>
            
            <label> Last Name: </label>
            <input type = "text" 
            value = {last_name} 
            onChange = {(e) => setLastName(e.target.value)} required/>

            <label>Password: </label>
            <input type = "password" 
            value = {password} 
            onChange = {(e) => setPassword(e.target.value)} required/>
            
            <button type = "submit">Register</button>
        </form>
    </div>
  )
}

export default Register