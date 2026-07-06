import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Quote',
      description: 'We assess your needs, discuss options, and provide a transparent, no-obligation quote.'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'For complex projects, we create a detailed electrical design ensuring optimal performance and compliance.'
    },
    {
      number: '03',
      title: 'Expert Installation',
      description: 'Our certified electricians execute the work cleanly, safely, and strictly to schedule.'
    },
    {
      number: '04',
      title: 'Testing & Handover',
      description: 'Rigorous testing and certification guarantee your new system is safe and ready to use.'
    }
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A streamlined, professional process from start to finish.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
