
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <div id="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              A Sharp Focus on Execution Confidence
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                The Moo Point is an IT solutions and ERP consulting company focused on helping organisations simplify decision-making, reduce operational noise, and implement enterprise systems that actually work.
              </p>
              <p>
                Our objective is simple: to make decisions easier so organizations can move forward with confidence. We don't just implement software; we implement clarity.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <span className="block text-4xl font-bold text-blue-600 mb-1">98%</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Clarity Index</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-blue-600 mb-1">0</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Redundant Noise</span>
              </div>
            </div>
          </div>
          <div className="relative reveal h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
              alt="Professional Office"
              className="rounded-3xl shadow-2xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-slate-600 italic">"Removing friction isn't just a goal, it's our core operating principle."</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div id="story" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 reveal">
            <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-lg border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                alt="Strategy Meeting"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-8">Our Story</h2>
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                The name <span className="font-bold text-slate-900">The Moo Point</span> was inspired by the use of the term in the gold-standard TV show <i>Friends</i>, where Joey explains a 'moo point' as a cow’s opinion — something irrelevant or invalid.
              </p>
              <p>
                Interestingly, the core business of The Moo Point was developed by focusing on the <strong>exact opposite</strong> of what the phrase implies. The original idiom from which the name is derived is called a <i>moot point</i>.
              </p>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm my-8">
                <p className="font-medium text-slate-900">
                  "In real business environments, especially when it comes to ERP systems, organizations do not struggle with irrelevance. They struggle with excessive time spent debating, over-processing decisions, and delaying execution."
                </p>
              </div>
              <p>
                The Moo Point was created to remove that friction and bring clarity to complex decision-making. We take the things that feel like "moo points"—the endless, stalled debates—and transform them into actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
