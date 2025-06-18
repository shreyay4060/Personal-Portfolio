import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b bg-gradient-to-br from-violet-200 via-white to-violet-100">
      <div className="flex font-semibold text-md justify-between items-center flex-col lg:flex-row gap-4 p-4">
        <div className="font-bold text-xl text-violet-600">Shreya</div>
        <ul className="flex gap-5">
          <li className="transform transition duration-300 hover:scale-110 hover:text-violet-600">
            <a href="#home">Home</a>
          </li>
          <li className="transform transition duration-300 hover:scale-110 hover:text-violet-600">
            <a href="#about">About</a>
          </li>
          <li className="transform transition duration-300 hover:scale-110 hover:text-violet-600">
            <a href="#service">Service</a>
          </li>
          <li className="transform transition duration-300 hover:scale-110 hover:text-violet-600">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <button className="transform transition duration-300 hover:scale-110 hover:bg-violet-700 bg-violet-500 text-white px-3 py-1.5 rounded-md border">
          <a href="#contact">Contact</a>
        </button>
      </div>
    </div>
  );
}
