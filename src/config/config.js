require('dotenv').config()

let db = {}

if (process.env.NODE_ENV === 'production') {
    db = {
        user: process.env.DB_PROD_USER,
        password: process.env.DB_PROD_PASSWORD,
        host: process.env.DB_PROD_HOST,
        port: process.env.DB_PROD_PORT,
        database: process.env.DB_PROD_NAME,
    }
} else {
    db = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    }

}


module.exports = { db }