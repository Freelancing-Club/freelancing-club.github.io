import React from 'react';

const Header = () => {
  return (
    <div className="nav">
      <a href="/" aria-current="page" className="logo-link w-inline-block w--current">
        <img
          src="https://drive.google.com/file/d/1w2Te-ZZ1OkoV9jfZPAkLFvxluY1zcTje/view?usp=drive_link"
          loading="eager"
          alt="Club logo"
          className="logo"
        />
      </a>
      <div className="nav-list">
        <a href="#Home" className="nav-item">
          Home
        </a>
        <a href="#Events" className="nav-item">
          Events
        </a>
        <a href="#Committe" className="nav-item">
          Committe
        </a>
        <a href="#ContactUs" className="nav-item">
          Contact Us
        </a>
      </div>
      <div className="nav-buttons">
        <a href="https://freelancingcollegeclub.com" className="button-secondary left w-inline-block">
          <div className="button-text">Login</div>
        </a>
        <a href="/login" className="button-primary w-inline-block">
          <div className="button-text">Login</div>
        </a>
      </div>
    </div>
  );
}

export default Header;

