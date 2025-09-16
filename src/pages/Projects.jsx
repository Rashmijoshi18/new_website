import React, { memo, lazy, Suspense } from "react";
import typing from "../assets/type.jpeg";
import weather_check from "../assets/weather.jpeg";
import fit from "../assets/fitlife.jpeg";
import { ExternalLink, Github, ArrowUpRight, Code2 } from "lucide-react";

// Lazy load the image component for better performance
const LazyImage = lazy(() =>
	Promise.resolve({
		default: ({ src, alt, className, ...props }) => (
			<img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...props} />
		),
	})
);

// Projects data
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

// Separate ProjectCard component for better optimization
const ProjectCard = memo(({ project, index }) => (
	<div
		className={`flex flex-col ${
			index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
		} gap-6 lg:gap-12 items-stretch`}
	>
		{/* Project Image - Optimized for mobile */}
		<div className="w-full lg:w-2/5">
			<div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg group aspect-video lg:aspect-auto">
				<Suspense
					fallback={<div className="w-full h-48 lg:h-56 bg-surface-elevated animate-pulse rounded-xl" />}
				>
					<LazyImage
						src={project.image}
						alt={project.title}
						className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
					/>
				</Suspense>
			</div>
		</div>

		{/* Project Info - Better mobile spacing */}
		<div className="w-full lg:w-3/5 flex flex-col justify-center space-y-4 lg:space-y-6">
			<div className="space-y-3 lg:space-y-4">
				<h3 className="text-xl lg:text-2xl font-bold text-main leading-tight">{project.title}</h3>
				<p className="text-sm lg:text-base text-light leading-relaxed">{project.description}</p>
			</div>

			{/* Tech Stack - Improved mobile layout */}
			<div className="flex flex-wrap gap-2 lg:gap-3">
				{project.tech.map((tech, i) => (
					<span
						key={i}
						className="bg-surface-elevated text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium border border-main transition-colors"
					>
						{tech}
					</span>
				))}
			</div>

			{/* Action Links - Better mobile buttons */}
			<div className="flex gap-3 lg:gap-4 flex-wrap">
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-primary text-white px-4 py-2.5 lg:px-5 lg:py-3 rounded-lg lg:rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-hover transition-colors text-sm lg:text-base active:scale-95 transition-transform"
				>
					<ExternalLink size={16} className="lg:w-[18px] lg:h-[18px]" />
					Live Demo
				</a>
				<a
					href={project.code}
					target="_blank"
					rel="noopener noreferrer"
					className="border-2 border-primary text-primary px-4 py-2.5 lg:px-5 lg:py-3 rounded-lg lg:rounded-xl font-semibold flex items-center gap-2 hover:border-main hover:bg-primary hover:text-white transition-colors text-sm lg:text-base active:scale-95 transition-transform"
				>
					<Github size={16} className="lg:w-[18px] lg:h-[18px]" />
					View Code
				</a>
			</div>
		</div>
	</div>
));

ProjectCard.displayName = "ProjectCard";

function Projects() {
	return (
		<section className="px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-12">
			<div className="max-w-7xl mx-auto pb-16 lg:pb-20">
				{/* Section Header - Mobile optimized */}
				<div className="text-center mb-12 lg:mb-16">
					<div className="inline-flex items-center gap-2 bg-surface-elevated px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6 border border-main">
						<Code2 className="w-4 h-4 lg:w-5 lg:h-5 text-primary-bright" />
						<span className="text-primary font-semibold text-xs lg:text-sm uppercase tracking-wider">
							Portfolio
						</span>
					</div>

					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 lg:mb-4 leading-tight">
						Featured <span className="text-primary">Projects</span>
					</h2>

					<p className="text-light max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
						Exploring the intersection of design and development through innovative web applications
					</p>
				</div>

				{/* Projects Grid - Improved mobile spacing */}
				<div className="space-y-12 lg:space-y-16">
					{projects.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>

				{/* Call to Action - Mobile optimized */}
				<div className="text-center mt-16 lg:mt-24 px-4">
					<div className="relative inline-block w-full max-w-lg lg:max-w-2xl">
						<div className="absolute inset-0 bg-primary rounded-xl lg:rounded-2xl blur opacity-70"></div>
						<div className="relative bg-surface backdrop-blur-sm px-6 sm:px-8 lg:px-12 py-6 lg:py-8 rounded-xl lg:rounded-2xl border border-main shadow-xl">
							<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-main mb-2 leading-tight">
								Interested in more work?
							</h3>
							<p className="text-light mb-4 lg:mb-6 text-sm lg:text-base">
								Check out my complete projects on GitHub
							</p>
							<a
								href="https://github.com/Rashmijoshi18"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl font-semibold hover:shadow-xl hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-sm lg:text-base"
							>
								<Github size={16} className="lg:w-[18px] lg:h-[18px]" />
								Explore All Projects
								<ArrowUpRight size={16} className="lg:w-[18px] lg:h-[18px]" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default memo(Projects);
