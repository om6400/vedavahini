import { useState, useEffect } from 'react';

export const useChantCounter = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('chantCount');
    return saved ? parseInt(saved) : 0;
  });

  const [dailyGoal] = useState(108); // Traditional 108 chants

  useEffect(() => {
    localStorage.setItem('chantCount', count.toString());
  }, [count]);

  const incrementCount = () => setCount(prev => prev + 1);
  const resetCount = () => setCount(0);

  const progress = Math.min((count / dailyGoal) * 100, 100);

  return { count, dailyGoal, progress, incrementCount, resetCount };
};