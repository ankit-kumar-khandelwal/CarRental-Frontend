import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/navbar/header';
import Footer from './components/navbar/footer';
import { Contact, Home } from 'lucide-react';
import RateList from './components/pages/rateList';
import About from './components/pages/about';
import Homepage from './components/pages/home';
import ContactPage from './components/pages/contactUs';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
       <Header/>
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/rates" element={<RateList/>} />
          <Route path="/contact" element={<ContactPage/>} />
          
        </Routes>
        <Footer/>
   
      </div>
    </Router>
  );
}

export default App;