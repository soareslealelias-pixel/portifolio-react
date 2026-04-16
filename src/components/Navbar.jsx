import React, { useState } from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Dev<span>.Elias</span></div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
          <li><a href="#projetos" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
        </ul>

        <div className="nav-controls">
          <button onClick={toggleTheme} className="theme-btn">
            {isDarkMode ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar