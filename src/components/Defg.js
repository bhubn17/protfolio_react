
import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={require('./images/footer-img.jpg')}
              alt="bhubn"
              className="logo"
            />
          </div>
          <div className="col">
            <h1>About me:</h1>
            <p>"I am a BCA student at Tribhuvan University, currently engaged in a project.
 I possess a foundational understanding of React.js, JavaScript, CSS, and HTML."</p>
          </div>
    
          <div className="col social-media">
            <ul>
              
              <li><a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://example.com/linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col">
          <ul>
              <li><a href="HOMEk" target="_blank" rel="noopener noreferrer">HOME</a></li>
              <li><a href="ABOUT" target="_blank" rel="noopener noreferrer">ABOUT</a></li>
              <li><a href="HELP" target="_blank" rel="noopener noreferrer">HELP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


