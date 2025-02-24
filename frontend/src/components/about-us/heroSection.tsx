import React from 'react';
import { Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-amber-500/10 rounded-br-full" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-amber-500/10 rounded-tl-full" />

      {/* Animated Decorative Cars */}
      <div className="absolute left-4 top-1/4 text-amber-500/20 hidden lg:block">
        <Car size={48} className="transform rotate-45 animate-pulse" />
      </div>
      <div className="absolute right-4 bottom-1/4 text-amber-500/20 hidden lg:block">
        <Car size={48} className="transform -rotate-45 animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Main Content */}
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            <div className="inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600 inline-block transform hover:scale-105 transition-transform duration-300">
                Leading Car Rental Company
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
            </div>
            <br />
            <span className="text-amber-500 inline-block mt-2">in Delhi</span>
          </h1>
        </div>

        {/* Decorative Dots */}
        <div className="absolute left-8 top-8 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-500 rounded-full" />
          ))}
        </div>
        <div className="absolute right-8 bottom-8 grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-500 rounded-full" />
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto transform translate-y-1"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 31.8C384 31 480 38 576 41.8C672 45.7 768 46.3 864 43.5C960 40.7 1056 34.3 1152 33.5C1248 32.7 1344 37.3 1392 39.7L1440 42V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;