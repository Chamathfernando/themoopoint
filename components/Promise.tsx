
import React from 'react';

const Promise: React.FC = () => {
  return (
    <section id="promise" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-blue-600 flex-grow"></div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Promise</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-sm border border-slate-100">
            {/* Visual accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600 rounded-full opacity-5"></div>

            <p className="text-2xl md:text-4xl text-slate-800 leading-snug font-medium mb-12 italic">
              "We reduce the noise that slows organizations down. We simplify systems that complicate decisions. We help teams move forward with clarity."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                The Moo Point – Decisions made easier.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
