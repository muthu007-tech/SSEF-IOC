import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Server-Side Engineering Fundamentals</h1>
        <p className="subtitle">
          A comprehensive guide to backend development concepts and technologies
        </p>
        <div className="decoration">
          <div className="server-icon">🖥️</div>
          <div className="network-line"></div>
          <div className="client-icon">📱</div>
        </div>
      </div>
    </header>
  );
};

export default Header;