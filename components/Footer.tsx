
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent navigation for dummy links in this prototype
    const href = e.currentTarget.getAttribute('href');
    if (href === '#' || href?.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.getElementById(href.substring(1));
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <a 
            href="#" 
            onClick={handleLinkClick}
            className="inline-flex items-center gap-3 bg-transparent"
          >
            <img 
              src="/moopoint-logo.png" 
              alt="The Moo Point Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-black tracking-tighter">THE MOO POINT</span>
          </a>
        </div>
        <p className="text-slate-400 font-medium tracking-widest text-xs uppercase mb-4">
          Decisions Made Easier.
        </p>
        <div className="w-12 h-px bg-slate-700 mx-auto mb-12"></div>
        <div className="flex justify-center gap-8 mb-12 text-sm text-slate-400">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">X / Twitter</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <p className="text-slate-500 text-sm font-medium">
          &copy; {currentYear + 1} THE MOO POINT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
