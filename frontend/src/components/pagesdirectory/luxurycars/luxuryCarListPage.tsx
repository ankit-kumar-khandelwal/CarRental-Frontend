import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LuxuryCar {
  _id: string;
  title: string;
  titleDescription: string;
  subTitle: string;
  subTitleDescription: string;
  imageUrl: string;
  id: string;
  name: string;
  url: string;
  createdAt: string;
  __v: number;
}

const LuxuryCarsListPage: React.FC = () => {
  const [luxuryCars, setLuxuryCars] = useState<LuxuryCar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLuxuryCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/luxurycars');
        
        if (!response.ok) {
          throw new Error('Failed to fetch luxury cars');
        }
        
        const data = await response.json();
        setLuxuryCars(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching luxury cars:', err);
        setError('Failed to load luxury cars. Please try again later.');
        setLoading(false);
      }
    };

    fetchLuxuryCars();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="container mx-auto py-16 px-4 flex justify-center items-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#FFA500] border-r-transparent"></div>
            <p className="mt-4 text-lg">Loading luxury cars...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-lg">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      
      {/* Main content */}
      <div className="container mx-auto py-16 px-4">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Luxury Fleet</h1>
          <p className="text-lg text-gray-600">
            Experience ultimate comfort and style with our premium selection of luxury vehicles
          </p>
          <div className="w-24 h-1 bg-[#FFA500] mx-auto mt-8"></div>
        </div>
        
        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryCars.map((car) => (
            <div key={car._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={car.imageUrl} 
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{car.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{car.titleDescription}</p>
                <Link 
                  to={car.url} 
                  className="inline-block bg-[#FFA500] hover:bg-[#FF8C00] text-white py-2 px-4 rounded-md transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarsListPage;