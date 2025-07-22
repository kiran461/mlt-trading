import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
  `block py-2 px-4 rounded-md transition-all duration-200 ${
    isActive
      ? "text-green-700 bg-green-100 md:bg-transparent md:border-b-2 md:border-green-600 md:font-semibold md:text-green-700 border-l-4 md:border-l-0 border-green-600"
      : "text-gray-700 hover:text-green-600"
  }`;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Name */}
          <div className="flex-shrink-0 text-green-700 font-extrabold text-xl sm:text-2xl">
            MLT Trading Enterprise
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/export-process" className={navLinkClass}>Export Process</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-green-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium text-gray-600 bg-white shadow-md">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/products" className={navLinkClass} onClick={closeMenu}>Products</NavLink>
          <NavLink to="/export-process" className={navLinkClass} onClick={closeMenu}>Export Process</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
