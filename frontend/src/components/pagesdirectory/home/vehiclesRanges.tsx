import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Briefcase, Check } from 'lucide-react';

const VehicleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const vehicles = [
    {
      id: 1,
      name: "Toyota Fortuner",
      image: "/api/placeholder/400/300",
      price: "Rs. 55/km & 250 km/day",
      passengers: "7+1",
      luggage: 7,
      available: true
    },
    {
      id: 2,
      name: "Mahindra Thar",
      image: "/api/placeholder/400/300",
      price: "Rs. 55/km & 250 km/day",
      passengers: "4+1",
      luggage: 2,
      available: true
    },
    {
      id: 3,
      name: "Mercedes E Class",
      image: "/api/placeholder/400/300",
      price: "Rs. 90/km & 250 km/day",
      passengers: "4+1",
      luggage: 5,
      available: true
    },
    {
      id: 4,
      name: "BMW 5 Series",
      image: "/api/placeholder/400/300",
      price: "Rs. 85/km & 250 km/day",
      passengers: "4+1",
      luggage: 4,
      available: true
    },
    {
      id: 5,
      name: "Audi A6",
      image: "/api/placeholder/400/300",
      price: "Rs. 88/km & 250 km/day",
      passengers: "4+1",
      luggage: 4,
      available: true
    },
    {
      id: 6,
      name: "Lexus ES",
      image: "/api/placeholder/400/300",
      price: "Rs. 92/km & 250 km/day",
      passengers: "4+1",
      luggage: 4,
      available: true
    }
  ];

  // Update items per view based on window size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= Math.ceil(vehicles.length / itemsPerView) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(vehicles.length / itemsPerView) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">Range of vehicles</h1>
        <p className="text-gray-600">We have wide range of well maintained vehicles with experienced drivers.</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array(Math.ceil(vehicles.length / itemsPerView)).fill(null).map((_, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0 flex gap-4">
                {vehicles.slice(groupIndex * itemsPerView, groupIndex * itemsPerView + itemsPerView).map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className={`${
                      itemsPerView === 3 ? 'w-1/3' : 
                      itemsPerView === 2 ? 'w-1/2' : 
                      'w-full'
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-center mb-2">{vehicle.name}</h3>
                        <p className="text-gray-600 text-center mb-4">{vehicle.price}</p>
                        <div className="flex justify-between items-center border-t pt-4">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>{vehicle.passengers}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-5 h-5 mr-2" />
                            <span>{vehicle.luggage}</span>
                          </div>
                          <div className="flex items-center text-green-500">
                            <Check className="w-5 h-5 mr-2" />
                            <span>Yes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VehicleSlider;