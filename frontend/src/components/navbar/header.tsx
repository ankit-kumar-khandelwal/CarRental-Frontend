import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';

interface TaxiService {
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taxiServices, setTaxiServices] = useState<TaxiService[]>([]);
  const [luxuryCars, setLuxuryCars] = useState<LuxuryCar[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const [taxiResponse, luxuryResponse] = await Promise.all([
          fetch('http://localhost:3000/api/taxiservices'),
          fetch('http://localhost:3000/api/luxurycars')
        ]);

        if (!taxiResponse.ok) {
          throw new Error('Taxi services API response not ok');
        }

        if (!luxuryResponse.ok) {
          throw new Error('Luxury cars API response not ok');
        }

        const taxiData = await taxiResponse.json();
        const luxuryData = await luxuryResponse.json();
        
        setTaxiServices(taxiData);
        setLuxuryCars(luxuryData);
      } catch (error) {
        console.warn('Failed to fetch menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const MenuItem: React.FC<{ href: string; children: React.ReactNode; items?: { url: string; name: string }[] }> = ({ href, children, items = [] }) => {
    const isDropdown = items && items.length > 0;
    
    return (
      <li className="relative">
        <div className="flex items-center">
          <a
            href={href}
            className="flex items-center gap-1 font-medium hover:text-[#FFA500] w-full py-2"
            onClick={(e) => {
              if (isDropdown) {
                e.preventDefault();
                toggleDropdown(href);
              }
            }}
          >
            {children}
            {isDropdown && <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === href ? 'rotate-180' : ''}`} />}
          </a>
        </div>
        
        {isDropdown && activeDropdown === href && (
          <ul className={`
            lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-48 lg:bg-white lg:shadow-lg lg:rounded-md lg:py-2 lg:z-50
            space-y-1 pl-4 lg:pl-0 mt-1 lg:mt-0 bg-gray-50 lg:bg-white rounded-md
          `}>
            {items.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FFA500] text-gray-600 rounded-md transition-colors duration-150"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="w-full">
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Top bar */}
      <div className="bg-black px-4 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div>
            <span className="text-[#FFA500]">
              Approved by Govt of India. Aaradhya Tour & Travel,{" "}
              <span className="font-semibold">No.1 Cab Company in India</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white">
            <a href="tel:+918368548255" className="flex items-center gap-1 hover:text-[#FFA500] transition-colors duration-150">
              <Phone className="h-4 w-4" />
              <span>+91 8368548255</span>
            </a>
            <a href="https://wa.me/917532981416" className="flex items-center gap-1 hover:text-[#FFA500] transition-colors duration-150">
              <MessageCircle className="h-4 w-4" />
              <span>+91 7532981416</span>
            </a>
            <a href="mailto:info@delhicarbooking.in" className="flex items-center gap-1 hover:text-[#FFA500] transition-colors duration-150">
              <Mail className="h-4 w-4" />
              <span>info@delhicarbooking.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b bg-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <img
              src="https://www.delhicarbooking.in/assets/img/logo-rentit.png"
              alt="Aaradhya Tour & Travel Logo"
              className="h-12 w-auto"
            />
          </a>
          
          {/* Hamburger menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-150"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <MenuItem href="/">HOME</MenuItem>
              <MenuItem href="/about">ABOUT US</MenuItem>
              <MenuItem href="/rates">RATE LIST</MenuItem>
              <MenuItem href="/places">TOURIST PLACES</MenuItem>
              <MenuItem 
                href="/taxi" 
                items={taxiServices.map(service => ({ url: `/taxi${service.url}`, name: service.name }))}
              >
                TAXI SERVICES
              </MenuItem>
              <MenuItem 
                href="/luxury" 
                items={luxuryCars.map(car => ({ url: `/luxury${car.url}`, name: car.name }))}
              >
                LUXURY CARS
              </MenuItem>
              <MenuItem href="/contact">CONTACT US</MenuItem>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className={`
            fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out z-50
            lg:hidden flex flex-col
          `}>
            <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <span className="font-semibold text-lg">Menu</span>
              <button
                className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-150"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {/* Navigation items */}
                <ul className="space-y-2">
                  <MenuItem href="/">HOME</MenuItem>
                  <MenuItem href="/about">ABOUT US</MenuItem>
                  <MenuItem href="/rates">RATE LIST</MenuItem>
                  <MenuItem href="/places">TOURIST PLACES</MenuItem>
                  <MenuItem 
                    href="/taxi" 
                    items={taxiServices.map(service => ({ url: `/taxi${service.url}`, name: service.name }))}
                  >
                    TAXI SERVICES
                  </MenuItem>
                  <MenuItem 
                    href="/luxury" 
                    items={luxuryCars.map(car => ({ url: `/luxury${car.url}`, name: car.name }))}
                  >
                    LUXURY CARS
                  </MenuItem>
                  <MenuItem href="/contact">CONTACT US</MenuItem>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;