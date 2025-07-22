import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Delivering Freshness Across Borders
        </h1>
        <p className="text-lg mb-6">
          MLT Trading Enterprise PVT LTD is your trusted partner for premium Indian agricultural exports — starting with high-quality onions shipped directly from Maharashtra.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          Send an Inquiry
        </Link>
      </div>

      <div className="bg-gray-50 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Key Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Farm-Fresh Onions</h3>
            <p>We source red onions directly from farmers, ensuring freshness and quality for international markets.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">End-to-End Logistics</h3>
            <p>From farm to port, we handle sorting, packaging, and safe shipping with complete compliance.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Global Export Vision</h3>
            <p>Our goal is to become a leading Indian exporter of agricultural products to global destinations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;