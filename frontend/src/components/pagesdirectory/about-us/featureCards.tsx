import React from 'react';

interface FeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCards = () => {
  const features: FeatureCard[] = [
    {
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M30,20 L70,20 A10,10 0 0 1 80,30 L80,60 A10,10 0 0 1 70,70 L30,70 A10,10 0 0 1 20,60 L20,30 A10,10 0 0 1 30,20" className="text-orange-300"/>
            <path d="M35,35 L65,35 M35,45 L65,45 M35,55 L65,55" className="text-purple-400"/>
            <circle cx="50" cy="45" r="20" className="text-orange-200" strokeDasharray="2 2"/>
          </g>
        </svg>
      ),
      title: "Who we are",
      description: "Comparing & booking minicab & taxi quotes online will save you time and effort vs. if you dial local taxi numbers to gather cab fares on the telephone. We provide all kind of tour and travel taxi services."
    },
    {
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20,50 Q35,20 50,50 T80,50" className="text-orange-300"/>
            <rect x="30" y="30" width="40" height="40" rx="5" className="text-purple-400"/>
            <path d="M40,45 L60,45 M40,55 L60,55" className="text-purple-400"/>
          </g>
        </svg>
      ),
      title: "What we do",
      description: "Dalihicarbooking calculates fares from different kind of cab facilities across India, enabling you to compare real-time online taxi quotes pre-set by the our company ourselves."
    },
    {
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="30" className="text-orange-300"/>
            <path d="M50,30 L50,50 L65,65" className="text-purple-400" strokeLinecap="round"/>
            <path d="M80,50 L90,50" className="text-orange-200" strokeDasharray="2 2"/>
          </g>
        </svg>
      ),
      title: "Why choose us",
      description: "Delhicarbooking provide instant car delivery on time. We fulfil all kind of requirements according to your need. We having best trained drivers and neet & clean vehicles available 24 *7 Hrs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-gray-600">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;