// src/services/api.js
import axios from 'axios';

// DELETE THIS LINE:
// const API_URL = 'http://localhost:5000/api';

// USE THIS LINE (Make sure your Render link is correct):
const API_URL = 'https://saket-chhabra-portfolio-api.onrender.com/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// --- PROJECTS ---
export const getProjects = () => api.get('/projects');
export const getProjectById = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// --- CONTACTS ---
export const createContact = (data) => api.post('/contacts', data);
// You can add getContacts/deleteContacts here if you build an Admin panel

// --- SERVICES ---
export const getServices = () => api.get('/services');
// Add create/update/delete for services if you want to manage them dynamically