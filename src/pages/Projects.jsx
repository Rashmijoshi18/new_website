import React from "react";
import typing from "../assets/type.jpeg";
import weather_check from "../assets/weather.jpeg";
import fit from "../assets/fitlife.jpeg";
import { ExternalLink, Github, ArrowUpRight, Code2 } from "lucide-react";

// images add
const projects = [
	{
		title: "TypeMaster",
		description: "A typing-practice web app that measures WPM and accuracy in real-time via customizable tests.",
		image: typing,
		tech: ["React", "Tailwind CSS", "JavaScript"],
		demo: "https://type-master-seven.vercel.app/",
		code: "https://github.com/Rashmijoshi18/type-master",
	},
	{
		title: "Weather Check",
		description: "Real-time weather updates and forecasts based on user location with beautiful UI.",
		image: weather_check,
		tech: ["JavaScript", "API", "HTML", "CSS"],
		demo: "https://weather-check-beta.vercel.app/",
		code: "https://github.com/Rashmijoshi18/weather-check",
	},
	{
		title: "FitLife",
		description: "Modern fitness platform offering workout programs to support your healthy lifestyle.",
		image: fit,
		tech: ["React", "Tailwind CSS", "JavaScript"],
		demo: "https://fitlife-liart.vercel.app/",
		code: "https://github.com/Rashmijoshi18/fitlife",
	},
];

export default function Projects() {
	return (
		<section className="bg-white pt-12 pb-20 px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply opacity-40"></div>
				<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full mix-blend-multiply opacity-40"></div>
			</div>

			<div className="max-w-7xl mx-auto relative">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
						<Code2 className="w-5 h-5 text-green-700" />
						<span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
					</div>

					<h2 className="text-4xl font-bold text-green-700 mb-4">
						Featured
						<span className="text-4xl font-bold text-green-700 mb-4"> Projects</span>
					</h2>

					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						Exploring the intersection of design and development through innovative web applications
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid gap-8 lg:gap-12">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`relative ${
								index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} flex flex-col lg:flex gap-8 lg:gap-12 items-center mb-15`}
						>
							{/* Project Image */}
							<div className="lg:w-2/5 w-full relative">
								<div className="relative overflow-hidden rounded-2xl shadow-lg group">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-48 lg:h-56 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
									/>
								</div>
							</div>

							{/* Project Info */}
							<div className="lg:w-3/5 w-full space-y-6">
								<div className="space-y-4">
									{/* Updated heading to match About page style */}
									<h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>

									{/* Updated description to match About page text style */}
									<p className="text-gray-700 leading-relaxed">{project.description}</p>
								</div>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-3">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium border border-green-100 hover:border-green-200 transition-colors"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Links */}
								<div className="flex gap-4">
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
									>
										<ExternalLink size={18} />
										Live Demo
									</a>
									<a
										href={project.code}
										target="_blank"
										rel="noopener noreferrer"
										className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
									>
										<Github size={18} />
										View Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Enhanced Call to Action */}
				<div className="text-center mt-20">
					<div className="relative inline-block">
						<div className="absolute inset-0 bg-green-700 rounded-2xl blur opacity-75"></div>
						<div className="relative bg-white/95 backdrop-blur-sm px-12 py-8 rounded-2xl border border-white/50 shadow-xl">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">Interested in more work?</h3>
							<p className="text-gray-600 mb-6">Check out my complete portfolio on GitHub</p>
							<a
								href="https://github.com/Rashmijoshi18"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
							>
								<Github size={20} />
								Explore All Projects
								<ArrowUpRight size={20} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
