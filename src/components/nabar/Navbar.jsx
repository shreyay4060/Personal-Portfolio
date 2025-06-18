import React from "react";
import { Link } from "react-router-dom"; // Corrected: should be 'react-router-dom'

export default function Navbar() {
  return (
    <div className="border-b bg-gradient-to-br from-violet-200 via-white to-violet-100 w-full left-0 shadow-sm fixed top-0 z-50">
      <div className="flex font-semibold text-md justify-between items-center flex-col lg:flex-row gap-4 p-4">
        
        {/* Logo */}
        <div className="font-bold text-xl text-violet-600">
          Shreya
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-5">
          {["Home", "About", "Service", "Projects", "Contacts"].map((text, idx) => (
            <li
              key={idx}
              className="transform transition-transform duration-300 hover:scale-110 hover:text-violet-600"
            >
              <Link to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div>
          <button className="transform transition-transform duration-300 hover:scale-110 hover:bg-violet-700 bg-violet-500 text-white px-3 py-1.5 rounded-md border">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
