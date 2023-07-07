//setup we need for the routes
const express = require('express')
const Nutrition = require('../models/nutrition')

//creating the router
const router = express.Router()

router.get("/:userID", async (req, res, next) => {

    try {
    //get the user's id from the params of the url 
    const userID = req.params.userID

    //get all the data the user entered 
    const userAVGCal = await Nutrition.getAVGUserCal(userID)

    //send an 200 message if successful, if not go to the next err
    return res.status(200).json({userAVGCal})

    } catch(err) {
        next(err)
    }
})

module.exports = router