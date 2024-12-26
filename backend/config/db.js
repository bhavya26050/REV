const { Pool } = require('pg'); // Import the Pool class from pg module

// Set up the database connection pool
const pool = new Pool({
    user: 'postgres', // Your database username
    host: 'localhost', // Database server
    database: 'app1', // Database name
    password: 'bhavya26', // Database password
    port: 5432, // Database port (default for PostgreSQL)
});

// Export the pool object so it can be used elsewhere
module.exports = { pool };
