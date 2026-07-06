import React from 'react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-content">
          <h2 className="trust-statement">
            <span className="trust-word">Safe.</span>
            <span className="trust-word">Reliable.</span>
            <span className="trust-word">Professional.</span>
          </h2>
          <div className="trust-divider"></div>
          <p className="trust-description">
            Providing Dublin with top-tier electrical solutions. From high-end commercial 
            fit-outs to cutting-edge smart home automation, our work speaks for itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
