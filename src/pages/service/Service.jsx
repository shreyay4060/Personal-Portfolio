import React from "react";
import Layout from "../../components/layout/Layout";
import { Code, Monitor, PenTool } from "lucide-react";

export default function Service() {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, optimized, and scalable interfaces using React and modern JavaScript frameworks .Hands on experience with Redux , Tailwind CSS and Firebase.",
      icon: <Code className="w-10 h-10 text-violet-600" />,
    },
    {
      title: "Web Design",
      description: "Designing visually appealing layouts with modern UI elements and user-friendly experiences.",
      icon: <Monitor className="w-10 h-10 text-violet-600" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user flows, wireframes, and engaging experiences for maximum usability.",
      icon: <PenTool className="w-10 h-10 text-violet-600" />,
    },
  ];

  return (
    <>
      <div id="service" className="min-h-screen px-6 py-16 bg-gradient-to-br from-violet-100 via-white to-violet-200 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-violet-700 mb-6">My Services</h1>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          I offer a variety of services to help you build, design, and launch high-quality web products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border-2 border-violet-200 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-violet-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
