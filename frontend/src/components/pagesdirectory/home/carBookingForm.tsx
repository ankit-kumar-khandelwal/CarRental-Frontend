import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const TripTypes = {
  ONE_WAY: 'one-way',
  ROUND_TRIP: 'round-trip',
  LOCAL_DELHI: 'local-delhi',
  LUXURY_CARS: 'luxury-cars',
} as const;

type TripType = typeof TripTypes[keyof typeof TripTypes];

const CarBookingForm = () => {
  const [tripType, setTripType] = React.useState<TripType>(TripTypes.ONE_WAY);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="https://www.delhicarbooking.in/assets/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-5" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-end">
        <Card className="w-full max-w-2xl p-6 bg-white/95 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Search for Cheap Rental Cars Wherever You Are
          </h2>

          <form className="space-y-6">
            {/* Trip Type */}
            <div className="space-y-3">
              <Label className="text-base">Trip Type</Label>
              <RadioGroup
                defaultValue={tripType}
                onValueChange={(value) => setTripType(value as TripType)}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TripTypes.ONE_WAY} id="one-way" />
                  <Label htmlFor="one-way">One way</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TripTypes.ROUND_TRIP} id="round-trip" />
                  <Label htmlFor="round-trip">Round trip</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TripTypes.LOCAL_DELHI} id="local-delhi" />
                  <Label htmlFor="local-delhi">Local Delhi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TripTypes.LUXURY_CARS} id="luxury-cars" />
                  <Label htmlFor="luxury-cars">Luxury cars</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Locations */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pickup">Picking Up Location</Label>
                <Input
                  id="pickup"
                  placeholder="Enter a location"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drop">Drop Location</Label>
                <Input
                  id="drop"
                  placeholder="Enter a location"
                  className="w-full"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Picking Up Date</Label>
                <Input
                  id="pickup-date"
                  type="date"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drop-date">Dropping off Date</Label>
                <Input
                  id="drop-date"
                  type="date"
                  className="w-full"
                />
              </div>
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="pickup-time">Pickup Time</Label>
              <Input
                id="pickup-time"
                type="time"
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg"
            >
              FIND CAR
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CarBookingForm;