
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Set target date to 30 days from now for demonstration
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center px-4">
      <span className="text-3xl md:text-5xl font-light tracking-tighter">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center max-w-5xl mx-auto py-20 relative px-4">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-blue-400 font-bold opacity-90">
            Current Status: Under Construction
          </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none">
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 pb-2">
            The Moo
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600 pb-2">
            Point
          </span>
          {/* <span className="block font-serif italic text-white -mt-2 md:-mt-4">
            Point
          </span> */}
        </h1>

        <div className="flex justify-center items-center divide-x divide-white/10 my-10 animate-fade-in">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-extralight mb-12">
          Focus on what actually matters <br />
          Redefining the digital landscape through code and creativity.
        </p>

        {/* <div className="glass p-2 rounded-2xl md:rounded-full max-w-lg mx-auto transition-all hover:border-white/20 duration-500 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Join the waitlist"
              className="bg-transparent border-none outline-none text-white px-6 py-4 flex-grow rounded-full text-sm placeholder:text-gray-500 focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
        </div>

        {subscribed && (
          <p className="mt-6 text-blue-400 text-sm font-medium tracking-wide animate-pulse">
            SUCCESS! WE'LL NOTIFY YOU SOON.
          </p>
        )} */}
      </div>
    </div>
  );
};
