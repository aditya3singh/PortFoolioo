const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  html_url: String,
  homepage: String,
  language: String,
  stargazers_count: Number,
  forks_count: Number,
  topics: [String],
  created_at: Date,
  updated_at: Date,
  isCustom: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);