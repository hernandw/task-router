import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css'
const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({isActive})=> (isActive? 'activado' : 'noActivado')}
            estrict to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive})=> (isActive? 'activado' : 'noActivado')}
            exact to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive})=> (isActive? 'activado' : 'noActivado')}
            exact to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
