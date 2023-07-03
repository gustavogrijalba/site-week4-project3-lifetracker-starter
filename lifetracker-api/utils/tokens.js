const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require('../config')

const createToken = (user) => {
    const userPayload = {
        id: user.id,
        name: user.name
    }

   return generateToken(userPayload)
}

const generateToken = (payload) =>  {jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"})}

module.exports = {
    createToken,
    generateToken
}