// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProjectForm from "./pages/ProjectForm";
// IMPORT THE NEW AUTH PAGES
import Login from "./pages/Login";       
import Register from "./pages/Register"; 

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Project CRUD Routes */}
          <Route path="/project/add" element={<ProjectForm />} />
          <Route path="/project/edit/:id" element={<ProjectForm />} />

          {/* NEW LOGIN & REGISTER ROUTES (Cypress needs these!) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;