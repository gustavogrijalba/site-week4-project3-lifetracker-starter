const { Client } = require('pg')
const { getDatabaseUri } = require('./config.js')
require('colors')

const db = new Client ({connectionString: getDatabaseUri()})

console.log("here"); 
db.connect((err) => {
    if (err) {
        console.log('connection error ' .red, err.stack)
    } else {
        console.log("Successfully connected to a postgres db!" .blue
        )
    }
})

module.exports = db