import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import MarvelStudios from '../Images/MarvelStudios.png';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navigation-bar">
      <ul className="navigation-ul">
        <li>
          <NavLink to="/" className="home-link">
            {location.pathname === '/' ? 'HOME' : 'GO BACK'}
          </NavLink>
        </li>
      </ul>
      <img className="nav-logo" src={MarvelStudios} alt="marvel-logo" />
    </nav>
  );
};

export default Navbar;
