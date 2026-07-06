import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'gallery1.png',
      alt: 'Commercial Containment Work',
      label: 'Commercial Fit-Outs'
    },
    {
      id: 2,
      src: 'gallery2.png',
      alt: 'Breaker Box Installation & Testing',
      label: 'Precision Installations'
    },
    {
      id: 3,
      src: 'gallery3.png',
      alt: 'Smart Home Lighting Installation',
      label: 'Luxury Smart Lighting'
    }
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Our Work in Action</h2>
          <p className="section-subtitle">
            A glimpse into our recent commercial and domestic electrical projects. Quality you can see.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.src} alt={img.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
