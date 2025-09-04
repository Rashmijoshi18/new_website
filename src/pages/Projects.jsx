import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type from "../assets/type-master.png";

const projects = [
  {
    title: "TypeMaster",
    description:
      "A typing‑practice web app that measures WPM and accuracy in real‑time via customizable tests.",
    image: type,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demo: "https://type-master-seven.vercel.app/",
    code: "https://github.com/Rashmijoshi18/type-master",
  },
  {
    title: "TypeMaster",
    description:
      "A typing‑practice web app that measures WPM and accuracy in real‑time via customizable tests.",
    image: type,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demo: "https://type-master-seven.vercel.app/",
    code: "https://github.com/Rashmijoshi18/type-master",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <div className="h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 bg-green-700 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-green-700 transition-colors flex-1"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 border border-green-700 text-green-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-green-50 transition-colors flex-1"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
