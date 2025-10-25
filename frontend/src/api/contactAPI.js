import axios from 'axios';

const API_BASE = 'https://portfoolioo.onrender.com/api';


export const sendContactMessage = async (messageData) => {
  const response = await axios.post(`${API_BASE}/contact`, messageData);
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(`${API_BASE}/contact`);
  return response.data;
};