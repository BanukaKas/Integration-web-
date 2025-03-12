import db from "../utils/db.js";

// Get all jobs
export const getAllJobs = async (req, res) => {
    try {
        db.query('SELECT * FROM jobs', (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get job by ID
export const getJobById = async (req, res) => {
    try {
        db.query('SELECT * FROM jobs WHERE id = ?', [req.params.id], (err, results) => {
            if (err) throw err;
            
            if (results.length === 0) {
                return res.status(404).json({ msg: 'Job not found' });
            }
            
            res.json(results[0]);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Create new job
export const createJob = async (req, res) => {
    const { title, description, requirements, location, salary } = req.body;

    try {
        db.query(
            'INSERT INTO jobs (title, description, requirements, location, salary) VALUES (?, ?, ?, ?, ?)',
            [title, description, requirements, location, salary],
            (err, result) => {
                if (err) throw err;
                res.json({ id: result.insertId, msg: 'Job created successfully' });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update job
export const updateJob = async (req, res) => {
    const { title, description, requirements, location, salary } = req.body;

    try {
        db.query(
            'UPDATE jobs SET title = ?, description = ?, requirements = ?, location = ?, salary = ? WHERE id = ?',
            [title, description, requirements, location, salary, req.params.id],
            (err, result) => {
                if (err) throw err;
                
                if (result.affectedRows === 0) {
                    return res.status(404).json({ msg: 'Job not found' });
                }
                
                res.json({ msg: 'Job updated successfully' });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete job
export const deleteJob = async (req, res) => {
    try {
        db.query('DELETE FROM jobs WHERE id = ?', [req.params.id], (err, result) => {
            if (err) throw err;
            
            if (result.affectedRows === 0) {
                return res.status(404).json({ msg: 'Job not found' });
            }
            
            res.json({ msg: 'Job deleted successfully' });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};