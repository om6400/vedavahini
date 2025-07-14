import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import { services, categories } from '../data/services';

const ServicesGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    // Here you would typically open a booking modal or navigate to booking page
    console.log('Booking service:', service.name);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron-50 to-gold-50" id="bookings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Sacred Services & Rituals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our authentic spiritual services conducted by experienced priests
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-saffron-600 to-gold-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-saffron-50 border border-saffron-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                service={service}
                onBook={handleBookService}
              />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-600 mb-4">
              No services found in this category
            </p>
            <p className="text-gray-500">
              Please try selecting a different category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;