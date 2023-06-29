//installing necessary dependencies to set up the routes
const express = require("express")
const bcrypt = require("bcrypt")

//model import
const User = require("../models/user")

//setting up the router
const router = express.Router()

//setting up the register route

router.post("/register", async (req, res, next) => {
    try {
    const user = await User.login(req.body)
    return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }

})

//setting up login route
router.post("/login", async (req, res,next) => {
    try {
        const user = await User.register(req.body)
        return res.status(200).json({ user })
        } catch(err) {
            next(err)
        }
})

module.exports = router