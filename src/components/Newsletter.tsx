import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, BookOpen } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-saffron-50 to-gold-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="p-4 bg-gradient-to-br from-saffron-500 to-gold-500 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen className="h-8 w-8 text-white" />
            </motion.div>
          </div>

          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Daily Spiritual Wisdom
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Receive daily mantras, spiritual insights, and temple updates 
            delivered to your inbox every morning
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for daily blessings"
                  className="w-full pl-10 pr-4 py-4 bg-white border-2 border-saffron-200 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent shadow-lg"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-saffron-600 to-gold-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </motion.form>

          {isSubmitted && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-800 font-medium">
                  🙏 Thank you! Your spiritual journey begins tomorrow morning.
                </p>
              </div>
            </motion.div>
          )}

          <div className="text-gray-500 text-sm mb-8">
            <p>Join 25,000+ devotees • Daily mantras • Temple updates • Unsubscribe anytime</p>
          </div>

          {/* What You'll Receive */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: '📿',
                title: 'Daily Mantras',
                description: 'Sacred chants and their meanings'
              },
              {
                icon: '🕉️',
                title: 'Spiritual Wisdom',
                description: 'Ancient teachings for modern life'
              },
              {
                icon: '🎉',
                title: 'Event Updates',
                description: 'First to know about celebrations'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;