// src/pages/ProjectForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, getProjectById, updateProject } from '../services/api';

const ProjectForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams(); // Check if we are editing an existing project

  useEffect(() => {
    if (id) {
      const loadProject = async () => {
        try {
          const res = await getProjectById(id);
          setFormData({ title: res.data.title, description: res.data.description });
        } catch (err) {
          console.error("Failed to load project", err);
        }
      };
      loadProject();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateProject(id, formData); // Update mode
      } else {
        await createProject(formData); // Create mode
      }
      navigate('/projects'); // Redirect back to list
    } catch (error) {
      console.error("Error saving project", error);
      alert("Error saving project. Check console.");
    }
  };

  return (
    <main className="container page">
      <h1>{id ? 'Edit Project' : 'Add New Project'}</h1>
      <form onSubmit={handleSubmit} className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
        <div style={{marginBottom:'15px'}}>
          <label style={{display:'block', marginBottom:'5px'}}>Project Title:</label>
          <input 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            style={{width:'100%', padding:'8px', fontSize: '16px'}} 
          />
        </div>

        <div style={{marginBottom:'15px'}}>
          <label style={{display:'block', marginBottom:'5px'}}>Description:</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            rows="5" 
            required 
            style={{width:'100%', padding:'8px', fontSize: '16px'}} 
          />
        </div>

        <div style={{display: 'flex', gap: '10px'}}>
          <button type="submit" className="button">Save Project</button>
          <button type="button" className="button ghost" onClick={() => navigate('/projects')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default ProjectForm;