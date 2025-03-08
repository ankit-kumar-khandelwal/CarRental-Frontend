import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/navbar/header';
import Footer from './components/navbar/footer';
import RateList from './components/pages/rateList';
import About from './components/pages/about';
import Homepage from './components/pages/home';
import ContactPage from './components/pages/contactUs';
import PopularTouristPlaces from './components/pagesdirectory/tourist-places/popularTouristPlaces';
import TaxiServicePage from './components/pagesdirectory/taxiServices/taxiServicePage';
import LuxuryCarPage from './components/pagesdirectory/luxurycars/luxuryCarPage';
import LuxuryCarsListPage from './components/pagesdirectory/luxurycars/luxuryCarListPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/rates" element={<RateList />} />
            <Route path="/places" element={<PopularTouristPlaces />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Taxi service routes */}
            <Route path="/taxi/:serviceUrl" element={<TaxiServicePage />} />
            
            {/* Luxury car routes */}
            <Route path="/luxury" element={<LuxuryCarsListPage />} />
            <Route path="/luxury/:carUrl" element={<LuxuryCarPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;