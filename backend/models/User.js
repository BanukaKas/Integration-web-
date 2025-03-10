const db = require('../utils/db.js');

const User = {
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], callback);
    },
    updateOTP: (email, otp, callback) => {
        const sql = 'UPDATE users SET otp = ? WHERE email = ?';
        db.query(sql, [otp, email], callback);
    },
    createUser: (user, callback) => {
        const sql = 'INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, ?)';
        db.query(sql, [user.name, user.email, user.password, user.isAdmin], callback);
    },
    // Add other methods as needed
};

module.exports = User;
