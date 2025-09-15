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
		demo: "https://weather-check-nine-lovat.vercel.app/",
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
		<section className=" px-4 sm:px-6 md:pl-2 md:pr-6 lg:pr-10 pt-16 lg:pt-4">
			<div className="max-w-7xl mx-auto pt-12 pb-20 px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-surface-elevated dark:bg-surface-elevated px-4 py-2 rounded-full mb-6 border border-main dark:border-main">
						<Code2 className="w-5 h-5 text-primary-bright" />
						<span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
					</div>

					<h2 className="text-4xl font-bold text-primary mb-4">
						Featured
						<span className="text-4xl font-bold text-primary mb-4"> Projects</span>
					</h2>

					<p className="text-light dark:text-light max-w-2xl mx-auto text-lg">
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
									<h3 className="text-2xl font-bold text-main dark:text-main">{project.title}</h3>

									{/* Updated description to match About page text style */}
									<p className="text-light dark:text-light leading-relaxed">{project.description}</p>
								</div>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-3">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="bg-surface-elevated dark:bg-surface-elevated text-primary px-4 py-2 rounded-lg text-sm font-medium border border-main dark:border-main hover:border-primary transition-colors"
										>
											{tech}
										</span>
									))}
								</div>
								{/* Action Links */}
								<div className="flex gap-4 flex-wrap">
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-primary dark:bg-primary text-white dark:text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base hover:bg-primary dark:hover:bg-primary transition-colors"
									>
										<ExternalLink size={16} className="sm:w-5 sm:h-5" />
										Live Demo
									</a>
									<a
										href={project.code}
										target="_blank"
										rel="noopener noreferrer"
										className="border-2 border-primary text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base hover:border-main shadow-xl hover:text-white transition-colors"
									>
										<Github size={16} className="sm:w-5 sm:h-5" />
										View Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Enhanced Call to Action */}
				<div className="text-center mt-20">
					<div className="relative inline-block w-full">
						<div className="absolute inset-0 bg-primary-hover dark:bg-primary rounded-2xl blur opacity-75"></div>
						<div className="relative bg-surface dark:bg-surface backdrop-blur-sm px-12 py-8 rounded-2xl border border-main dark:border-main shadow-xl">
							<h3 className="text-2xl font-bold text-main dark:text-main mb-2">
								Interested in more work?
							</h3>
							<p className="text-light dark:text-light mb-6">Check out my complete projects on GitHub</p>
							<a
								href="https://github.com/Rashmijoshi18"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:shadow-xl hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
							>
								<Github size={16} className="sm:w-5 sm:h-5" />
								Explore All Projects
								<ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
