import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TouristPlaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      title: "Taj Mahal, Agra",
      description: "Experience the magnificent Taj Mahal with our comfortable travel services. Professional drivers and well-maintained vehicles for your journey.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Jaipur Pink City",
      description: "Explore the stunning Pink City with our reliable tour services. Visit palaces, forts, and local markets with ease.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Varanasi Ghats",
      description: "Journey to the spiritual city of Varanasi. Experience the ancient ghats and temples with our comfortable transport.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Kerala Backwaters",
      description: "Discover the serene backwaters of Kerala. Enjoy comfortable travels through God's own country.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Goa Beaches",
      description: "Visit the beautiful beaches of Goa with our tourism services. Reliable transport for your beach vacation.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Shimla Hills",
      description: "Experience the beauty of Shimla hills with our tour packages. Safe and comfortable mountain travels.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Udaipur Lakes",
      description: "Explore the city of lakes with our premium travel services. Visit palaces and lakes in comfort.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Darjeeling Tea Gardens",
      description: "Visit the famous tea gardens of Darjeeling. Enjoy mountain views with our reliable transport.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Khajuraho Temples",
      description: "Discover the ancient temples of Khajuraho. Professional travel services for your heritage tour.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Rann of Kutch",
      description: "Experience the white desert of Kutch. Comfortable transport for your desert adventure.",
      image: "/api/placeholder/400/300"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 3 >= services.length ? 0 : prevIndex + 3
        );
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(services.length - 3, 0) : prevIndex - 3
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 text-orange-400">Popular Tourist Destinations</h2>
      
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <Card 
                  className="hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
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
                    <p className="text-gray-600 text-sm text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 3) === index ? 'bg-orange-400 w-6' : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentIndex(index * 3);
              setIsAutoPlaying(false);
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default TouristPlaces;