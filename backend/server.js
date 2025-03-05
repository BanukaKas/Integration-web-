require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./utils/db");

const userRoutes = require("./Routes/UserRoutes.js");

const app = express();
const PORT = process.env.PORT || 7000; // Use the PORT from .env, fallback to 5000 if undefined

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

//User route
app.use('/api/inquiery',userRoutes);




//contact us
app.post('/contact_us', (req, res) => {
    console.log("Received data:", req.body); // Debugging line

    const sql = "INSERT INTO contact_us(name, phone_number, email, message) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.phone_number,
        req.body.email,
        req.body.message
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Data inserted successfully", data });
    });
});



app.post('/mailing', (req, res) => {
    const sql = "INSERT INTO mailing(email) VALUES (?)";
    const values = [req.body.mailing_email];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Email added to mailing list successfully", data });
    });
});



// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
