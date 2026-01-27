
import React from 'react';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden selection:bg-blue-500/30">
      <Background />
      
      <main className="flex-grow flex items-center justify-center px-4 z-10">
        <Hero />
      </main>

      <Footer />
      
      {/* Dynamic atmospheric blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full glow-animation"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full glow-animation" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-[30%] left-[20%] w-[10%] h-[10%] bg-blue-500/5 rounded-full float-animation blur-3xl"></div>
      </div>
    </div>
  );
};

export default App;
