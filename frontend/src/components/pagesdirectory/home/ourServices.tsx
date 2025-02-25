import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Round Trip Cabs",
      description: "Aaradhya Tour and Travel offers seamless roundtrip cab services, ensuring convenient journeys from starting point to destination and back. Punctual and reliable service.",
      image: "/assets/localrental.jpeg"
    },
    {
      title: "Oneway Drops",
      description: "Hassle-free one way drop service provided by Aaradhya Tour and Travel. Enjoy a smooth journey to your desired location with competitive rates and professional drivers.",
      image: "/assets/one_way_drop.jpg"
    },
    {
      title: "Local Rental",
      description: "Explore the city with ease using Aaradhya Tour and Travel's local rental services. Flexible options for sightseeing, shopping, or attending events, with well-maintained vehicles.",
      image: "/assets/local_rental.jpg"
    },
    {
      title: "Airport Transfers",
      description: "Make airport transfers stress-free with Aaradhya Tour and Travel's reliable services. Timely pick-ups and drop-offs to and from the airport with professional drivers and vehicles.",
      image: "/assets/airport_transfer.jpg"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card 
              className={`transform transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'scale-105 shadow-2xl z-10' 
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-center">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 text-sm text-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-90'
                }`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>

            {/* Overlay effect when card is hovered */}
            {hoveredIndex === index && (
              <div 
                className="absolute inset-0 -m-4 bg-black/5 rounded-xl blur-xl transition-all duration-300"
                style={{ zIndex: 5 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;