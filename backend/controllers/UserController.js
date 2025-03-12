import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from "../utils/db.js";

// Register User
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        db.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert new user
            db.query(
                'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) throw err;

                    // Generate JWT
                    const payload = { user: { id: result.insertId } };
                    jwt.sign(payload, 'your_jwt_secret', { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    });
                }
            );
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        db.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
            if (err) throw err;

            if (results.length === 0) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const user = results[0];

            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            // Generate JWT
            const payload = { user: { id: user.id } };
            jwt.sign(payload, 'your_jwt_secret', { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get User Details
export const getUser = async (req, res) => {
    try {
        db.query('SELECT id, name, email FROM user WHERE id = ?', [req.user.id], (err, results) => {
            if (err) throw err;

            if (results.length === 0) {
                return res.status(404).json({ msg: 'User not found' });
            }

            res.json(results[0]);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};