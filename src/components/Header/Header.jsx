import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Register"> Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
