import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  const navigationPages = ["home", "about"];
  return (
    <div className="lg:fixed border-b bg-gradient-to-br from-violet-200 via-white to-violet-100 w-full left-0">
      <div className=" flex font-semibold text-md  justify-between items-center flex-col lg:flex-row gap-4  p-4">
        <div className=" font-bold text-xl text-violet-600">Shreya</div>
        <div className="">
          <ul className="flex gap-5">
            {/* {["Home", "About", "Service", "Projects", "Contact"].map(
              (text, idx) => (
                <li
                  key={idx}
                  className="transform transition-transform duration-300 hover:scale-110 hover:text-violet-600"
                >
                  <Link
                    to={`/${
                      text.toLowerCase() === "home" ? "" : text.toLowerCase()
                    }`}
                  >
                    {text}
                  </Link>
                </li>
              )
            )} */}
            <li  className="transform transition-transform duration-300 hover:scale-110 hover:text-violet-600"><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="">
            <button className="transform transition-transform duration-300 hover:scale-110 hover:bg-violet-700 bg-violet-500 text-white px-3 py-1.5 rounded-md border">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
