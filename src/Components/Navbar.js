import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">
          <h1>Level Seven High</h1>
        </Link>
      </li>
      <li>
        <Link to="/Math">
          <h1>Math</h1>
        </Link>
      </li>
      <li>
        <Link to="/Physics">
          <h1>Physics</h1>
        </Link>
      </li>
      <li>
        <Link to="/Chemistry">
          <h1>Chemistry</h1>
        </Link>
      </li>
      <li>
        <Link to="/ComputerScience">
          <h1>ComputerScience</h1>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
