import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number text-gold">10+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number text-gold">100%</h3>
            <p className="stat-label">Certified & Insured</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number text-gold">24/7</h3>
            <p className="stat-label">Emergency Call-outs</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number text-gold">5★</h3>
            <p className="stat-label">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
