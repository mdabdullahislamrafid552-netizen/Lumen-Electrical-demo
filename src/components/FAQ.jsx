import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide commercial and domestic services?',
      answer: 'Yes, we are fully equipped to handle both domestic and commercial electrical projects, from home renovations to office fit-outs.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We primarily serve the Greater Dublin area. Contact us to find out if we can service your specific location.'
    },
    {
      question: 'Are your electricians certified and insured?',
      answer: 'Absolutely. Safety and compliance are our top priorities. All our electricians are fully certified, registered, and insured.'
    },
    {
      question: 'Do you handle emergency call-outs?',
      answer: 'Yes, we provide emergency electrical services. Please call our dedicated emergency number (to be added) for urgent assistance.'
    },
    {
      question: 'Can you install EV chargers at my home?',
      answer: 'Yes, EV charger installations are one of our specialties. We can advise on the best unit for your needs and ensure a safe, compliant installation.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about our services.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="faq-icon text-gold" size={24} />
                ) : (
                  <ChevronDown className="faq-icon" size={24} />
                )}
              </button>
              <div 
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
