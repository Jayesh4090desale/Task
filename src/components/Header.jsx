import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span>Welcome to DTE Maharashtra</span>
            </div>
            <div className="top-bar-right">
              <a href="#screen-reader">Screen Reader Access</a>
              <a href="#sitemap">Sitemap</a>
              <a href="#skip-to-content">Skip to Main Content</a>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-container">
                <div className="logo-emblem">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Emblem_of_India.svg/150px-Emblem_of_India.svg.png" alt="Government of India" />
                </div>
                <div className="logo-text">
                  <h1>Directorate of Technical Education</h1>
                  <p>Maharashtra State, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="header-actions">
              <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
                <FaSearch />
              </button>
              <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <button><FaSearch /></button>
            </div>
          )}
        </div>
      </header>

      <nav className={`main-navigation ${menuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li className="has-submenu">
              <a href="#about">About Us</a>
              <ul className="submenu">
                <li><a href="#history">History</a></li>
                <li><a href="#organization">Organization</a></li>
                <li><a href="#achievements">Achievements</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#admissions">Admissions</a>
              <ul className="submenu">
                <li><a href="#cap">CAP</a></li>
                <li><a href="#engineering">Engineering</a></li>
                <li><a href="#pharmacy">Pharmacy</a></li>
                <li><a href="#diploma">Diploma</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#institutes">Institutes</a>
              <ul className="submenu">
                <li><a href="#polytechnics">Polytechnics</a></li>
                <li><a href="#engineering-colleges">Engineering Colleges</a></li>
                <li><a href="#pharmacy-colleges">Pharmacy Colleges</a></li>
              </ul>
            </li>
            <li><a href="#examinations">Examinations</a></li>
            <li><a href="#tenders">Tenders</a></li>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
