import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MandalaShader from './MandalaShader';
import FestivalCalendarSection from "./FestivalCalendarSection";

const Footer: React.FC = () => {
  const footerLinks = {
    'Services': [
      'Ganesha Puja',
      'Lakshmi Puja',
      'Griha Pravesh',
      'Satyanarayan Puja',
      'Navgraha Puja',
      'Personalized Pooja',
      'Online Pooja via Zoom'
    ],
    'For Brahmins': [
      'Register as Brahmin',
      'Brahmin Guidelines',
      'Verification Process',
      'Earnings',
      'Support'
    ],
    'For Devotees': [
      'Vedic Calendar',
      'Pooja Wishlist',
      'Festival Reminders',
      'Spiritual Tips'
    ],
    'Support': [
      'Help Center',
      'Booking Support',
      'Payment Issues',
      'Cancellation',
      'Refunds'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="relative overflow-hidden font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <MandalaShader />
      {/* Lotus Particles Background */}
      <Particles
        id="tsparticles"
        init={async (main) => {
          // @ts-ignore
          await loadFull(main);
        }}
        options={{
          background: { color: "#1f2937" },
          fullScreen: { enable: false },
          fpsLimit: 30,
          particles: {
            number: { value: 20 },
            shape: {
              type: "image",
              image: {
                src: "/lotus.png", // Use a traditional petal or diya image
                width: 20,
                height: 20,
              },
            },
            move: { enable: true, speed: 0.3, direction: "top", outMode: "out" },
            opacity: { value: 0.5 },
            size: { value: 16 },
          },
        }}
        className="absolute inset-0 z-0"
      />
      {/* 🕉 Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            🕉
          </div>
        ))}
      </div>

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Branding Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4 space-x-3">
                <img
                  src="https://i.ibb.co/Q3gsYv17/Chat-GPT-Image-Jul-12-2025-10-17-11-AM.png"
                  alt="VedaVahini Logo"
                  className="object-contain w-12 h-12"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                    VedaVahini
                  </h3>
                  <p className="text-xs text-gray-400">Sacred Booking Platform</p>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-gray-300">
                Book trusted Brahmins for poojas with devotion and Vedic precision. Honoring tradition through seamless digital service.
              </p>

              <div className="mb-6 space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>123 Spiritual Lane, Sacred City, India 110001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>info@vedavahini.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-orange-300">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-orange-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div
            className="mt-8 lg:col-span-2 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="mb-3 text-lg font-semibold text-orange-300">Stay Connected</h4>
            <p className="mb-4 text-sm text-gray-400">
              Receive updates on sacred festivals, auspicious dates & new features.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white transition bg-orange-500 rounded-md hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-700 md:flex-row">
          <motion.p
            className="mb-4 text-sm text-gray-400 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © 2024 VedaVahini. Crafted with devotion in Bharat.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`text-gray-400 ${color} transition-colors`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Blessing Quote */}
        <motion.div
          className="pt-8 mt-10 text-center border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-serif text-lg italic text-orange-300">
            “ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर् मा अमृतं गमय॥”
          </p>
          <p className="mt-2 text-sm italic text-gray-400">
            Lead me from falsehood to truth, from darkness to light, from death to immortality.
          </p>
        </motion.div>
      </div>

      <FestivalCalendarSection />
    </footer>
  );
};

export default Footer;