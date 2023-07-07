import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ActivityPage = ({isLoggedIn, userName, userID}) => {

    const [avgCal, setAvgCal] = useState({})
 

    //do a get request for avg calories 

    const fetchAVGCal = async () => {
        try {
    
          const response = await axios.get(`http://localhost:3001/activity/${userID}`)
    
          // console.log("userID", userID); 
          console.log(response)
    
          setAvgCal(response.data.userAVGCal)

          console.log("here", avgCal)
          avgCal
        } catch(error) {
          console.error("Error:", error)
        }
      }

//gave userID dependency for the fetch to wait for the userID in case of page refresh
  useEffect(() => {
    fetchAVGCal()
  }, [userID])

  return (
    <div className = 'center'>
        {isLoggedIn ?
        <div> 
        <h1>WELCOME {userName}</h1>
        <h1>YOUR AVERAGE CALORIES: </h1>
        <p>{parseFloat(avgCal.avg).toFixed(2)}</p>
        <Link to = "/nutrition">
        <button className='coolbttn'>Add Nutrition Data</button>
        </Link>
        </div>
        : <div> 
            <h1>GATES CLOSED, LOG IN</h1>
            <img src = "https://tr.rbxcdn.com/2e1a504b871812ab83336c3c3d463c16/420/420/Hat/Png"/>
            </div>}
    </div>
  )
}

export default ActivityPage