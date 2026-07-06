import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Stats />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
