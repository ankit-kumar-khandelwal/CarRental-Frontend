import React from 'react';

interface CompanyInfo {
  name: string;
  description: string;
}

const Description: React.FC = () => {
  const companyInfo: CompanyInfo = {
    name: "Aaradhya Tour & Travel",
    description: "Aaradhya Tour and Travel - Your Trusted Travel Partner in Delhi Aaradhya Tour and Travel, based in the heart of Delhi, is your go-to solution for all travel needs within the bustling metropolis and beyond. Known for its reliability and affordability, Aaradhya Tour and Travel has established itself as a leader in the transportation sector. Whether you are a local resident, a business traveler, or a tourist exploring the historic sites of Delhi, Aaradhya Tour and Travel offers a range of services to cater to your specific requirements. From airport transfers to city tours, their fleet of well-maintained vehicles and professional drivers ensure a comfortable and safe journey. With a commitment to punctuality and customer satisfaction, Aaradhya Tour and Travel continues to set benchmarks in the travel industry. Experience seamless and stress-free travel with Aaradhya Tour and Travel, where every journey is a pleasant one."
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* About Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-center">
          About {companyInfo.name}
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          {companyInfo.description}
        </p>
      </div>
    </div>
  );
};

export default Description;