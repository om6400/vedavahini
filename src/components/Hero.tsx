import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Heart } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-cream-50 to-orange-100" id="home">
      {/* Lotus Particles Background */}
      <Particles
        id="lotus-particles"
        init={async (main) => {
          // @ts-ignore
          await loadFull(main);
        }}
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false },
          fpsLimit: 30,
          particles: {
            number: { value: 18 },
            shape: {
              type: "image",
              image: {
                src: "/lotus.png",
                width: 24,
                height: 24,
              },
            },
            move: { enable: true, speed: 0.4, direction: "top", outMode: "out" },
            opacity: { value: 0.5 },
            size: { value: 18 },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-orange-300/20 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Om Symbols */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-200/40 text-4xl"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            🕉
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large Om Symbol */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="text-8xl md:text-9xl mb-4"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🕉
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              textShadow: "0 0 16px #fbbf24, 0 0 32px #f59e42",
            }}
          >
            Welcome to
            <motion.span
              className="block bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                filter: "drop-shadow(0 0 8px #fbbf24)",
              }}
            >
              VedaVahini
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            May all beings be happy and free from suffering
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Connect with verified Brahmins for authentic spiritual ceremonies and pujas. 
            Experience the divine through traditional rituals performed with devotion and precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book a Pooja
            </motion.button>

            <motion.button
              className="group bg-white/80 backdrop-blur-sm border-2 border-orange-200 text-orange-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Find Brahmins
            </motion.button>

            <motion.button
              className="group bg-white/80 backdrop-blur-sm border-2 border-orange-200 text-orange-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-5 w-5 group-hover:bounce transition-transform" />
              Donate
            </motion.button>

            <motion.button
              className="group bg-gradient-to-r from-orange-500 to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 border-2 border-orange-300"
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 0 24px #fbbf24" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/festival-calendar')}
            >
              <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Festival Calendar
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Namaste Hands */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-20 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          🙏
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;