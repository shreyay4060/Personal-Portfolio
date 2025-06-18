import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router";
import Projects from "../projects/Projects";
import About from "../about/About";
import Service from "../service/Service";
import Contact from "../contact/Contact";

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.onload = () => {
      const Typed = window.Typed;
      new Typed("#element", {
        strings: [
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
          "React Developer",
          "Frontend Developer",
          "Web Designer",
          "UI/UX Enthusiast",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        showCursor: false, 
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
  <Layout>
    <div className="scroll-smooth">
      {/* Adjust for fixed navbar height: assume 64px */}
      <div id="home" className="pt-24 flex flex-col-reverse md:flex-row items-center mb-5 justify-center min-h-screen px-6 py-5 bg-gradient-to-br from-violet-200 via-white to-violet-100 gap-10">
        <div>
          <div className="text-center md:text-left max-w-xl h-50 rounded-2xl shadow-xl bg-white p-8">
            <h2 className="text-2xl sm:text-2xl font-medium text-gray-700 mb-2">
              Hello there!
            </h2>
            <h2 className="text-3xl sm:text-5xl font-bold text-violet-700 mb-5">
              I AM SHREYA YADAV
            </h2>
            <span
              id="element"
              contentEditable={false}
              className="text-xl sm:text-2xl text-violet-600 font-semibold"
            ></span>
          </div>
          <br />
          <button className="bg-violet-600 px-4 text-white p-1 rounded-2xl mt-4">
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-52 sm:w-64 md:w-72 lg:w-80 rounded-full overflow-hidden shadow-xl border-4 border-violet-600">
          <img
            src="/images/shreyaImg.jpg"
            alt="Shreya Yadav"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Other Sections (with padding tops too if needed) */}
      <div id="about" className="pt-20"><About /></div>
      <div id="service" className="pt-20"><Service /></div>
      <div id="projects" className="pt-20"><Projects /></div>
      <div id="contact" className="pt-20"><Contact /></div>
    </div>
  </Layout>
);

}
