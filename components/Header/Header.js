import React from "react";
import "./HeaderStyle.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
  
<div className="navbar">


<div className="navbar">
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink to="/" end activeClassName="active-nav-link">
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/projects" end activeClassName="active-nav-link">
        Projects
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/contact" end activeClassName="active-nav-link">
        Contact
      </NavLink>
    </li>
  </ul>
</div>
</div>

    );
}

export default Header
   
  
   
   