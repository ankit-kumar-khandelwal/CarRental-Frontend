import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, User, Users, Lock } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="transition-colors duration-300 hover:bg-black group">
      <CardHeader className="space-y-4 text-center">
        <div className="w-16 h-16 mx-auto text-orange-500 group-hover:text-white">
          {icon}
        </div>
        <CardTitle className="group-hover:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600 group-hover:text-white">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: <Car size={64} />,
      title: "WELL MAINTAINED & CLEAN CARS",
      description: "Wide range of well maintained & clean cars."
    },
    {
      icon: <User size={64} />,
      title: "HIGHLY TRAINED DRIVERS",
      description: "Drivers are verified & well Trained for Driver on Highway & Hills."
    },
    {
      icon: <Users size={64} />,
      title: "CLIENT SATISFACTION",
      description: "Provide best routes, price and services for 100% client satisfaction."
    },
    {
      icon: <Lock size={64} />,
      title: "PRIVACY & FREEDOM",
      description: "Make every moment count with the privacy and freedom of having own car."
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;