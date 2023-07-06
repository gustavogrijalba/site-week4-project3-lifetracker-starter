const {BadRequestError, UnauthorizedError} = require("../utils/errors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { BCRYPT_SALT_FACTOR } = require("../config")
const db = require("../db")

class User {
    //function that will take in credentials and verify if a user can log in
    static async login(credentials) {
        //the required inputs to login a user
        const requiredFields = ["email", "password"]

        //check if everything is there 
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //check if the email entered by the user exists in the DB.
        const user = await User.fetchUserByEmail(credentials.email)

        //check if user exists

        if (user) {
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
            if (isPasswordValid) {
                return user
            }
        }
        //send error message if password isn't valid 
            throw new UnauthorizedError("Invalid password")


    }

    //function that will take in required fields of our register form as 
    //credientials and register the user based on conditions
    static async register(credentials) {

        //input fields from our form
        const requiredFields = ["email", "username", "password", "first_name", "last_name"]

        //check if each field is filled in, if not throw an error
         requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        //set email to lowercase so we do not have any case sensitive errors
        const lowercasedEmail = credentials.email.toLowerCase()

        //hash our password using bcrypt and salt
        const salt = await bcrypt.genSalt(BCRYPT_SALT_FACTOR)

        const hashedPassword = await bcrypt.hash(credentials.password, salt)

        //create our query 
        const createUserQuery = `
            INSERT INTO users (email, username, password, first_name, last_name)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;

        //assigning values to $1, $2...
        const values = [lowercasedEmail, credentials.username, hashedPassword, credentials.first_name, credentials.last_name]

        //get the actual result from the query 
        const result = await db.query(createUserQuery, values)

        //get the user from the query

        const user = result.rows[0]

        return user
        
    }

    //fetch an existing user based on an email
    static async fetchUserByEmail(email) {
        //throw an error if there is no email 
        if (!email) {
            throw new BadRequestError("No email provided")
        }
        //select from the table the user where the email matches the input
        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user 
    }

}

module.exports = User