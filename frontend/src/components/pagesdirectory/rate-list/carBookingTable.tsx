import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Define the type for a single booking entry
interface CarBooking {
  id: number;
  tripFrom: string;
  tripTo: string;
  price: number;
  vehicleName: string;
  vehicleImage: string;
}

// Props interface for the component
interface CarBookingTableProps {
  apiUrl?: string;  // Make URL optional
  useStaticData?: boolean; // Add flag to use static data
}

// Static test data
const staticBookings: CarBooking[] = [
  {
    id: 1,
    tripFrom: "Dehradun",
    tripTo: "Delhi",
    price: 4200,
    vehicleName: "Swift Dzire CNG (4+1)",
    vehicleImage: "/api/placeholder/150/100" // Using placeholder for demo
  },
  {
    id: 2,
    tripFrom: "Delhi",
    tripTo: "Agra",
    price: 3500,
    vehicleName: "Toyota Innova (6+1)",
    vehicleImage: "/api/placeholder/150/100"
  },
  {
    id: 3,
    tripFrom: "Noida",
    tripTo: "Jaipur",
    price: 5600,
    vehicleName: "Honda City (4+1)",
    vehicleImage: "/api/placeholder/150/100"
  },
  {
    id: 4,
    tripFrom: "Gurgaon",
    tripTo: "Chandigarh",
    price: 4800,
    vehicleName: "Maruti Ertiga (6+1)",
    vehicleImage: "/api/placeholder/150/100"
  }
];

const CarBookingTable: React.FC<CarBookingTableProps> = ({ 
  apiUrl, 
  useStaticData = true // Default to static data
}) => {
  const [bookings, setBookings] = useState<CarBooking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (useStaticData) {
          // Use static data with a small delay to simulate API call
          setTimeout(() => {
            setBookings(staticBookings);
            setIsLoading(false);
          }, 500);
          return;
        }

        if (!apiUrl) {
          throw new Error('API URL is required when not using static data');
        }

        setIsLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch booking data');
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [apiUrl, useStaticData]);

  const handleBooking = (bookingId: number) => {
    console.log(`Booking requested for ID: ${bookingId}`);
    // Implement booking logic here
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-center text-orange-500">
          Our Prices
        </CardTitle>
        <p className="text-center text-gray-600 mt-2">
          Here is the our affordable rate list from Delhi and from other major locations.
        </p>
      </CardHeader>
      <CardContent>
        <div className="mt-4">
          <p className="text-gray-700 mb-6">
            Delhi Car Booking offers customized tour services to our customer as per their exact needs. 
            We have a variety of options that can enhance customer's experience, always according to 
            their necessities, and help them to get the best out of your holidays or your business trip.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">#</th>
                  <th className="p-3 text-left border">Trip From</th>
                  <th className="p-3 text-left border">Trip To</th>
                  <th className="p-3 text-left border">Price</th>
                  <th className="p-3 text-left border">Vehicle Name</th>
                  <th className="p-3 text-left border">Vehicle Image</th>
                  <th className="p-3 text-left border">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{index + 1}</td>
                    <td className="p-3 border">{booking.tripFrom}</td>
                    <td className="p-3 border">{booking.tripTo}</td>
                    <td className="p-3 border">Rs. {booking.price.toLocaleString()}</td>
                    <td className="p-3 border">{booking.vehicleName}</td>
                    <td className="p-3 border">
                      <img 
                        src={booking.vehicleImage} 
                        alt={booking.vehicleName}
                        className="w-24 h-auto object-contain"
                      />
                    </td>
                    <td className="p-3 border">
                      <button 
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                        onClick={() => handleBooking(booking.id)}
                      >
                        BOOK NOW
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarBookingTable;