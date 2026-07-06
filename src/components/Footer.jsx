import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer id="quote" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <a href="#" className="footer-logo mb-4">
              <img src="logo.png" alt="Lumen Electrical Solutions" className="footer-logo-img" />
              <span className="footer-logo-text">LUMEN</span>
            </a>
            <p className="footer-desc mb-6">
              Powering Homes. Energising Lives.<br />
              Dublin's premium electrical contractors.
            </p>
            <div className="contact-info">
              <a href="mailto:lumenelecsolutions@gmail.com" className="contact-link">
                <Mail size={18} /> lumenelecsolutions@gmail.com
              </a>
              <a href="https://instagram.com/lumenelectrical_solutions" target="_blank" rel="noopener noreferrer" className="contact-link">
                <InstagramIcon size={18} /> @lumenelectrical_solutions
              </a>
              <div className="contact-link">
                <MapPin size={18} /> Dublin, Ireland
              </div>
              <div className="contact-link text-muted">
                <Phone size={18} /> [Phone number to be added]
              </div>
            </div>
          </div>

          <div className="footer-form-container">
            <h3 className="form-title">Get a Free Quote</h3>
            <p className="form-subtitle">Message us directly for a free quote or consultation.</p>
            <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" required>
                  <option value="">Select a service...</option>
                  <option value="domestic">Domestic Electrical</option>
                  <option value="commercial">Commercial Fit-out</option>
                  <option value="smarthome">Smart Home Solutions</option>
                  <option value="evcharger">EV Charger</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Briefly describe your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lumen Electrical Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
