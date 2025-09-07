import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import My_resume from "../assets/rashmi_resume.pdf";

export default function Home() {
	useEffect(() => {
		const copyButton = document.querySelector(".copy-btn");
		const copySuccess = document.getElementById("copy-success");

		if (copyButton) {
			copyButton.addEventListener("click", function () {
				const code = `const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'JavaScript', 'Git', 'Tailwind CSS', 'Bootstrap'],
  currentStatus: '2nd Year Student',
  passion: 'Building scalable web applications',
  currentFocus: 'Modern web technologies & UX'
};

console.log('Welcome to my digital world! 🚀');`;

				navigator.clipboard.writeText(code).then(function () {
					copySuccess.classList.remove("hidden");
					copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';

					setTimeout(function () {
						copySuccess.classList.add("hidden");
						copyButton.innerHTML = '<i class="far fa-copy"></i> Copy';
					}, 2000);
				});
			});
		}

		// Hover effects for cards
		const cards = document.querySelectorAll(".stat-card, .service-card");
		cards.forEach((card) => {
			card.addEventListener("mouseenter", function () {
				this.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
			});
			card.addEventListener("mouseleave", function () {
				this.style.boxShadow = "";
			});
		});
	}, []);

	return (
		<div className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 font-inter">
			{/* Header */}
			<header className="text-center md:text-left space-y-6 fade-in">
				<div className="space-y-4">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-main leading-tight">
						<span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-primary">
							Rashmi Joshi
						</span>
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-light max-w-3xl mx-auto md:mx-0">
						Full-stack developer crafting exceptional digital experiences with modern technologies
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
					{/* <a
						href={My_resume}
						download
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary group px-8 py-3 bg-green-700 text-white rounded-xl font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
					>
						Resume
					</a> */}
					<a
						href={My_resume}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary group px-8 py-3 bg-green-700 text-white rounded-xl font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
					>
						Resume
					</a>

					<Link
						to="/contact"
						className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
					>
						Contact Me
					</Link>
				</div>
			</header>

			{/* Stats Section */}
			<section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 fade-in">
				{[
					{ num: "14+", label: "Months Learning Code" },
					{ num: "10+", label: "Projects Built" },
					{ num: "250+", label: "Commits Made" },
					{ num: "100%", label: "Passion for Learning" },
				].map((stat, idx) => (
					<div
						key={idx}
						className="stat-card bg-surface rounded-lg p-4 sm:p-6 border border-main text-center transition-transform duration-300 hover:-translate-y-1"
					>
						<p className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.num}</p>
						<p className="text-sm text-light font-medium">{stat.label}</p>
					</div>
				))}
			</section>

			{/* About Section */}
			<section className="bg-surface rounded-2xl border border-main p-6 sm:p-8 lg:p-10 shadow-lg mb-12 fade-in">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
						<i className="fas fa-user text-white text-sm"></i>
					</div>
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-main">Hello, World!</h2>
				</div>

				<div className="flex flex-wrap items-center gap-3 mb-6">
					<span className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white">
						DEVELOPER
					</span>
					<code className="px-3 py-1 rounded-lg bg-theme-badge text-sm text-theme-badge font-mono border border-main">
						/portfolio/rashmi-joshi
					</code>
				</div>

				<p className="mb-6 text-light text-base sm:text-lg leading-relaxed">
					I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in
					creating scalable, user-friendly applications that solve real-world problems and deliver exceptional
					user experiences.
				</p>

				{/* Code Block */}
				<div className="code-block relative bg-code rounded-xl overflow-hidden border border-code">
					{/* Header */}
					<div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-code-header border-b border-code">
						<div className="flex items-center gap-2">
							<div className="flex gap-1.5">
								<div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
								<div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
								<div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
							</div>
							<span className="text-subtle text-xs sm:text-sm font-mono ml-2">developer.js</span>
						</div>
						<button className="copy-btn flex items-center gap-1 px-2.5 py-1.5 text-xs text-subtle hover:text-code bg-code-header hover-bg-surface-hover rounded transition-colors">
							<i className="far fa-copy"></i> <span>Copy</span>
						</button>
					</div>

					{/* Code Content */}
					<div className="code-container p-3 sm:p-4 overflow-x-auto">
						<pre className="text-xs sm:text-sm text-code font-mono leading-relaxed">
							<code>
								{`const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'JavaScript', 'Git', 'Tailwind CSS', 'Bootstrap'],
  currentStatus: '2nd Year Student',
  passion: 'Building scalable web applications',
  currentFocus: 'Modern web technologies & UX'
};

console.log('Welcome to my digital world! 🚀');`}
							</code>
						</pre>
					</div>
				</div>

				<div
					id="copy-success"
					className="hidden mt-4 px-4 py-2 bg-primary-light text-primary rounded-lg text-center"
				>
					<i className="fas fa-check-circle mr-2"></i> Code copied to clipboard!
				</div>
			</section>

			{/* What I Do Section */}
			<section className="space-y-6 mb-10 fade-in">
				<div className="text-center md:text-left">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-main mb-2">What I Do</h2>
					<p className="text-light">Services I offer to bring your ideas to life</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{[
						{
							icon: "fas fa-laptop-code",
							title: "Web Development",
							desc: "Building responsive and performant web applications with modern frameworks",
						},
						{
							icon: "fas fa-paint-brush",
							title: "UI/UX Design",
							desc: "Creating intuitive and engaging user experiences with thoughtful design",
						},
						{
							icon: "fas fa-palette",
							title: "Graphic Design",
							desc: "Designing intuitive logos and brochures using Figma and Canva to create compelling visual identities.",
						},
					].map((service, idx) => (
						<div
							key={idx}
							className="service-card bg-surface rounded-lg p-6 border border-main transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="text-2xl mb-4 text-primary">
								<i className={service.icon}></i>
							</div>
							<h3 className="font-semibold text-lg text-main mb-3">{service.title}</h3>
							<p className="text-sm text-light leading-relaxed">{service.desc}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
