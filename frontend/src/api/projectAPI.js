import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE}/projects`);
  return response.data;
};

export const addProject = async (projectData) => {
  const response = await axios.post(`${API_BASE}/projects`, projectData);
  return response.data;
};