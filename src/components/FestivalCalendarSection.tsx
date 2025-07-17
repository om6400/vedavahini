import React from "react";
import { CalendarDays } from "lucide-react";
import festivals from "../data/festivals.json";

const FestivalCalendarSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f7c98c] via-[#f6b960] to-[#e88f33] text-[#4a2103] py-12 px-4 font-serif relative">
      {/* Subtle border frame */}
      <div className="max-w-3xl mx-auto border-4 border-[#d9822b] rounded-xl p-8 bg-[#fff9ee] shadow-xl relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <CalendarDays className="h-6 w-6 text-[#9c450a]" />
          </div>
          <h2 className="text-3xl font-bold text-[#9c450a]">Upcoming Hindu Festivals</h2>
        </div>

        {/* Festival Cards */}
        <div className="grid gap-6">
          {festivals.map((festival: any) => (
            <div
              key={festival.slug}
              className="bg-[#fff4e5] border border-[#e0a868] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              {festival.image && (
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-2xl">{festival.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#9c450a]">{festival.name}</h3>
                    <p className="text-sm text-[#6b330a]">
                      {new Date(festival.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#7b3f0e] italic">{festival.description}</p>

                <div className="text-right mt-3">
                  <a
                    href={`/festival/${festival.slug}`}
                    className="text-sm text-orange-500 hover:text-orange-600 font-semibold underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href="/festivals"
            className="inline-block bg-[#d9822b] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#bb6f21] transition"
          >
            See All Festivals →
          </a>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/papyrus.png')] opacity-20 z-0" />
    </section>
  );
};

export default FestivalCalendarSection;
