import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-start custom-navbar-item"
          id="home"
          to="/">
            Santiago Ovalle Galán
          </NavLink>
          <a
            id="burger"
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu has-background-dark ${isActive ? 'is-active' : ''}`} id="navmenu">
            <NavLink
              className="button has-background-black has-text-white"
              to="/español"
              onClick={() => setIsActive(false)}
            >
              Español
            </NavLink>
            <NavLink
              className="button has-background-black has-text-white"
              to="/english"
              onClick={() => setIsActive(false)}
            >
              English
            </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;
