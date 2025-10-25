const Project = require('../models/Project');
const { fetchGitHubRepos } = require('../utils/githubAPI');

// Get all projects (GitHub + custom)
const getProjects = async (req, res) => {
  try {
    const customProjects = await Project.find({ isCustom: true });
    
    let githubRepos = [];
    try {
      githubRepos = await fetchGitHubRepos();
    } catch (githubError) {
      console.error('GitHub API failed, using fallback data:', githubError.message);
      // Fallback static project data
      githubRepos = [
        {
          name: "CipherIDE",
          description: "CipherStudio - Browser-Based React IDE",
          html_url: "https://github.com/aditya3singh/CipherIDE",
          homepage: "https://cipher-ide-frontend-lyq1.vercel.app/",
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          topics: ["react", "ide", "browser"],
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z"
        },
        {
          name: "Online-Book-Management-System",
          description: "Learning Management System with user authentication and course management",
          html_url: "https://github.com/aditya3singh/Online-Book-Management-System",
          homepage: "https://online-book-management-system.vercel.app",
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          topics: ["react", "lms", "education"],
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z"
        },
        {
          name: "CodeEX",
          description: "Web-based code execution platform",
          html_url: "https://github.com/aditya3singh/CodeEX",
          homepage: "",
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          topics: ["react", "nodejs", "code-execution"],
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z"
        },
        {
          name: "Like-Quora",
          description: "Quora-like Q&A platform with CRUD operations",
          html_url: "https://github.com/aditya3singh/Like-Quora",
          homepage: "",
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          topics: ["nodejs", "express", "qa-platform"],
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z"
        },
        {
          name: "Drawing_Tool",
          description: "Interactive drawing tool with canvas functionality",
          html_url: "https://github.com/aditya3singh/Drawing_Tool",
          homepage: "",
          language: "JavaScript",
          stargazers_count: 0,
          forks_count: 0,
          topics: ["canvas", "drawing", "html5"],
          created_at: "2024-01-01T00:00:00Z",
          updated_at: "2024-01-01T00:00:00Z"
        }
      ];
    }
    
    const allProjects = [...customProjects, ...githubRepos];
    res.json(allProjects);
  } catch (error) {
    console.error('Project controller error:', error.message);
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