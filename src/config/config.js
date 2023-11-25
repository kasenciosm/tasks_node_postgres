const { config } = require('dotenv')
config()

module.exports = {
    db: {
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    }
}