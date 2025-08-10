import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const uploadResume = async (file, displayName, description, category) => {
  const formData = new FormData();
  formData.append('resume', file);
  formData.append('displayName', displayName);
  formData.append('description', description || '');
  formData.append('category', category || 'General');
  
  const response = await axios.post(`${API_BASE}/resume/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

export const getAllResumes = async () => {
  const response = await axios.get(`${API_BASE}/resume/all`);
  return response.data;
};

export const getActiveResume = async () => {
  const response = await axios.get(`${API_BASE}/resume/active`);
  return response.data;
};

export const toggleResumeStatus = async (id) => {
  const response = await axios.patch(`${API_BASE}/resume/${id}/toggle`);
  return response.data;
};

export const deleteResume = async (id) => {
  const response = await axios.delete(`${API_BASE}/resume/${id}`);
  return response.data;
};