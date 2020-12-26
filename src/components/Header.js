import React from 'react';

import logo from '../assets/static/es-shoes.png';
import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header__image" src={logo} alt="ES-SHOES" />
      </div>
    </>
  );
};

export default Header;
