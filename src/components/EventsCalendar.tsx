import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { events } from '../data/events';

const EventsCalendar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const eventCategories = ['All', 'Festival', 'Satsang', 'Workshop', 'Retreat'];
  
  const filteredEvents = selectedFilter === 'All' 
    ? events 
    : events.filter(event => event.category === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Upcoming Events & Celebrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for spiritual gatherings, festivals, and community events
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {eventCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-saffron-600 to-gold-600 text-white shadow-lg'
                  : 'bg-saffron-50 text-saffron-700 hover:bg-saffron-100 border border-saffron-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="h-4 w-4" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-gradient-to-br from-white to-saffron-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-saffron-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-saffron-700 px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-serif font-bold mb-1">{event.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-saffron-600" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4 text-saffron-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4 text-saffron-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-saffron-600 to-gold-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register for Event
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Events */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-600 mb-4">
              No events found in this category
            </p>
            <p className="text-gray-500">
              Please check back later or select a different category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;