const Project = require('../models/Project');
const { fetchGitHubRepos } = require('../utils/githubAPI');

// Get all projects (GitHub + custom)
const getProjects = async (req, res) => {
  try {
    const customProjects = await Project.find({ isCustom: true });
    const githubRepos = await fetchGitHubRepos();
    
    const allProjects = [...customProjects, ...githubRepos];
    res.json(allProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add custom project
const addProject = async (req, res) => {
  try {
    const project = new Project({ ...req.body, isCustom: true });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProjects, addProject };