//importing necessary dependencies for the server 
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//importing the config 
const config = require("./config")

//declare the PORT
const PORT = 3001

//import routes
const authRoutes = require("./routes/authRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")
const activityRoute = require('./routes/activityRoute')

//setup the server using the dependencies
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

//use routes 
app.use("/auth", authRoutes)
app.use("/nutrition", nutritionRoutes)
app.use("/activity", activityRoute)

//setup the server
app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ` + PORT)
})
