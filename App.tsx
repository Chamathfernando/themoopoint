
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promise from './components/Promise';
import About from './components/About';
import Products from './components/Products';
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

  // Handle initial hash in URL for deep linking
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small timeout to ensure DOM is fully rendered before scrolling
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Structured Data for Google Sitelinks
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Real estate management ERP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://themoopoint.com/#solutions"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Production and Manufacturing ERP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://themoopoint.com/#solutions"
      },
      {
        "@type": "WebSite",
        "name": "The Moo Point",
        "url": "https://themoopoint.com",
        "description": "IT Consulting & ERP Solutions focusing on clarity and execution confidence."
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Our Promise",
            "url": "https://themoopoint.com/#promise"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Solutions",
            "url": "https://themoopoint.com/#solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Our Story",
            "url": "https://themoopoint.com/#story"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Consulting Services",
            "url": "https://themoopoint.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "url": "https://themoopoint.com/#contact"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* React 19 Head Elements */}
      <title>The Moo Point | Specialized ERP Solutions & IT Consulting</title>
      <meta name="description" content="Specialized ERP systems for Real Estate, Production, Manufacturing, Microfinance, and Rental Property Management. Clarity for enterprise complexity." />
      <meta property="og:title" content="The Moo Point | Enterprise Solutions & Execution Clarity" />
      <meta property="og:description" content="Consulting and implementation for high-impact ERP systems. Decisions made easier." />
      <link rel="canonical" href="https://themoopoint.com" />
      
      {/* Structured Data Script */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Header />
      <main className="flex-grow" role="main">
        <Hero />
        <Promise />
        <Products />
        <About />
        <Services />
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden" aria-labelledby="contact-heading">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-24"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-white mb-8">Ready to move forward?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Stop debating. Start executing. Let us show you how we bring clarity to enterprise IT systems.
            </p>
            <a
              href="mailto:connect@themoopoint.com"
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
