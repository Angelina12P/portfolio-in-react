import React from "react";
import Home from "./components/HomePage.js";
import Projects from "./components/ProjectsPage.js";
import Contact from "./components/ContactPage.js";
import Header from "./components/Header.js";
// import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router base>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
