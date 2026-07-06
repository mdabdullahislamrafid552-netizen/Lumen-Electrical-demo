import React from 'react';
import { Star } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  // Using placeholders as per instructions: "Verified customer review required"
  const reviews = [
    {
      id: 1,
      name: 'Client Name',
      text: '[Verified customer review required]',
      rating: 5
    },
    {
      id: 2,
      name: 'Client Name',
      text: '[Verified customer review required]',
      rating: 5
    },
    {
      id: 3,
      name: 'Client Name',
      text: '[Verified customer review required]',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Read what homeowners and businesses in Dublin have to say about our electrical services.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-stars mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <h4 className="review-author">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
