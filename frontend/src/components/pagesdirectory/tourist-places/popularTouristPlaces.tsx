import React, { useState } from 'react';

// Define types for our tourism data
interface TouristPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'spiritual' | 'nature' | 'adventure' | 'historical' | 'cultural';
}

interface RegionGroup {
  region: string;
  places: TouristPlace[];
}

const PopularTouristPlaces: React.FC = () => {
  // Sample data based on the images provided
  const touristPlaces: TouristPlace[] = [
    {
      id: 'rishikesh',
      name: 'Rishikesh Tour',
      description: 'Rishikesh is town in the Dehradun District of Uttarakhand state in India. Total population of Rishikesh is 75,020 (53% male and 47% female) as of 2001. Rishikesh is situated at 409 meters above sea level in the foothill.',
      image: '/api/placeholder/400/300',
      category: 'spiritual'
    },
    {
      id: 'dharamshala',
      name: 'Romantic Place Dharamshala',
      description: 'It is a beautiful city of Himachal Pradesh in India. The former name of Dharamshala was Bhagsu. Dharamshala houses the Dalai Lamas residence also the Central Tibetan Administration.',
      image: '/api/placeholder/400/300',
      category: 'nature'
    },
    {
      id: 'tajmahal',
      name: 'Wonder of world Taj Mahal',
      description: 'The Taj Mahal of Agra is one of the Seven Wonders of the World, for reasons more than just looking magnificent. Its the history of Taj Mahal that adds a soul to its magnificence: a soul that is filled with love, loss, remorse, and love again.',
      image: '/api/placeholder/400/300',
      category: 'historical'
    },
    {
      id: 'mehandipur',
      name: 'Mehandipur Balaji',
      description: 'The temple of Balaji built in mehandipur is very famous especially in northern part of india. The first mahant of the temple was shri ganeshpuriji maharaj and the present mahant of the temple.',
      image: '/api/placeholder/400/300',
      category: 'spiritual'
    },
    {
      id: 'mussoorie',
      name: 'Mussoorie Tour',
      description: 'Mussoorie, the proverbial Queen of Hill stations, as professed by the British gentry who evaded hot, desultory summers of Delhi and Kolkata by spending time here. Being at an average altitude of 2,000 metres (6,600 ft), Mussoorie.',
      image: '/api/placeholder/400/300',
      category: 'nature'
    },
    {
      id: 'jaipur',
      name: 'Pink city of india jaipur',
      description: 'Jaipur was founded on 18th November 1727 by Maharaja Sawai Jai Singh II, a Kachawaha Rajput, who ruled from 1699-1744. Initially his capital was Amber (now pronounced as Amer), lies at a distance of 11 km from Jaipur.',
      image: '/api/placeholder/400/300',
      category: 'historical'
    },
    {
      id: 'mathura',
      name: 'Krishna Temples Mathura',
      description: 'Shri Krishna Janmbhoomi is a religious temple in Mathura, Uttar Pradesh. The temple is built around the prison cell where the ancient Hindu god Lord Krishna is said to have been born.',
      image: '/api/placeholder/400/300',
      category: 'spiritual'
    },
    {
      id: 'ladakh',
      name: 'Leh Ladakh Tour',
      description: 'We, discover Ladakh Adventure Tours & Travel based in Leh Ladakh is a certified Travel Company, recognized by Jammu & Kashmir Tourism department. welcome you to visit this beautiful part of India. Geographically surrounded.',
      image: '/api/placeholder/400/300',
      category: 'adventure'
    },
    {
      id: 'manali',
      name: 'Manali Hill Station',
      description: 'When sound of exhilaration seems to be coming far above from sky and only colorful para-gliders could be spotted above head, the site is most probably Solang Valley of Manali Hill Station, which has a uniqueness that stands.',
      image: '/api/placeholder/400/300',
      category: 'adventure'
    },
    {
      id: 'jimcorbett',
      name: 'Famous wildlife Jim Corbett',
      description: 'Jim Corbett National Park, which is a part of the larger Corbett Tiger Reserve, a Project Tiger Reserve lies in the Nainital district of Uttarakhand. The magical landscape of Corbett is well known and.',
      image: '/api/placeholder/400/300',
      category: 'nature'
    },
    {
      id: 'haridwar',
      name: 'Haridwar',
      description: 'Haridwar is the place where people from across the India visit for pilgrimage and to take a holy dip into the holy river Ganges. Haridwar city is an ancient and it is one of the most sacred cities in India. The diverse nature of the Hindu.',
      image: '/api/placeholder/400/300',
      category: 'spiritual'
    },
    {
      id: 'vaishno-devi',
      name: 'Jammu Katra Vaishno Devi',
      description: 'It is very difficult, like any other old shrines, to trace back the history of Vaishno Devi; however geological studies indicate that the holy shrine of Vaishno Devi is almost a million years old.',
      image: '/api/placeholder/400/300',
      category: 'spiritual'
    }
  ];

  // Group tourist places by region
  const regions: RegionGroup[] = [
    { region: 'North India', places: touristPlaces.filter(place => ['rishikesh', 'haridwar', 'vaishno-devi', 'mathura'].includes(place.id)) },
    { region: 'Rajasthan', places: touristPlaces.filter(place => ['jaipur'].includes(place.id)) },
    { region: 'Himachal & Uttarakhand', places: touristPlaces.filter(place => ['dharamshala', 'mussoorie', 'manali'].includes(place.id)) },
    { region: 'Wildlife & Adventure', places: touristPlaces.filter(place => ['jimcorbett', 'ladakh'].includes(place.id)) },
    { region: 'Historical', places: touristPlaces.filter(place => ['tajmahal'].includes(place.id)) }
  ];

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter places based on category and search term
  const filteredPlaces = selectedCategory === 'all' 
    ? touristPlaces 
    : touristPlaces.filter(place => place.category === selectedCategory);

  const searchFilteredPlaces = searchTerm 
    ? filteredPlaces.filter(place => 
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        place.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredPlaces;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-500 mb-2">Popular Tourist Places in India</h1>
        <p className="text-lg text-gray-700">We have full cab booking services on most popular tourist places</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap space-x-2">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'all' ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('spiritual')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'spiritual' ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
          >
            Spiritual
          </button>
          <button 
            onClick={() => setSelectedCategory('nature')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'nature' ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
          >
            Nature
          </button>
          <button 
            onClick={() => setSelectedCategory('adventure')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'adventure' ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
          >
            Adventure
          </button>
          <button 
            onClick={() => setSelectedCategory('historical')}
            className={`px-4 py-2 rounded-md ${selectedCategory === 'historical' ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
          >
            Historical
          </button>
        </div>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search places..."
            className="w-full md:w-64 px-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchFilteredPlaces.map((place) => (
          <div key={place.id} className="border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-amber-500">{place.name}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">{place.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                  {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
                </span>
                <button className="px-4 py-1 bg-amber-500 text-white rounded-md text-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* If no results found */}
      {searchFilteredPlaces.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No tourist places found matching your criteria.</p>
          <button 
            onClick={() => {setSelectedCategory('all'); setSearchTerm('');}}
            className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-md"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Region-based exploration */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Region</h2>
        {regions.map((regionGroup) => (
          <div key={regionGroup.region} className="mb-10">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">{regionGroup.region}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {regionGroup.places.slice(0, 3).map((place) => (
                <div key={place.id} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-amber-50 transition-colors">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{place.name}</h4>
                    <p className="text-xs text-gray-500 line-clamp-1">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="bg-amber-50 rounded-lg p-8 mt-12 text-center">
        <h2 className="text-2xl font-bold text-amber-600 mb-4">Plan Your Dream India Tour</h2>
        <p className="text-gray-600 mb-6">Discover the beauty, culture, and spirituality of India with our customized tour packages</p>
        <button className="px-8 py-3 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PopularTouristPlaces;