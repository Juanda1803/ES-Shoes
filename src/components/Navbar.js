import React from "react";

import logo from "../assets/static/es-shoes.png";
import "../assets/styles/components/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="/">
          <img className="navbar__image" src={logo} alt="Logo" />
        </a>
      </div>
    );
  }
}

export default Navbar;
