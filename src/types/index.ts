export interface Brahmin {
  id: string;
  name: string;
  specialization: string[];
  experience: number;
  location: string;
  country: string;
  rating: number;
  reviews: number;
  languages: string[];
  price: number;
  avatar: string;
  verified: boolean;
  availability: string[];
}

export interface PoojaService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  category: string;
  benefits: string[];
  requirements: string[];
}

export interface Booking {
  id: string;
  poojaService: PoojaService;
  brahmin: Brahmin;
  date: string;
  time: string;
  location: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}