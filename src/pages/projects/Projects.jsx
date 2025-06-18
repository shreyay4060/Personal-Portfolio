import React from "react";
import Layout from "../../components/layout/Layout";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      title: "EasyShop – E-commerce Web App",
      src:"https://easyshop-ecommerceweb.vercel.app/",
      name:"EasyShop ✈️",
      date: "May 2025 - June 2025 ",
      link: "https://github.com/shreyay4060/ecommerce/tree/main/vite-project",
      description:
        "A fully functional and responsive e-commerce application featuring dynamic cart, product filters, order management, and Firebase authentication.",
      tech: ["React", "Firebase", "Redux", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Grocery Shopping Web App",
      
      date: "May 2025 ",
      link: "https://github.com/shreyay4060/grocery",
      description:
        "A responsive grocery shopping platform with product filtering, real-time Firebase backend, and clean user interface for an enhanced shopping experience.",
      tech: ["React", "Firebase", "Redux", "JavaScript", "CSS"],
    },
    {
      title: "Personal Portfolio Website",
      date: "July 2024 – Feb 2025",
      link: "https://github.com/shreyay4060/portfolio-website",
      description:
        "A dynamic portfolio website built to showcase personal projects, resume, and contact forms. Backend connected using PHP and MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-violet-100 via-white to-violet-200">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-violet-700 mb-12">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-violet-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-violet-700 mb-2">
                {project.title}
              </h3>
              <h4 className="mt-4 mb-5"><a href={project.src} className="bg-violet-600  shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-violet-800 text-white px-2 py-1 rounded-2xl">{project.name}</a></h4>
              <p className="text-sm text-gray-500 mb-2">{project.date}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className=" transform transition-transform duration-300 hover:scale-110 hover:text-violet-800 bg-violet-200 hover:bg-violet-300 text-violet-600 px-3 py-1 rounded-full text-sm font-medium cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-violet-600 font-medium hover:underline"
              >
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
