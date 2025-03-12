import db from "../utils/db.js";
import multer from 'multer';
import path from 'path';

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage }).single('cv_resume');

// Apply for a Job
export const applyForJob = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ msg: 'File upload error' });
        }

        const { name, email, mobile_number, experience_years, job_id } = req.body;
        const cv_resume = req.file.path;

        try {
            db.query(
                'INSERT INTO applyjob (name, email, mobile_number, experience_years, cv_resume, job_id) VALUES (?, ?, ?, ?, ?, ?)',
                [name, email, mobile_number, experience_years, cv_resume, job_id],
                (err, result) => {
                    if (err) throw err;
                    res.json({ id: result.insertId, msg: 'Application submitted successfully' });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });
};

// Get Applications by Job ID
export const getApplicationsByJobId = async (req, res) => {
    try {
        db.query('SELECT * FROM applyjob WHERE job_id = ?', [req.params.job_id], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};