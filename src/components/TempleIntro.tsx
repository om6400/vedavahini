import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, Award } from 'lucide-react';

const TempleIntro: React.FC = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Devotees Served' },
    { icon: Clock, number: '25+', label: 'Years of Service' },
    { icon: Heart, number: '500+', label: 'Pujas Conducted' },
    { icon: Award, number: '50+', label: 'Community Events' }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Temple Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/20 to-transparent" />
            </div>
            
            {/* Floating Om Symbol */}
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-saffron-500 to-gold-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🕉️
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              A Sacred Space for
              <span className="block text-saffron-600">Spiritual Growth</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, Shanti Temple has been a beacon of peace and spirituality 
              in our community. We offer authentic Hindu rituals, meditation practices, 
              and spiritual guidance to help you connect with the divine.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced priests and spiritual teachers are dedicated to preserving 
              ancient traditions while making them accessible to modern devotees. 
              Whether you seek blessings, peace, or spiritual growth, you'll find a 
              welcoming home here.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Authentic Rituals',
                'Experienced Priests',
                'Community Events',
                'Spiritual Guidance'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-saffron-500 rounded-full" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-saffron-600 to-gold-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-saffron-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-saffron-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TempleIntro;