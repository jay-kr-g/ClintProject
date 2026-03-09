import React, { useEffect, useRef } from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#works">WORKS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <style>{`
        .header {
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }
        .nav-list {
          display: flex;
          justify-content: center;
          gap: 40px;
        }
        .nav-list li a {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .nav-list li a:hover {
          color: var(--accent-color);
        }
      `}</style>
    </header>
  );
};

export default Header;
