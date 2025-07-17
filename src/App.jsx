import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sermons from './pages/Sermons';
import Devotions from './pages/Devotions';
import About from './pages/About';
import Events from './pages/Events';
import PrayerRequests from './pages/PrayerRequests';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';
import Giving from './pages/Giving';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/devotions" element={<Devotions />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/prayer-requests" element={<PrayerRequests />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/giving" element={<Giving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;