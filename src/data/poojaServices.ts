import { PoojaService } from '../types';

export const poojaServices: PoojaService[] = [
  {
    id: '1',
    name: 'Ganesha Puja',
    description: 'Remove obstacles and bring prosperity with Lord Ganesha\'s blessings',
    duration: '2-3 hours',
    price: 2100,
    image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Deity Worship',
    benefits: ['Removes obstacles', 'Brings prosperity', 'Enhances wisdom', 'Success in endeavors'],
    requirements: ['Flowers', 'Fruits', 'Sweets', 'Incense', 'Oil lamp']
  },
  {
    id: '2',
    name: 'Lakshmi Puja',
    description: 'Invoke wealth and abundance with Goddess Lakshmi\'s divine grace',
    duration: '2 hours',
    price: 2500,
    image: 'https://images.pexels.com/photos/6896166/pexels-photo-6896166.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Deity Worship',
    benefits: ['Attracts wealth', 'Financial stability', 'Material prosperity', 'Business success'],
    requirements: ['Lotus flowers', 'Gold coins', 'Rice', 'Turmeric', 'Vermillion']
  },
  {
    id: '3',
    name: 'Saraswati Puja',
    description: 'Seek knowledge and wisdom from Goddess Saraswati',
    duration: '1.5 hours',
    price: 1800,
    image: 'https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Deity Worship',
    benefits: ['Enhances knowledge', 'Academic success', 'Artistic abilities', 'Mental clarity'],
    requirements: ['White flowers', 'Books', 'Musical instruments', 'White cloth', 'Honey']
  },
  {
    id: '4',
    name: 'Griha Pravesh',
    description: 'Housewarming ceremony for new home blessings',
    duration: '3-4 hours',
    price: 5100,
    image: 'https://images.pexels.com/photos/8828599/pexels-photo-8828599.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Life Events',
    benefits: ['Home protection', 'Positive energy', 'Family harmony', 'Prosperity'],
    requirements: ['Kalash', 'Mango leaves', 'Coconut', 'Sacred thread', 'Havan materials']
  },
  {
    id: '5',
    name: 'Satyanarayan Puja',
    description: 'Complete worship for Lord Vishnu\'s blessings',
    duration: '2.5 hours',
    price: 2800,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Deity Worship',
    benefits: ['Overall well-being', 'Family harmony', 'Spiritual growth', 'Divine protection'],
    requirements: ['Banana leaves', 'Panchamrit', 'Prasad items', 'Sacred thread', 'Camphor']
  },
  {
    id: '6',
    name: 'Navgraha Puja',
    description: 'Planetary worship to balance cosmic energies',
    duration: '3 hours',
    price: 4200,
    image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Remedial',
    benefits: ['Planetary balance', 'Removes doshas', 'Health improvement', 'Career growth'],
    requirements: ['Nine grains', 'Colored flowers', 'Gemstones', 'Metal items', 'Special oils']
  }
];

export const categories = ['All', 'Deity Worship', 'Life Events', 'Remedial', 'Seasonal'];