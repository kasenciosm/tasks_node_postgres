const { Pool } = require('pg')
const { db } = require('../config/config')



const pool = new Pool({
    connectionString: db.connectionString
})

pool.connect((err) => {
    if (err) throw err
    console.log('Connect to PostgreSQL succesfully')
})

module.exports = pool