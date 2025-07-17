import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Gift } from 'lucide-react';
import { donationGoals } from '../data/donations';

const DonationSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState(donationGoals[0]);
  const [donationAmount, setDonationAmount] = useState(108);

  const predefinedAmounts = [51, 108, 251, 501, 1001];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron-600 via-gold-600 to-saffron-700 relative overflow-hidden" id="donations">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              🕉️
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="p-4 bg-white/20 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="h-8 w-8 text-white" />
            </motion.div>
          </div>

          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Support Our Sacred Mission
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your generous donations help us serve the community and maintain our spiritual sanctuary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Goals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Current Goals</h3>
            <div className="space-y-4">
              {donationGoals.map((goal) => (
                <motion.div
                  key={goal.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedGoal.id === goal.id
                      ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
                  }`}
                  onClick={() => setSelectedGoal(goal)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{goal.title}</h4>
                    <span className="text-white/80 text-sm">{goal.category}</span>
                  </div>
                  <p className="text-white/80 text-sm mb-3">{goal.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-white/80 mb-1">
                      <span>₹{goal.currentAmount.toLocaleString()}</span>
                      <span>₹{goal.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className="bg-white rounded-full h-2"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercentage(goal.currentAmount, goal.targetAmount)}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-white font-semibold">
                      {getProgressPercentage(goal.currentAmount, goal.targetAmount).toFixed(1)}% Complete
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Make a Donation</h3>
            
            <div className="mb-6">
              <label className="block text-white/90 text-sm font-medium mb-3">
                Select Amount (₹)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`p-3 rounded-lg font-semibold transition-all duration-200 ${
                      donationAmount === amount
                        ? 'bg-white text-saffron-600'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ₹{amount}
                  </motion.button>
                ))}
              </div>
              
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter custom amount"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white/90 text-sm font-medium mb-3">
                Donation Purpose
              </label>
              <select
                className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                value={selectedGoal.id}
                onChange={(e) => {
                  const goal = donationGoals.find(g => g.id === e.target.value);
                  if (goal) setSelectedGoal(goal);
                }}
              >
                {donationGoals.map((goal) => (
                  <option key={goal.id} value={goal.id} className="text-gray-800">
                    {goal.title}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              className="w-full bg-white text-saffron-600 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gift className="h-5 w-5" />
              Donate ₹{donationAmount}
            </motion.button>

            <p className="text-white/70 text-sm text-center mt-4">
              Your donation is secure and helps support our community services
            </p>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { icon: Users, number: '5,000+', label: 'People Served' },
            { icon: Heart, number: '₹10L+', label: 'Donations Received' },
            { icon: Target, number: '15', label: 'Projects Completed' },
            { icon: Gift, number: '1,000+', label: 'Meals Provided' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;