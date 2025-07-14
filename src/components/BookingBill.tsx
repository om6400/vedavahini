import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Phone, Mail, Download, Check } from 'lucide-react';
import { Booking } from '../types';

interface BookingBillProps {
  booking: Booking;
  onClose: () => void;
}

const BookingBill: React.FC<BookingBillProps> = ({ booking, onClose }) => {
  const handleDownload = () => {
    // Here you would implement PDF generation
    console.log('Downloading bill for booking:', booking.id);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-serif font-bold">Booking Confirmation</h2>
              <p className="text-orange-100">VedaVahini Sacred Services</p>
            </div>
            <div className="text-right">
              <div className="text-3xl mb-2">🕉</div>
              <p className="text-sm">Booking ID: {booking.id}</p>
            </div>
          </div>
        </div>

        {/* Bill Content */}
        <div className="p-6">
          {/* Status */}
          <div className="flex items-center justify-center mb-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              booking.status === 'confirmed' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              <Check className="h-4 w-4" />
              <span className="font-medium capitalize">{booking.status}</span>
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-orange-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img
                  src={booking.poojaService.image}
                  alt={booking.poojaService.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-800">{booking.poojaService.name}</h4>
                <p className="text-sm text-gray-600">{booking.poojaService.description}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">{booking.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">{booking.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">{booking.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brahmin Details */}
          <div className="bg-cream-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Assigned Brahmin</h3>
            <div className="flex items-center gap-4">
              <img
                src={booking.brahmin.avatar}
                alt={booking.brahmin.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{booking.brahmin.name}</h4>
                <p className="text-sm text-gray-600">{booking.brahmin.experience} years experience</p>
                <p className="text-sm text-gray-600">{booking.brahmin.location}, {booking.brahmin.country}</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(booking.brahmin.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({booking.brahmin.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Customer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-orange-600" />
                <span className="text-sm">{booking.customerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <span className="text-sm">{booking.customerEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <span className="text-sm">{booking.customerPhone}</span>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-orange-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Payment Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>₹{booking.poojaService.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Brahmin Fee</span>
                <span>₹{booking.brahmin.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹{Math.round((booking.poojaService.price + booking.brahmin.price) * 0.1)}</span>
              </div>
              <div className="border-t border-orange-200 pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>₹{booking.totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.button
              onClick={handleDownload}
              className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              Download Bill
            </motion.button>
            <motion.button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingBill;