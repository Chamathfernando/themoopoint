
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promise from './components/Promise';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll reveal observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Promise />
        <About />
        <Services />
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-24"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to move forward?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Stop debating. Start executing. Let us show you how we bring clarity to enterprise IT systems.
            </p>
            <a
              href="mailto:contact@themoopoint.com"
              className="px-12 py-5 bg-white text-blue-600 rounded-full font-black text-lg shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105 inline-block"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
