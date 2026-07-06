import React from 'react';
import { Home, Lightbulb, Zap, BatteryCharging } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Domestic & Commercial',
      icon: <Home size={28} />,
      features: ['New Builds & Renovations', 'Maintenance & Repairs', 'Lighting & Power Design'],
      price: 'Price to be confirmed',
      image: 'service1.png'
    },
    {
      id: 2,
      title: 'Smart Home Solutions',
      icon: <Lightbulb size={28} />,
      features: ['Smart Lighting Systems', 'Home Automation', 'Energy Efficiency Control'],
      price: 'Price to be confirmed',
      image: 'service2.png'
    },
    {
      id: 3,
      title: 'Reliable Power',
      icon: <Zap size={28} />,
      features: ['Fault Finding', 'Electrical Upgrades', 'Panel Replacements'],
      price: 'Price to be confirmed',
      image: 'service3.png'
    },
    {
      id: 4,
      title: 'EV Charger Installation',
      icon: <BatteryCharging size={28} />,
      features: ['Home & Office Chargers', 'Fast Charging Support', 'Safety Certification'],
      price: 'Price to be confirmed',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Comprehensive electrical services tailored to your modern lifestyle and business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-price">
                  <span className="placeholder-text">[{service.price}]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
