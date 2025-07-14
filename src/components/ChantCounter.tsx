import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, RotateCcw, Target } from 'lucide-react';
import { useChantCounter } from '../hooks/useChantCounter';

const ChantCounter: React.FC = () => {
  const { count, dailyGoal, progress, incrementCount, resetCount } = useChantCounter();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-saffron-500 to-gold-500 rounded-2xl shadow-2xl p-4 text-white min-w-[200px]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-2xl">📿</div>
            <h3 className="font-serif font-bold">Daily Chants</h3>
          </div>
          
          {/* Progress Circle */}
          <div className="relative w-16 h-16 mx-auto mb-3">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - progress / 100) }}
                transition={{ duration: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">{count}</span>
            </div>
          </div>

          <div className="text-sm opacity-90 mb-3">
            Goal: {dailyGoal} • {progress.toFixed(0)}% Complete
          </div>
        </div>

        <div className="flex gap-2">
          <motion.button
            onClick={incrementCount}
            className="flex-1 bg-white/20 hover:bg-white/30 rounded-lg p-2 flex items-center justify-center gap-1 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">Chant</span>
          </motion.button>
          
          <motion.button
            onClick={resetCount}
            className="bg-white/20 hover:bg-white/30 rounded-lg p-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Achievement Animation */}
        <AnimatePresence>
          {progress >= 100 && (
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
            >
              🎉 Goal Achieved!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ChantCounter;