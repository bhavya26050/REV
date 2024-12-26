const bcrypt = require('bcrypt');
const { pool } = require('../config/db'); // Adjust the path based on your folder structure


// User registration
exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if the user already exists
        const checkUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (checkUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Ensure password is a string before hashing
        if (typeof password !== 'string') {
            return res.status(400).json({ message: 'Password must be a string' });
        }

        // Log password type for debugging
        console.log('Password type:', typeof password); // Should log 'string'

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Log the data that will be inserted into the database
        console.log('Inserting user:', { name, email, hashedPassword, role });

        // Insert user into database
        const result = await pool.query(
            `INSERT INTO users (name, email, password, role)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, hashedPassword, role]
        );

        // Send response
        res.status(201).json({
            message: 'User registered successfully',
            user: result.rows[0],
        });
    } catch (error) {
        console.error('Error registering user:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};
