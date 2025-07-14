import { DonationGoal } from '../types';

export const donationGoals: DonationGoal[] = [
  {
    id: '1',
    title: 'Temple Renovation',
    description: 'Help us renovate the main temple hall for better devotee experience',
    currentAmount: 75000,
    targetAmount: 150000,
    category: 'Infrastructure'
  },
  {
    id: '2',
    title: 'Free Meal Program',
    description: 'Support our daily free meal service for the community',
    currentAmount: 25000,
    targetAmount: 50000,
    category: 'Community Service'
  },
  {
    id: '3',
    title: 'Educational Scholarships',
    description: 'Provide scholarships for underprivileged children',
    currentAmount: 15000,
    targetAmount: 30000,
    category: 'Education'
  }
];