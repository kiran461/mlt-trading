import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-green-700 mb-2">
            MLT Trading Enterprise
          </h3>
          <p className="text-sm">
            Delivering Freshness Across Borders.
            <br />
            Based in Mumbai, Maharashtra.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About</Link></li>
            <li><Link to="/products" className="hover:text-green-600">Products</Link></li>
            <li><Link to="/export-process" className="hover:text-green-600">Export Process</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
          <p className="text-sm">
            📍 Mumbai, Maharashtra<br />
            📞 +91-XXXXXXXXXX<br />
            ✉️ info@mlttrading.com
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
          <p className="text-sm">
            LinkedIn | Instagram<br />
            (Coming Soon)
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center text-sm py-4">
        © {new Date().getFullYear()} MLT Trading Enterprise PVT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
