import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/static/es-shoes.png';
import '../assets/styles/components/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar">
          <Link to="/">
            <img className="navbar__image" src={logo} alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoes">Users</Link>
            </li>
            <li>
              <Link to="/shoes/new">New User</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
