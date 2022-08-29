import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import MarvelStudios from '../Images/MarvelStudios.png';

const Navbar = () => (
  <nav className="navigation-bar">
    <ul className="navigation-ul">
      <li>
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
      </li>
    </ul>
    <img className="nav-logo" src={MarvelStudios} alt="marvel-logo" />
  </nav>
);

export default Navbar;
