import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Phone, MessageSquare, Facebook, Mail, MapPin } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

const ContactDescription: React.FC = () => {
  const contactDetails: ContactInfo[] = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Registered Address",
      details: [
        "RZ-B-111, Gali Number 9, New Delhi,",
        "Delhi 110045"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Office Address",
      details: [
        "Plot No- 58 First floor and Second Floor,",
        "Block-B KH No. 14/8 Main Road",
        "Sitapuri Dabri New Delhi 110045"
      ],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telephone",
      details: [
        "+91 8368548255",
        "+91 7532981416",
        "+91 1144787924"
      ],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["+91 7532981416"],
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  const ContactInfoItem: React.FC<{ info: ContactInfo }> = ({ info }) => (
    <div className="flex items-start p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`${info.color} p-4 rounded-full mr-4`}>
        {info.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {info.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {info.details.map((detail, index) => (
            <React.Fragment key={index}>
              {detail}
              {index < info.details.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full mb-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Here is our affordable rate list from Delhi and other major locations.
        </p>
      </div>

      {/* Description Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-center">
          Delhi Car Booking is dedicated to providing customized tour services tailored to our customers' exact needs. 
          We understand that every traveler is unique, and their preferences and requirements can vary significantly. 
          Whether you're planning a leisurely holiday or a business trip, we are here to ensure that you get the most out of your journey.
        </p>
      </div>

      {/* Contact Information Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {contactDetails.map((info, index) => (
          <ContactInfoItem key={index} info={info} />
        ))}
      </div>

      {/* Social Media Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Follow Us On Social Media</h3>
        <div className="flex justify-center space-x-4">
          <a 
            href="#" 
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Bottom Border Design */}
      <div className="flex justify-center mt-12">
        <div className="w-16 h-1 bg-orange-500 rounded-full mx-1"></div>
        <div className="w-4 h-1 bg-orange-300 rounded-full mx-1"></div>
        <div className="w-4 h-1 bg-orange-200 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default ContactDescription;