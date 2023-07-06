const db = require("../db")
const { BadRequestError } = require("../utils/errors")

class Nutrition {

    static async fetchUserByID(id) {
        //throw an error if there is no matching user to id 
        if (!id) {
            throw new BadRequestError("No id provided")
        }
        //select from the table the user where the email matches the input
        const query = `SELECT * FROM users WHERE user_id = $1`

        const result = await db.query(query, id)

        const user = result.rows[0]

        return user 
    }

    static async createNutritionData(data, userID) {
        const requiredFields = ["name", "category", "calories", "image_url"]
        //check if each field is filled out
        requiredFields.forEach(field => {
            if (!data.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //create our query 
        const createUserQuery = `
            INSERT INTO nutrition (name, category, calories, image_url, user_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `

        const values = [data.name, data.category, data.calories,data.image_url, userID]

        const result = await db.query(createUserQuery, values)

        const addedData = result.rows[0]

        return addedData
    }

    static async getAllNutritionData(userID) {

        if (!userID) {
            throw new BadRequestError("No id provided")
        }

        //selecting all the data in the db that matches with the user's id
        const createUserQuery = `SELECT * FROM nutrition WHERE user_id = $1`

        const value = [userID]

        const result = await db.query(createUserQuery, value)

        return result.rows

    }
}

module.exports = Nutrition