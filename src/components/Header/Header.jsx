import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1><span id="jump">D</span>aniel <span id="jump">G</span>ustafsson</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
