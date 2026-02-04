
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0].id);

  const selectedProduct = PRODUCTS.find(p => p.id === activeProduct) || PRODUCTS[0];

  return (
    <section id="solutions" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Navigation/Picker */}
          <div className="lg:w-1/3 reveal">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Enterprise Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-12 leading-tight">High-Impact Solutions.</h3>
            
            <div className="space-y-4">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    activeProduct === product.id 
                      ? 'bg-blue-600 border-blue-500 shadow-xl translate-x-4' 
                      : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                    activeProduct === product.id ? 'text-blue-200' : 'text-slate-500'
                  }`}>
                    {product.category}
                  </span>
                  <span className="text-lg font-bold leading-tight block">{product.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Display */}
          <div className="lg:w-2/3 reveal">
            <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm h-[800px] flex flex-col">
              <div className="shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div className="max-w-xl">
                  <h4 className="text-3xl md:text-4xl font-black mb-2 leading-tight">{selectedProduct.name}</h4>
                  <p className="text-blue-400 font-medium text-lg italic">{selectedProduct.tagline}</p>
                </div>
                {selectedProduct.website && (
                  <a 
                    href={`https://${selectedProduct.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-blue-400/30 text-blue-400 rounded-full text-sm font-bold hover:bg-blue-400 hover:text-white transition-all whitespace-nowrap"
                  >
                    Visit Website
                  </a>
                )}
              </div>

              <p className="shrink-0 text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
                {selectedProduct.description}
              </p>

              <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProduct.modules.map((module, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 h-full">
                      <h5 className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {module.name}
                      </h5>
                      <ul className="space-y-3">
                        {module.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-slate-300 text-sm flex items-start gap-3">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Products;
