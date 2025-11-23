// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects, deleteProject } from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects when page loads
  useEffect(() => {
    console.log("1. Page Loaded. Fetching projects...");
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await getProjects();
      console.log("2. Backend Response:", response); // Check your browser console for this!
      console.log("3. Data received:", response.data);
      
      // Safety check: Ensure it is an array before setting state
      if (Array.isArray(response.data)) {
        setProjects(response.data);
      } else {
        console.error("Error: Backend did not return an array!", response.data);
      }
    } catch (error) {
      console.error("4. Error loading projects:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      try {
        await deleteProject(id);
        // Remove the item from the screen immediately
        setProjects(projects.filter(p => p._id !== id));
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <main className="container page projects-page">
      <h1>Projects</h1>
      <Link to="/project/add" className="button" style={{marginBottom: '20px', display:'inline-block'}}>+ Add New Project</Link>
      
      {/* DEBUG MESSAGE: If projects is empty, show this text */}
      {projects.length === 0 && <p>No projects found. Check Console (F12) for errors.</p>}

      <div className="projects-grid">
        {projects.map(p => (
          <article key={p._id} className="project-card">
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div style={{marginTop: '15px'}}>
                <Link to={`/project/edit/${p._id}`} className="button ghost" style={{marginRight:'10px', fontSize:'12px'}}>Edit</Link>
                <button onClick={() => handleDelete(p._id)} className="button" style={{fontSize:'12px', background:'red', borderColor:'black', color: 'white'}}>Delete</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;