import React, { useEffect, useRef, useState } from 'react';
import TaxiBookingHero from '../home/taxiBookingHero';
import CarBookingForm from '../home/carBookingForm';
import ServicesGrid from '../home/servicesGrid';
import OurServices from '../home/ourServices';
import VehicleSlider from '../home/vehiclesRanges';
import CorporateCabLanding from '../home/corporateCabLanding';
import TouristPlaces from '../home/touristPlaces';
import ReviewSlider from '../home/reviewSlider';

// LazyComponent wrapper for handling intersection observer
interface LazyComponentProps {
  children: React.ReactNode;
  threshold?: number;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={componentRef} className="w-full">
      {isVisible ? children : <div className="h-64 bg-gray-100 animate-pulse" />}
    </div>
  );
};

const reviews = [
  {
    id: 1,
    customerName: "John Doe",
    rating: 5,
    comment: "Excellent service! The driver was very professional and punctual.",
    date: "2024-02-20",
    location: "Delhi",
    tripRoute: "Delhi to Agra"
  },
  {
    id: 2,
    customerName: "Jane Smith",
    rating: 4,
    comment: "Great experience overall. Would recommend!",
    date: "2024-02-19",
    location: "Mumbai",
    tripRoute: "Delhi to Jaipur"
  }
];

const Homepage = () => {
  return (
    <div className="min-h-screen">
    
      
      <div> {/* Adjust padding based on your header height */}
        
        <CarBookingForm />

        <LazyComponent>
          <TaxiBookingHero />
        </LazyComponent>
        
        <ServicesGrid />
        
        <OurServices />
        
        <VehicleSlider />
        
        <CorporateCabLanding />
        
        <TouristPlaces />
        
        <ReviewSlider
          reviews={reviews} 
          autoPlayInterval={5000} 
          slidesToShow={3} 
        />
        
      </div>
    </div>
  );
};

export default Homepage;