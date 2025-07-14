import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Ganesha Puja',
    description: 'Remove obstacles and bring prosperity to your life with this sacred ritual.',
    price: 108,
    duration: '2 hours',
    image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Puja',
    benefits: ['Removes obstacles', 'Brings prosperity', 'Enhances wisdom', 'Spiritual protection'],
    isPopular: true
  },
  {
    id: '2',
    name: 'Lakshmi Puja',
    description: 'Invoke the blessings of Goddess Lakshmi for wealth and abundance.',
    price: 151,
    duration: '1.5 hours',
    image: 'https://images.pexels.com/photos/6896166/pexels-photo-6896166.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Puja',
    benefits: ['Attracts wealth', 'Brings abundance', 'Financial stability', 'Material prosperity']
  },
  {
    id: '3',
    name: 'Saraswati Puja',
    description: 'Seek the blessings of Goddess Saraswati for knowledge and wisdom.',
    price: 108,
    duration: '1.5 hours',
    image: 'https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Puja',
    benefits: ['Enhances knowledge', 'Improves learning', 'Artistic abilities', 'Mental clarity']
  },
  {
    id: '4',
    name: 'Hanuman Puja',
    description: 'Gain strength, courage, and protection through Lord Hanuman\'s blessings.',
    price: 108,
    duration: '1 hour',
    image: 'https://images.pexels.com/photos/8828599/pexels-photo-8828599.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Puja',
    benefits: ['Increases strength', 'Provides protection', 'Builds courage', 'Removes fear']
  },
  {
    id: '5',
    name: 'Meditation Session',
    description: 'Guided meditation for inner peace and spiritual awakening.',
    price: 51,
    duration: '1 hour',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Meditation',
    benefits: ['Inner peace', 'Stress relief', 'Mental clarity', 'Spiritual growth']
  },
  {
    id: '6',
    name: 'Yoga Class',
    description: 'Traditional yoga practice for physical and spiritual well-being.',
    price: 31,
    duration: '1.5 hours',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Yoga',
    benefits: ['Physical fitness', 'Flexibility', 'Mental balance', 'Spiritual alignment']
  }
];

export const categories = ['All', 'Puja', 'Meditation', 'Yoga', 'Ceremonies'];