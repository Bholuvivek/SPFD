// import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons from React Icons
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus id suscipit commodo.</p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/help-support">Help/Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: bholu@gmail.com</p>
          <p>Phone: +91 8804752876</p>
          <p>Address: Nawada, Chainwa, Saran, India</p>
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <ul className="social-icons">
            <li><a href="#"><FaFacebookF />Facebook</a></li> <br/>
            <li><a href="#"><FaTwitter />Twitter</a></li><br/>
            <li><a href="#"><FaInstagram />Instagram</a></li><br/>
            <li><a href="#"><FaLinkedinIn />LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter Signup</h3>
          <p>Subscribe to our newsletter to stay updated about new courses, features, and promotions.</p>
          {/* Add your newsletter signup form here */}
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Downloadable Materials</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
