import React from "react";
import Home from "./components/HomePage/HomePage.js";
import Projects from "./components/ProjectsPage/ProjectsPage.js";
import Contact from "./components/ContactPage/ContactPage.js";
import Header from "./components/Header/Header.js";
// import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./app.css";


function App() {
  return (
    <Router basename="portfolio-in-react">
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
