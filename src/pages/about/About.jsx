import React from "react";
import Layout from "../../components/layout/Layout";

export default function AboutPage() {
    const skills = ["HTML5" , "CSS3" ,"JavaScript","React","Tailwind CSS","UI/UX Design","Redux.js" , "Google Firebase"]
  return (
    <Layout>
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-br from-violet-100 via-white to-violet-200 gap-12">
        
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-violet-700 mb-4">
            About Me
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hi! I’m <span className="font-semibold text-violet-600">Shreya Yadav</span>, a passionate Frontend Developer specializing in React, UI/UX design, and building responsive, interactive web applications.
          </p>
          <p className="text-gray-600 text-md mb-6">
            With a creative mindset and attention to detail, I bring ideas to life through design and code. I love creating digital experiences that are user-friendly, visually appealing, and accessible.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill,index)=>{
                return <div className=" transform transition-transform duration-300 hover:scale-110 hover:text-violet-800 bg-violet-200 hover:bg-violet-300 text-violet-600 px-3 py-1 rounded-full text-sm font-medium cursor-pointer" key={index}>
                    <span>{skill}</span>
                </div>
            })}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-52 sm:w-64 md:w-72 lg:w-80 rounded-full overflow-hidden shadow-lg border-4 border-violet-600">
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
