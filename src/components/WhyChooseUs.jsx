import React from 'react';
import { ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={36} />,
      title: 'Quality You Can Trust',
      description: 'We don\'t cut corners. Every installation, from a simple socket to a complex smart home system, is completed to the highest industry standards.'
    },
    {
      icon: <Clock size={36} />,
      title: 'On Time, Every Time',
      description: 'Your time is valuable. We pride ourselves on punctuality and efficient project management, ensuring minimal disruption to your home or business.'
    },
    {
      icon: <ShieldCheck size={36} />,
      title: 'Safe Workmanship',
      description: 'Safety is our paramount concern. All our electricians are fully certified, insured, and adhere strictly to current electrical regulations.'
    },
    {
      icon: <ThumbsUp size={36} />,
      title: 'Customer Satisfaction',
      description: 'We build long-term relationships with our clients through transparent pricing, clear communication, and outstanding results.'
    }
  ];

  return (
    <section className="section why-choose-us">
      <div className="container">
        <div className="wcu-layout">
          <div className="wcu-content">
            <h2 className="section-title mb-4">Why Lumen Electrical Solutions?</h2>
            <p className="section-subtitle mb-8" style={{ marginLeft: 0 }}>
              Choosing the right electrical contractor is a crucial decision. Here is why homeowners and businesses across Dublin trust us with their power needs.
            </p>
            
            <div className="wcu-grid">
              {reasons.map((reason, index) => (
                <div key={index} className="wcu-item">
                  <div className="wcu-icon">{reason.icon}</div>
                  <div>
                    <h3 className="wcu-item-title">{reason.title}</h3>
                    <p className="wcu-item-desc">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wcu-image-container">
            <div className="wcu-image-wrapper">
              <img 
                src="wcu.png" 
                alt="Professional Electrical Work" 
                className="wcu-image" 
              />
              <div className="wcu-image-badge">
                <span className="text-gold font-bold text-2xl">100%</span>
                <br />Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
