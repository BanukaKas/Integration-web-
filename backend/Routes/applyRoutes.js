import express from 'express';
import { applyForJob, getApplicationsByJobId } from '../controllers/applyController.js';

const router = express.Router();

// Apply for a Job
router.post('/', applyForJob);

// Get Applications by Job ID
router.get('/:job_id', getApplicationsByJobId);

export default router;