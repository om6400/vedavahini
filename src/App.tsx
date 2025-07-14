import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PoojaBooking from './components/PoojaBooking';
import BrahminDirectory from './components/BrahminDirectory';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FestivalsPage from './pages/FestivalsPage';
import FestivalDetailPage from './pages/FestivalDetailPage';
import FestivalCalendarSection from './FestivalCalendarSection';

function App() {
  return (
    <BrowserRouter>
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PoojaBooking />
                <BrahminDirectory />
                <ContactForm />
              </>
            } />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/festivals/:slug" element={<FestivalDetailPage />} />
            <Route path="/festival/:slug" element={<FestivalDetailPage />} />
            <Route path="/festival-calendar" element={<FestivalCalendarSection />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </BrowserRouter>
  );
}

export default App;