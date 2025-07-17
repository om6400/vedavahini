import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Star, Check } from 'lucide-react';
import { poojaServices, categories } from '../data/poojaServices';
import { PoojaService } from '../types';

const PoojaBooking: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<PoojaService | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? poojaServices 
    : poojaServices.filter(service => service.category === selectedCategory);

  const handleBookService = (service: PoojaService) => {
    setSelectedService(service);
    // Here you would typically open a booking modal or navigate to booking page
    console.log('Booking service:', service.name);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-cream-100" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white text-3xl">🪔</span>
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Sacred Pooja Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our authentic spiritual services conducted by experienced and verified Brahmins
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-200 shadow-sm'
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
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-600 text-white rounded-full px-3 py-1">
                    <span className="text-lg font-bold">₹{service.price}</span>
                  </div>
                </div>

                {/* Om Symbol Overlay */}
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="text-3xl text-white">🕉</div>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.benefits.slice(0, 4).map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-1 text-xs text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Check className="h-3 w-3 text-orange-500" />
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  onClick={() => handleBookService(service)}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="h-4 w-4" />
                  Book Now
                </motion.button>
              </div>
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

export default PoojaBooking;