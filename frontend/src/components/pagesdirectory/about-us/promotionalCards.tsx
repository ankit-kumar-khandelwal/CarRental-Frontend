import React from 'react';
import { Gift, PhoneCall, Trophy } from 'lucide-react';

interface PromoCard {
  title: string;
  description: string;
  icon: JSX.Element;
  accentColor: string;
}

const PromotionalCards = () => {
  const promos: PromoCard[] = [
    {
      title: "GET BEST OFFERS",
      description: "Get best offers and discounts on your first booking.",
      icon: <Gift className="w-8 h-8" />,
      accentColor: "bg-amber-500"
    },
    {
      title: "CONNECT ANYTIME",
      description: "+91 8368548255, +91 7532981416, +91 1144787924",
      icon: <PhoneCall className="w-8 h-8" />,
      accentColor: "bg-amber-500"
    },
    {
      title: "MONEY BACK!",
      description: "Get 100% Money back of not taking services after booking",
      icon: <Trophy className="w-8 h-8" />,
      accentColor: "bg-amber-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white rounded-lg border-2 border-amber-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6 flex items-center space-x-4">
              {/* Icon container with animation */}
              <div className={`${promo.accentColor} p-3 rounded-full text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {promo.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-amber-500 mb-1">
                  {promo.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {promo.description}
                </p>
              </div>
            </div>

            {/* Decorative accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalCards;