const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  originalName: { type: String, required: true },
  displayName: { type: String, required: true }, // Custom name for display
  path: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  description: { type: String, default: '' }, // Optional description
  category: { type: String, default: 'General' } // e.g., 'Backend', 'QA', 'Full Stack'
});

module.exports = mongoose.model('Resume', resumeSchema);