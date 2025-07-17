import React from "react";
import { useParams } from "react-router-dom";
import festivals from "../data/festivals.json";

interface Festival {
  slug: string;
  name: string;
  date: string;
  image?: string;
  muhurat?: string;
  description: string;
  poojaVidhi?: string[];
}

const FestivalDetailPage: React.FC = () => {
  const { slug } = useParams();
  const festival = (festivals as Festival[]).find((f) => f.slug === slug);

  if (!festival) {
    return <div className="text-white text-center mt-20">Festival not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-orange-400 font-bold">{festival.name}</h1>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(festival.date).toLocaleDateString("en-IN", {
              weekday: "long", year: "numeric", month: "long", day: "numeric"
            })}
          </p>
        </div>

        {/* Image */}
        {festival.image && (
          <div className="mb-8">
            <img
              src={festival.image}
              alt={festival.name}
              className="rounded-lg w-full object-cover max-h-[400px]"
            />
          </div>
        )}

        {/* Muhurat */}
        {festival.muhurat && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-orange-300 mb-2">🕓 Muhurat Timing</h2>
            <p className="text-gray-300">{festival.muhurat}</p>
          </div>
        )}

        {/* Significance */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-orange-300 mb-2">📖 Significance</h2>
          <p className="text-gray-300 leading-relaxed">{festival.description}</p>
        </div>

        {/* Pooja Vidhi */}
        {festival.poojaVidhi && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-orange-300 mb-2">🪔 Pooja Vidhi</h2>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              {festival.poojaVidhi.map((step: string, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Book Pandit CTA */}
        <div className="text-center mt-8">
          <a
            href="/book-priest"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            📿 Book a Pandit for {festival.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetailPage;
