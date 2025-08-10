const axios = require('axios');

const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'Portfolio-App'
        },
        params: {
          sort: 'updated',
          per_page: 20
        }
      }
    );

    return response.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      topics: repo.topics,
      created_at: repo.created_at,
      updated_at: repo.updated_at
    }));
  } catch (error) {
    console.error('GitHub API Error:', error.message);
    throw error;
  }
};

module.exports = { fetchGitHubRepos };