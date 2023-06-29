//installing necessary dependencies to set up the routes
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//setting up the router
const router = express.Router();

//setting up the register route

router.post("/register", async (req, res) => {
    // const { email, username, first_name, last_name, password } = req.body

    // try {
    //     //standard salt rounds for encryption
    //     const saltRounds = 10
    //     const salt = await bcrypt.genSalt(saltRounds)
        
    //     //hashing password to encrypt it
    //     const hashedPassword = await bcrypt.hash(password, salt)

    //     //user query 
    //     const createUserQuery = `
    //         INSERT INTO users (email, username, first_name, last_name, password)
    //         VALUES ($1, $2, $3, $4, $5)
    //         RETURNING *
    //     `;

    //     //setting the values with the corresponding value (line 25 to 30), and get a result
    //     const values = [email, username, first_name, last_name, hashedPassword]
    //     const result = await pool.query(createUserQuery, values)

    //     //if successful 
    //     res.status(201).json({
    //         message: "User registered successfully",
    //         user: result.rows[0],
    //       })
    // } catch {
    //     console.error("Error registering user: ", error);
    //     res.status(500).json({ message: "Error registering user" })
    // }


})

//setting up login route
router.post("/login", async (req, res) => {
    // const { email, password } = req.body

    // try {

    // } catch {
    //     const getUserQuery = `
    //         SELECT * FROM users
    //         WHERE email = $1
    //     `

    //     //get the user query result 
    //     const result = await pool.query(getUserQuery, [email])

    //     //get the user with the corresponding email, if the user exists 
    //     const user = result.rows[0]

    //     //if there is no registered user with that email
    //     if (!user) {
    //         return res.status(404).json({ message: "User not found!" });
    //       }

    // }

    
})