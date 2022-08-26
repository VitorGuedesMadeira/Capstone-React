import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navigation-bar">
    <span className="nav-logo">Marvel</span>
    <ul className="navigation-ul">
      <li>
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="Comics" className="comics-link">
          Comics
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
