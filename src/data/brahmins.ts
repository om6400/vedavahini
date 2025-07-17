import { Brahmin } from '../types';

export const brahmins: Brahmin[] = [
  {
    id: '1',
    name: 'Pandit Rajesh Sharma',
    specialization: ['Ganesha Puja', 'Lakshmi Puja', 'Griha Pravesh'],
    experience: 15,
    location: 'Mumbai',
    country: 'India',
    rating: 4.9,
    reviews: 234,
    languages: ['Hindi', 'English', 'Marathi'],
    price: 2100,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Morning', 'Evening']
  },
  {
    id: '2',
    name: 'Pandit Suresh Kumar',
    specialization: ['Satyanarayan Puja', 'Navgraha Puja', 'Saraswati Puja'],
    experience: 22,
    location: 'Delhi',
    country: 'India',
    rating: 4.8,
    reviews: 189,
    languages: ['Hindi', 'English', 'Sanskrit'],
    price: 2500,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Morning', 'Afternoon', 'Evening']
  },
  {
    id: '3',
    name: 'Pandit Arun Mishra',
    specialization: ['All Deity Worship', 'Life Events', 'Remedial Pujas'],
    experience: 28,
    location: 'Varanasi',
    country: 'India',
    rating: 5.0,
    reviews: 312,
    languages: ['Hindi', 'English', 'Sanskrit', 'Bengali'],
    price: 3200,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Morning', 'Evening']
  },
  {
    id: '4',
    name: 'Pandit Vikram Joshi',
    specialization: ['Ganesha Puja', 'Griha Pravesh', 'Seasonal Pujas'],
    experience: 12,
    location: 'Pune',
    country: 'India',
    rating: 4.7,
    reviews: 156,
    languages: ['Hindi', 'English', 'Marathi'],
    price: 1800,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Afternoon', 'Evening']
  },
  {
    id: '5',
    name: 'Pandit Ramesh Iyer',
    specialization: ['South Indian Rituals', 'Lakshmi Puja', 'Saraswati Puja'],
    experience: 18,
    location: 'Chennai',
    country: 'India',
    rating: 4.9,
    reviews: 203,
    languages: ['Tamil', 'English', 'Hindi', 'Sanskrit'],
    price: 2300,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Morning', 'Evening']
  },
  {
    id: '6',
    name: 'Pandit Krishna Das',
    specialization: ['Navgraha Puja', 'Remedial Rituals', 'Spiritual Counseling'],
    experience: 25,
    location: 'Rishikesh',
    country: 'India',
    rating: 4.8,
    reviews: 278,
    languages: ['Hindi', 'English', 'Sanskrit'],
    price: 2800,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
    availability: ['Morning', 'Afternoon']
  }
];

export const locations = ['All', 'Mumbai', 'Delhi', 'Varanasi', 'Pune', 'Chennai', 'Rishikesh', 'Bangalore', 'Kolkata', 'Jaipur'];
export const countries = ['All', 'India', 'USA', 'UK', 'Canada', 'Australia', 'UAE'];