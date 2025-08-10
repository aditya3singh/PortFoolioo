const Resume = require('../models/Resume');
const multer = require('multer');
const path = require('path');

// Configure multer for resume uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `resume-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Upload resume
const uploadResume = async (req, res) => {
  try {
    const { displayName, description, category } = req.body;
    
    const resume = new Resume({
      filename: req.file.filename,
      originalName: req.file.originalname,
      displayName: displayName || req.file.originalname,
      description: description || '',
      category: category || 'General',
      path: req.file.path,
      isActive: true
    });
    
    await resume.save();
    res.status(201).json({ message: 'Resume uploaded successfully', resume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all resumes
const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ uploadDate: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get active resume (for backward compatibility)
const getActiveResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ isActive: true }).sort({ uploadDate: -1 });
    if (!resume) {
      return res.status(404).json({ message: 'No active resume found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle resume active status
const toggleResumeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    
    resume.isActive = !resume.isActive;
    await resume.save();
    
    res.json({ message: 'Resume status updated', resume });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete resume
const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    
    // Delete file from filesystem
    const fs = require('fs');
    if (fs.existsSync(resume.path)) {
      fs.unlinkSync(resume.path);
    }
    
    await Resume.findByIdAndDelete(id);
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { upload, uploadResume, getAllResumes, getActiveResume, toggleResumeStatus, deleteResume };