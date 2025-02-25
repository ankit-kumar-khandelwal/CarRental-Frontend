import React from 'react';
import { Button } from '@/components/ui/button';
import BusinessMan from '../assets/businessman.jpg'

const CorporateCabLanding = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
          Aradhya Tour and Travels : Corporate Cab Solutions
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700">
          Reliable Rides, Remarkable Service
        </p>
      </header>

      {/* Main Content - Maintaining left-side image with new styling */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* Updated image container with rounded border */}
        <div className="order-1 md:order-none w-full">
          <div className="relative aspect-video p-2 bg-gray-200 rounded-[2.5rem] shadow-lg">
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
              <img 
                src={BusinessMan} 
                alt="Business executive working in luxury car" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Premium Corporate Transportation in Delhi
          </h2>
          
          <p className="text-gray-600">
            At Aradhya Tour and Travels, we understand the critical importance of reliable transportation 
            for your corporate needs in Delhi. That's why we offer Corporate Cab Solutions that blend 
            reliability with remarkable service, ensuring your business travel experience is nothing 
            short of exceptional.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 mt-1 rounded-full bg-orange-400 flex items-center justify-center text-white">✓</div>
              <p className="text-gray-700">Well-maintained luxury fleet for maximum comfort</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 mt-1 rounded-full bg-orange-400 flex items-center justify-center text-white">✓</div>
              <p className="text-gray-700">Professional, trained chauffeurs</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-6 w-6 mt-1 rounded-full bg-orange-400 flex items-center justify-center text-white">✓</div>
              <p className="text-gray-700">Punctual service for meetings and airport transfers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Flexible Booking</h3>
          <p className="text-gray-600">
            Customizable travel solutions tailored to your specific requirements, whether you're a small 
            startup or large corporation.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Transparent Pricing</h3>
          <p className="text-gray-600">
            Clear, upfront rates with no hidden charges. Get the best value for your corporate 
            transportation needs.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">24/7 Support</h3>
          <p className="text-gray-600">
            Round-the-clock customer service to assist you with bookings, changes, and any queries.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Ready to elevate your business travel experience?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2">
            SEE ALL RATES
          </Button>
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-2">
            ALL TAXI SERVICES
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CorporateCabLanding;