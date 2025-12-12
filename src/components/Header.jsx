import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Dev /</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#formation">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
