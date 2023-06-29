const {BadRequestError, UnauthorizedError} = require("../utils/errors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
class User {
    //function that will take in credentials and verify if a user can log in
    static async login(credentials) {
        //the required inputs to login a user
        const { email, password } = credentials
        const requiredFields = ["email", "password"]

        //check if the email entered by the user exists in the DB.
        const getUserQuery = `
        SELECT * FROM users
        WHERE email = $1
        `

        //execute the query
        const result = await pool.query(getUserQuery, [email])

        //store the user data returned from the query
        const user = result.rows[0];
         if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        //check if inputted password is what is in the db

        const isPasswordValid = await bcrypt.compare(password, user.password)

        //send error message if password isn't valid 

        if (!isPasswordValid) {
            throw new UnauthorizedError("Invalid password")
        }

        //generate jwtoken if passwords match 
        const token = jwt.sign({ userId: user.id }, "secret-key-unique", {
            expiresIn: "1h",
          })

          res.status(200).json({
            message: "Login Successful",
            token: token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          })
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
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)

        const hashedPassword = await bcrypt.hash(credentials.password, salt)

        //create our query 
        const createUserQuery = `
            INSERT INTO users (email, username, password, first_name, last_name)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;

        //assigning values to $1, $2...
        const values = [credentials.email, credentials.username, hashedPassword, credentials.first_name, credentials.last_name]

        //get the actual result from the query 
        const result = await pool.query(createUserQuery, values)

        //if all this works and no error - Status code 201 - successful entry
        res.status(201).json({
            message: "User registered successfully",
            user: result.rows[0],
      })
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