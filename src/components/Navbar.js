import React from 'react';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="right-section">
          <a href='me'>BHUBN</a>
        </div>
        <div className="left-section">
          <ul>
            <li><a href="naa">Home</a></li>
            <li><a href="hllo">About</a></li>
            <li><a href="hi">Help</a></li>
            <li><a href="yooo">Projects</a></li>
            <li><a href="yooo">Blog</a></li>
            <li><a href="yooo">Contacts</a></li>
          </ul>
        </div>  
      </div>
    </nav>
  );
};
