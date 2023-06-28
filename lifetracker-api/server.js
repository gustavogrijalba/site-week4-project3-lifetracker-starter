//importing necessary dependencies for the server 
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//declare the PORT
const PORT = 3000


//setup the server using the dependencies
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ` + PORT)
})
