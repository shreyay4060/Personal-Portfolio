import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";

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
        showCursor: false, // ✅ Removes the extra blinking cursor
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <div className="flex  flex-col-reverse md:flex-row items-center mb-5 justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-violet-200 via-white to-violet-100 gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl   rounded-2xl shadow-xl bg-white p-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-2">
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

        {/* Image Section */}
        <div className="w-52 sm:w-64 md:w-72 lg:w-80 rounded-full overflow-hidden shadow-xl border-4 border-violet-600">
          <img
            src="/images/shreyaImg.jpg"
            alt="Shreya Yadav"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}
