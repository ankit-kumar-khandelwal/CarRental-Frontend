import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube, 
  faPinterestP 
} from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  companyName?: string;
  designedBy?: string;
  startYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Aaradhya Tour and Travel",
  designedBy = "Ankit Khandelwal",
  startYear = 2016
}) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about-us' },
    { text: 'Rate List', href: '/rate-list' },
    { text: 'Contact Us', href: '/contact-us' },
    { text: 'Terms & Conditions', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Refund & Cancellation Policy', href: '/refund' }
  ];

  const socialLinks = [
    { icon: faFacebookF, href: '#', bgColor: 'bg-[#3b5998]', label: 'Facebook' },
    { icon: faInstagram, href: '#', bgColor: 'bg-[#e1306c]', label: 'Instagram' },
    { icon: faYoutube, href: '#', bgColor: 'bg-[#ff0000]', label: 'YouTube' },
    { icon: faPinterestP, href: '#', bgColor: 'bg-[#bd081c]', label: 'Pinterest' }
  ];

  const taxiRoutes = [
    [
      { text: 'Delhi to Agra Cab', href: '/delhi-to-agra' },
      { text: 'Delhi to Dehradun Cab', href: '/delhi-to-dehradun' },
      { text: 'Delhi to Mussoorie Cab', href: '/delhi-to-mussoorie' },
      { text: 'Delhi to Manali Cab', href: '/delhi-to-manali' },
      { text: 'Delhi to Shimla Cab', href: '/delhi-to-shimla' },
      { text: 'Delhi to Jaisalmer cab', href: '/delhi-to-jaisalmer' }
    ],
    [
      { text: 'Delhi to Jaipur Cab', href: '/delhi-to-jaipur' },
      { text: 'Delhi to Mathura', href: '/delhi-to-mathura' },
      { text: 'Tempo Traveller Delhi', href: '/tempo-traveller' },
      { text: 'char dham Taxi', href: '/char-dham' },
      { text: 'Delhi to Haridwar Cab', href: '/delhi-to-haridwar' },
      { text: 'delhi to dharamshala cab', href: '/delhi-to-dharamshala' }
    ],
    [
      { text: 'Delhi darshan cab', href: '/delhi-darshan' },
      { text: 'One way cab', href: '/one-way' },
      { text: 'chandigarh to Dharamshala Cab', href: '/chandigarh-to-dharamshala' },
      { text: 'Delhi to Amritsar cab', href: '/delhi-to-amritsar' },
      { text: 'Manali to chandigarh Cab', href: '/manali-to-chandigarh' },
      { text: 'Delhi to chandigarh cab', href: '/delhi-to-chandigarh' }
    ]
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-20">
        {/* Taxi Routes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {taxiRoutes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((route) => (
                <a
                  key={route.text}
                  href={route.href}
                  className="flex items-center hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="mr-2">➜</span>
                  {route.text}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {navigationLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`${social.bgColor} w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200`}
            >
              <FontAwesomeIcon icon={social.icon} className="text-white" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p>
            © {startYear}-{currentYear} {companyName}. Designed By {designedBy}
          </p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;