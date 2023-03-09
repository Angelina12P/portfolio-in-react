import React from "react";
import Home from "./components/HomePage";
import Projects from "./components/ProjectsPage";
import Contact from "./components/ContactPage";
import Header from "./components/Header";
// import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
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
