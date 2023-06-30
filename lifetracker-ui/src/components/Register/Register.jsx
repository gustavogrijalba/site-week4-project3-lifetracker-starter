import React, { useState } from 'react'

const Register = ({handleRegistration}) => {

    //necessary usestate variables for each part of the form 
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")

    //submit event handler 
    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegistration(email, username, first_name, last_name, password)
    }

  return (
    <div>
        <h2>Create an Account </h2>

        <form onSubmit = {handleSubmit}>
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