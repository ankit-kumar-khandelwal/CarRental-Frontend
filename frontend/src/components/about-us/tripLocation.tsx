import React from 'react';
interface DestinationCard {
  title: string;
  description: string;
  imageSrc: string;
}

const destinations: DestinationCard[] = [
  {
    title: "Delhi to Musoorie car booking",
    description: "Musoorie is famous for adventure Sports like paragliding as well. Some of the best and polpular attractions to visit are Lake, Lal Tibba, Gun Hill, Kempty Falls etc.",
    imageSrc: ""
  },
  {
    title: "Delhi to Haridwar car booking",
    description: "Plan an amazing trip to Haridwar! Haridwar city is an ancient and it is one of the most sacred cities in India. Rent a taxi from Delhi to Haridwar and visit pilgrimage and to take a holy dip into the holy river Ganges.",
    imageSrc: "/api/placeholder/400/250"
  },
  {
    title: "Delhi to Jaisalmer car booking",
    description: "Book your Delhi to Jaisalmer car with us for a comfortable and hassle-free journey. Enjoy scenic views, reliable service, and competitive prices. Reserve now for a memorable road trip experience.",
    imageSrc: "/api/placeholder/400/250"
  },
  {
    title: "Delhi to Agra Taxi booking",
    description: "Agra is famous for Taj Mahal and it is known as Home to one of the 7 wonders of the world. You can book full day Delhi to Agra taxi service at best price and enjoy your trip.",
    imageSrc: "/api/placeholder/400/250"
  },
  {
    title: "Delhi to Jaipur car booking",
    description: "Jaipur is a major tourist attraction amongst Indian as well as international travellers. There are lots of places to visit in Jaipur are City Palace like Vidhan Sabha, Birla Temple and forts.",
    imageSrc: "/api/placeholder/400/250"
  },
  {
    title: "Delhi to Shimla car booking",
    description: "Shimla is famous for tourist attractions like Annandale, Jakhoo Hill, The Scandal Point, Chadwick Falls, and many more. So what you are waiting for rent a Delhi to Shimla taxi services.",
    imageSrc: "/api/placeholder/400/250"
  }
];

const TripLocation = () => {
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-400 text-center mb-2">
        Major trip locations
      </h1>
      <h2 className="text-xl text-center mb-8">
        Rent a Outstation Taxi in Delhi to Explore Some of the Popular Tourist Place
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-48">
              <img
                src={destination.imageSrc}
                alt={destination.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center space-x-4">
                  {/* Car icons representation */}
                  {/* <div className="flex -space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-8 bg-gray-200 rounded-md transform -translate-y-2"
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
              <p className="text-gray-600 text-sm">
                {destination.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripLocation;