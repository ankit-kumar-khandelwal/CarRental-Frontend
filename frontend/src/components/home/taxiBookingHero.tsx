import React from 'react';
import { Button } from '@/components/ui/button';
import Car from '../assets/car.png';
import '../css/car.css';

const TaxiBookingHero = () => {
  return (
   
      <div className="container mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
              Delhi Car Booking
            </h1>
            
            <h2 className="text-lg lg:text-xl font-medium">
              Great car/taxi rental services from Delhi, Noida, Gurgaon
            </h2>
            
            <p className="text-gray-700 text-sm lg:text-base">
              Are you searching for taxi near me or car near me then Delhi Car Booking is one 
              of the largest and <span className="text-orange-500">leading Car Rental Company</span>,
            </p>
            
            <p className="text-gray-700 text-sm lg:text-base">
              We are a premier car rental company with a fleet of well-maintained vehicles and 
              experienced drivers. At Delhicarbooking.we are dedicated to offering users the 
              best car rental services, including outstation taxi services in Delhi, at the most 
              competitive prices.
            </p>
            
            <p className="text-gray-700 text-sm lg:text-base">
              Whether it's for business trips, leisure getaways, intercity travel, or a simple city 
              visit, explore our extensive fleet of well-maintained vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                SEE ALL RATES
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                RESERVATION NOW
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-full hidden lg:block">
            <div className="car-showcase">
              <div className="car-container">
                <div className="car-frame">
                  <img src={Car} alt="Car" className="car-image" />
                </div>
                <div className="glow-effect"></div>
                <div className="floating-circles">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                </div>
                <div className="road-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TaxiBookingHero;