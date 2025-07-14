import React, { useState, useEffect } from "react";
import festivalsData from "../data/festivals.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Festival {
  slug: string;
  name: string;
  date: string;
  image?: string;
  muhurat?: string;
  description: string;
  poojaVidhi?: string[];
}

const FestivalsPage: React.FC = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sorted = (festivalsData as Festival[])
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setFestivals(sorted);
  }, []);

  const filteredFestivals = festivals.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-serif font-bold text-center text-orange-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🗓️ All Upcoming Festivals
        </motion.h1>

        {/* Search Input */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search Festival..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Grid of Festivals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival, index) => (
            <motion.div
              key={festival.slug}
              className="bg-gray-800 border border-orange-500 rounded-lg p-5 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/festivals/${festival.slug}`} className="block group">
                <h3 className="text-xl font-bold text-orange-300 mb-1 group-hover:underline">{festival.name}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(festival.date).toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-300 italic">{festival.description}</p>
              </Link>
              <a href={`/festival/${festival.slug}`} className="text-orange-400 hover:underline mt-3 inline-block">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center text-gray-500 mt-8">No festivals found.</div>
        )}
      </div>
    </div>
  );
};

export default FestivalsPage;
