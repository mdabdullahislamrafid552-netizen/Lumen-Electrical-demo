import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <img src="logo.png" alt="Lumen Electrical Solutions Logo" className="logo-img" />
          <span className="logo-text">LUMEN</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#quote" className="btn btn-primary">Get a Free Quote</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#quote" 
              className="btn btn-primary w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
