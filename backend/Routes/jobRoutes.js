import express from 'express';
import { getAllJobs, getJobById, createJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// Get all jobs
router.get('/', getAllJobs);

// Get single job
router.get('/:id', getJobById);

// Create new job
router.post('/', createJob);

// Update job
router.put('/:id', updateJob);

// Delete job
router.delete('/:id', deleteJob);

export default router;