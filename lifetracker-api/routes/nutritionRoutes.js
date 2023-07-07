//setup we need for the routes
const express = require('express')
const Nutrition = require('../models/nutrition')

//creating the router
const router = express.Router()

//setting up the route for when a user wants to create a new nutritional data
router.post("/add", async (req, res, next) => {
    try {
        //get the data and the userID from the body of the req
        const nutritionData = req.body
        const userID = req.body.user_id

        //use the function from the model to create a new nutritional data 
        const addedNutritionalData = await Nutrition.createNutritionData(nutritionData, userID)

        //send a 201 msg if successful, send next error if not
        return res.status(201).json({addedNutritionalData})

    } catch(err) {
        next(err)
    }
})

//setting up the default route 
router.get("/:userID", async (req, res, next) => {

    try {
    //get the user's id from the params of the url 
    const userID = req.params.userID

    //get all the data the user entered 
    const userNutritionData = await Nutrition.getAllNutritionData(userID)

    //send an 200 message if successful, if not go to the next err
    return res.status(200).json({userNutritionData})

    } catch(err) {
        next(err)
    }
})

router.get("/detail/:id", async (req, res, next) => {

    try {
    //get the user's id from the params of the url 
    const id = req.params.id

    //get all the data the user entered 
    const indvData = await Nutrition.getDataByID(id)

    //send an 200 message if successful, if not go to the next err
    return res.status(200).json({indvData})

    } catch(err) {
        next(err)
    }
})

module.exports = router

