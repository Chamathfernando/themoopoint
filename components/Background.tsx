
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* High-quality abstract background image */}
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
        alt="Background" 
        className="w-full h-full object-cover opacity-30 scale-105"
      />
      
      {/* Gradients to darken and add depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black"></div>
      
      {/* Animated noise/grain effect overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};
