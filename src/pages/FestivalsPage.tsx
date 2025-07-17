import React, { useState, useEffect } from "react";
import festivals from "../data/festivals.json"; // You can replace this with API later
import { CalendarDays, Search } from "lucide-react";

interface Festival {
  name: string;
  date: string;
  description: string;
  icon?: string;
}

const FestivalsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filteredFestivals, setFilteredFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    const sorted = festivals.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setFilteredFestivals(sorted);
  }, []);

  const handleSearch = (query: string) => {
    setSearch(query);
    const filtered = festivals.filter((fest) =>
      fest.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFestivals(filtered);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f7c98c] via-[#f6b960] to-[#e88f33] text-[#4a2103] py-16 px-4 font-serif relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <CalendarDays className="h-7 w-7 text-[#9c450a]" />
          </div>
          <h1 className="text-4xl font-bold text-[#9c450a]">🗓 All Upcoming Festivals</h1>
          <p className="text-sm text-[#6b330a] mt-2">
            Stay connected to your spiritual calendar.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Festival..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-orange-400 bg-[#fff8ec] text-[#4a2103] focus:ring-2 focus:ring-orange-300 outline-none"
            />
            <Search className="absolute top-2.5 right-3 text-orange-400 h-5 w-5" />
          </div>
        </div>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival, index) => (
            <div
              key={index}
              className="bg-[#fff4e5] border border-[#d9822b] rounded-lg p-5 shadow-lg transition hover:shadow-xl"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="text-2xl">{festival.icon || "🌸"}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#9c450a]">{festival.name}</h3>
                  <p className="text-sm text-[#6b330a]">
                    {new Date(festival.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#7b3f0e] italic">{festival.description}</p>

              <div className="text-right mt-3">
                <a
                  href={`/festival/${festival.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center text-[#5a2a07] mt-10">No matching festivals found.</div>
        )}
      </div>

      {/* Background parchment pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/papyrus.png')] opacity-20 z-0" />
    </section>
  );
};

export default FestivalsPage;
