//installing necessary dependencies to set up the routes
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//model import
const User = require("../models/user")
const { createToken } = require("../utils/tokens")
const { SECRET_KEY } = require("../config")

//setting up the router
const router = express.Router()

//setting up the register route

router.post("/register", async (req, res, next) => {
    try {
    const user = await User.register(req.body)
    // const token = jwt.sign(
    //     { userId: user.id, userName: user.name },
    //     SECRET_KEY,
    //     {
    //       expiresIn: "1h",
    //     } 
    // )
    const token = createToken(user)
    return res.status(201).json({user: user, token: token})
    } catch(err) {
        next(err)
    }

})

//setting up login route
router.post("/login", async (req, res,next) => {
    try {
        const user = await User.login(req.body)
        // const token = jwt.sign(
        //     { userId: user.id, userName: user.name },
        //     SECRET_KEY,
        //     {
        //       expiresIn: "1h",
        //     } 
        // )
        const token = createToken(user)
        return res.status(200).json({user: user, token: token})
        } catch(err) {
            next(err)
        }
})

module.exports = router