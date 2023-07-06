const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require('../config')

//give the token the id of the user and their name
const createToken = (user) => {
    const token = jwt.sign(
        { userID: user.id, userName: user.username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        } 
    )

   return token
}

module.exports = {
    createToken,
}