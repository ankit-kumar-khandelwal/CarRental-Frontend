import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface LuxuryCarData {
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

const LuxuryCarPage: React.FC = () => {
  const { carUrl } = useParams<{ carUrl: string }>();
  const [carData, setCarData] = useState<LuxuryCarData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setLoading(true);
        // Remove the leading slash if it exists
        const urlParam = carUrl?.startsWith('/') ? carUrl.substring(1) : carUrl;
        
        const response = await fetch(`http://localhost:3000/api/luxurycars/${urlParam}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch luxury car data');
        }
        
        const data = await response.json();
        setCarData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching luxury car data:', err);
        setError('Failed to load luxury car information. Please try again later.');
        setLoading(false);
      }
    };

    if (carUrl) {
      fetchCarData();
    }
  }, [carUrl]);

  if (loading) {
    return (
      <div>
        <div className="container mx-auto py-16 px-4 flex justify-center items-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#FFA500] border-r-transparent"></div>
            <p className="mt-4 text-lg">Loading luxury car information...</p>
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
            <button 
              onClick={() => window.location.href = '/luxury'}
              className="mt-6 bg-[#FFA500] hover:bg-[#FF8C00] text-white py-2 px-6 rounded-md transition-colors duration-200"
            >
              Go Back to Luxury Cars
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!carData) {
    return (
      <div>
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Luxury Car Not Found</h1>
            <p className="text-lg">The requested luxury car could not be found.</p>
            <button 
              onClick={() => window.location.href = '/luxury'}
              className="mt-6 bg-[#FFA500] hover:bg-[#FF8C00] text-white py-2 px-6 rounded-md transition-colors duration-200"
            >
              Go Back to Luxury Cars
            </button>
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
          <h1 className="text-4xl font-bold mb-6">{carData.title}</h1>
          <p className="text-lg text-gray-600">{carData.titleDescription}</p>
          <div className="w-24 h-1 bg-[#FFA500] mx-auto mt-8"></div>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-4">{carData.subTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {carData.subTitleDescription}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white py-3 px-8 rounded-md font-medium transition-colors duration-200">
                Book Now
              </button>
              <button className="bg-white border-2 border-[#FFA500] text-[#FFA500] hover:bg-gray-50 py-3 px-8 rounded-md font-medium transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img 
              src={carData.imageUrl} 
              alt={carData.title}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarPage;