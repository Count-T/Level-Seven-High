import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link className = "navlink" id="title" to="/">
          <h1>Level Seven High</h1>
        </Link>
      </li>
      <li>
        <Link className = "navlink" to="/Math">
          <h1>Math</h1>
        </Link>
      </li>
      <li>
        <Link className = "navlink" to="/Physics">
          <h1>Physics</h1>
        </Link>
      </li>
      <li>
        <Link className = "navlink" to="/Chemistry">
          <h1>Chemistry</h1>
        </Link>
      </li>
      <li>
        <Link className = "navlink" to="/ComputerScience">
          <h1>Computer Science</h1>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
