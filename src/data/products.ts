import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2799,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Laptops',
    description: 'The most powerful MacBook Pro ever with M2 Max chip.',
    features: ['M2 Max Chip', '32GB RAM', '1TB SSD', '16-inch Display'],
    rating: 4.9,
    reviews: 1247,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartphones',
    description: 'Revolutionary iPhone with titanium design and A17 Pro chip.',
    features: ['A17 Pro Chip', '128GB Storage', 'Pro Camera System', '6.1-inch Display'],
    rating: 4.8,
    reviews: 2156,
    inStock: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'AirPods Pro',
    price: 249,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Audio',
    description: 'Immersive audio experience with Active Noise Cancellation.',
    features: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe Case', '6 Hours Battery'],
    rating: 4.7,
    reviews: 892,
    inStock: true
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    price: 1099,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tablets',
    description: 'Ultimate iPad experience with M2 chip and Liquid Retina display.',
    features: ['M2 Chip', '128GB Storage', '12.9-inch Display', 'Apple Pencil Support'],
    rating: 4.6,
    reviews: 634,
    inStock: true
  },
  {
    id: '5',
    name: 'Apple Watch Ultra',
    price: 799,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wearables',
    description: 'The most rugged and capable Apple Watch ever.',
    features: ['49mm Titanium Case', 'GPS + Cellular', '60-Hour Battery', 'Water Resistant'],
    rating: 4.8,
    reviews: 445,
    inStock: true,
    isNew: true
  },
  {
    id: '6',
    name: 'Mac Studio',
    price: 1999,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desktops',
    description: 'Compact powerhouse with M2 Ultra chip for professionals.',
    features: ['M2 Ultra Chip', '64GB RAM', '1TB SSD', 'Thunderbolt 4'],
    rating: 4.9,
    reviews: 298,
    inStock: false
  }
];

export const categories = [
  'All',
  'Laptops',
  'Smartphones',
  'Audio',
  'Tablets',
  'Wearables',
  'Desktops'
];