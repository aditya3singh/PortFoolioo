const express = require('express');
const { upload, uploadResume, getAllResumes, getActiveResume, toggleResumeStatus, deleteResume } = require('../controllers/resumeController');

const router = express.Router();

router.post('/upload', upload.single('resume'), uploadResume);
router.get('/all', getAllResumes);
router.get('/active', getActiveResume);
router.patch('/:id/toggle', toggleResumeStatus);
router.delete('/:id', deleteResume);

module.exports = router;