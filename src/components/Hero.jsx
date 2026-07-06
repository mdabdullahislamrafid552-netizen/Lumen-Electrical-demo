import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      {/* Background Image Placeholder */}
      <div 
        className="hero-bg" 
        style={{ 
          backgroundImage: 'url("hero.png")' 
        }}
      ></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="badge mb-4">Dublin's Premier Electrical Solutions</div>
          <h1 className="hero-title mb-4">
            Powering Homes.<br />
            <span className="text-gold">Energising Lives.</span>
          </h1>
          <p className="hero-subtitle mb-8 delay-100">
            From luxury smart home automation to robust commercial electrical containment. 
            Safe, reliable, and professional service you can trust.
          </p>
          <div className="hero-ctas delay-200">
            <a href="#quote" className="btn btn-primary cta-btn">
              Get a Free Quote <ArrowRight size={20} className="ml-2" />
            </a>
            <a href="#services" className="btn btn-secondary cta-btn">
              Our Services
            </a>
          </div>
          <div className="hero-trust mt-12 delay-300">
            <div className="trust-item">
              <span className="trust-icon">✓</span> Fully Certified & Insured
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span> Emergency Call-outs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
