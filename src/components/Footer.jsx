import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>About DTE</h3>
              <p>
                The Directorate of Technical Education (DTE) is responsible for the administration
                of technical education in the state of Maharashtra, India.
              </p>
              <div className="social-links">
                <a href="#facebook"><FaFacebook /></a>
                <a href="#twitter"><FaTwitter /></a>
                <a href="#youtube"><FaYoutube /></a>
                <a href="#instagram"><FaInstagram /></a>
                <a href="#linkedin"><FaLinkedin /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#examinations">Examinations</a></li>
                <li><a href="#institutes">Institutes</a></li>
                <li><a href="#tenders">Tenders</a></li>
                <li><a href="#rti">RTI</a></li>
                <li><a href="#grievances">Grievances</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Important Links</h3>
              <ul>
                <li><a href="#msbte">MSBTE</a></li>
                <li><a href="#aicte">AICTE</a></li>
                <li><a href="#dte-portal">DTE Portal</a></li>
                <li><a href="#cap-process">CAP Process</a></li>
                <li><a href="#scholarship">Scholarship</a></li>
                <li><a href="#anti-ragging">Anti-Ragging</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p><strong>Address:</strong></p>
                <p>Directorate of Technical Education</p>
                <p>3rd Floor, Mahapalika Marg</p>
                <p>Dhobi Talao, Mumbai - 400002</p>
                <p><strong>Email:</strong> info@dte.maharashtra.gov.in</p>
                <p><strong>Phone:</strong> +91-22-2262 6051</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Directorate of Technical Education, Maharashtra. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
