import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Languages, Award, Filter, CheckCircle, Users } from 'lucide-react';
import { brahmins, locations, countries } from '../data/brahmins';
import { Brahmin } from '../types';

const BrahminDirectory: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedBrahmin, setSelectedBrahmin] = useState<Brahmin | null>(null);

  const filteredBrahmins = brahmins.filter(brahmin => {
    const matchesLocation = selectedLocation === 'All' || brahmin.location === selectedLocation;
    const matchesCountry = selectedCountry === 'All' || brahmin.country === selectedCountry;
    return matchesLocation && matchesCountry;
  });

  const handleSelectBrahmin = (brahmin: Brahmin) => {
    setSelectedBrahmin(brahmin);
    console.log('Selected Brahmin:', brahmin.name);
  };

  return (
    <section className="py-20 bg-white" id="brahmins">
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
              <Users className="h-8 w-8 text-white" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Verified Brahmins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced and verified Brahmins for authentic spiritual ceremonies
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 border border-orange-200 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location} Location</option>
            ))}
          </select>

          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-4 py-2 border border-orange-200 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {countries.map(country => (
              <option key={country} value={country}>{country} Country</option>
            ))}
          </select>
        </motion.div>

        {/* Brahmins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrahmins.map((brahmin, index) => (
            <motion.div
              key={brahmin.id}
              className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Brahmin Info */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={brahmin.avatar}
                      alt={brahmin.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                    />
                    {brahmin.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {brahmin.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {brahmin.rating} ({brahmin.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{brahmin.location}, {brahmin.country}</span>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{brahmin.experience} years experience</span>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-600">{brahmin.languages.join(', ')}</span>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {brahmin.specialization.slice(0, 3).map((spec, index) => (
                      <span
                        key={index}
                        className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {brahmin.specialization.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{brahmin.specialization.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available:</h4>
                  <div className="flex gap-1">
                    {brahmin.availability.map((time, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Select Button */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-800">
                    ₹{brahmin.price}
                    <span className="text-sm font-normal text-gray-600">/service</span>
                  </div>
                  <motion.button
                    onClick={() => handleSelectBrahmin(brahmin)}
                    className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Select
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBrahmins.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-600 mb-4">
              No Brahmins found matching your criteria
            </p>
            <p className="text-gray-500">
              Please try adjusting your filters
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BrahminDirectory;