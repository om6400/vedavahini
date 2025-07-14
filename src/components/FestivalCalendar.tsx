import React, { useState } from 'react';

// Sample festival data
type Festival = {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
  poojaDetails: string;
};

const festivals: Festival[] = [
  {
    id: 1,
    name: 'Diwali',
    date: '2025-10-21',
    image: 'https://i.ibb.co/mV7QG8Jc/lotus.png',
    description: 'Festival of Lights, celebrated with diyas, sweets, and prayers to Lakshmi and Ganesha.',
    poojaDetails: 'Lakshmi Puja, Ganesh Puja, lighting diyas, sharing sweets.'
  },
  {
    id: 2,
    name: 'Holi',
    date: '2025-03-17',
    image: 'https://i.ibb.co/album/holi.png',
    description: 'Festival of Colors, celebrated with gulal, water, and joy.',
    poojaDetails: 'Holika Dahan, playing colors, community gatherings.'
  },
  {
    id: 3,
    name: 'Navratri',
    date: '2025-09-29',
    image: 'https://i.ibb.co/album/navratri.png',
    description: 'Nine nights of worshipping Goddess Durga, with dance and fasting.',
    poojaDetails: 'Durga Puja, Garba, fasting, prayers.'
  }
];

const FestivalCalendar: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Festival | null>(null);

  const filtered = festivals.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-serif font-bold mb-6 text-orange-700">Festival Calendar</h2>
      <input
        type="text"
        placeholder="Search festivals..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map(festival => (
          <div
            key={festival.id}
            className="bg-orange-50 rounded-xl shadow p-4 cursor-pointer hover:bg-orange-100 transition"
            onClick={() => setSelected(festival)}
          >
            <img src={festival.image} alt={festival.name} className="w-full h-32 object-cover rounded-lg mb-3" />
            <h3 className="font-serif text-xl font-bold text-orange-700 mb-1">{festival.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{festival.date}</p>
            <p className="text-sm text-gray-600">{festival.description}</p>
          </div>
        ))}
      </div>

      {/* Festival Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-orange-700 text-xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img src={selected.image} alt={selected.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="font-serif text-2xl font-bold text-orange-700 mb-2">{selected.name}</h3>
            <p className="text-sm text-gray-700 mb-2">Date: {selected.date}</p>
            <p className="text-sm text-gray-600 mb-4">{selected.description}</p>
            <h4 className="font-semibold text-orange-600 mb-1">Pooja Details</h4>
            <p className="text-sm text-gray-700">{selected.poojaDetails}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalCalendar;
