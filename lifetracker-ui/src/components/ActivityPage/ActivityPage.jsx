import React from 'react'
import { Link } from 'react-router-dom'

const ActivityPage = () => {
  return (
    <div>
        <Link to = "/nutrition">
        <button>Add Nutrition Data</button>
        </Link>
    </div>
  )
}

export default ActivityPage