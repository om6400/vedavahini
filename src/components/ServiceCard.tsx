import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Calendar, Check } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onBook: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-saffron-100"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Service Image */}
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {service.isPopular && (
            <span className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Popular
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-saffron-700 px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-lg font-bold text-gray-800">₹{service.price}</span>
          </div>
        </div>

        {/* Om Symbol Overlay */}
        <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <div className="text-3xl text-white">🕉️</div>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-serif font-bold text-gray-800 group-hover:text-saffron-600 transition-colors">
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
                <Check className="h-3 w-3 text-saffron-500" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <motion.button
          onClick={() => onBook(service)}
          className="w-full bg-gradient-to-r from-saffron-600 to-gold-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Calendar className="h-4 w-4" />
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;