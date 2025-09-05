import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	useEffect(() => {
		const copyButton = document.querySelector(".copy-btn");
		const copySuccess = document.getElementById("copy-success");

		// Copy functionality
		copyButton.addEventListener("click", function () {
			const code = `const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'JavaScript', 
  'Git', 'Tailwind CSS', 'Bootstrap'],
  Current Status: '2nd Year Student',
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
		<div className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 bg-white font-inter">
			{/* Header */}
			<header className="text-center md:text-left space-y-6 fade-in">
				<div className="space-y-4">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
						<span className="bg-gradient-to-r from-[#308D46] to-[#308D46] bg-clip-text text-green-700">
							Rashmi Joshi
						</span>
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto md:mx-0">
						Full-stack developer crafting exceptional digital experiences with modern technologies
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
					<Link
						to="/projects"
						className="btn-primary group px-8 py-3 bg-green-700 text-white rounded-xl font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
					>
						View My Work
						<i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
					</Link>
					<Link
						to="/contact"
						className="px-8 py-3 border-2 border-[#308D46] text-[#308D46] rounded-xl font-semibold hover:bg-[#308D46] hover:text-white transition-all duration-300"
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
					{ num: "200+", label: "Commits Made" },
					{ num: "100%", label: "Passion for Learning" },
				].map((stat, idx) => (
					<div
						key={idx}
						className="stat-card bg-white rounded-lg p-4 sm:p-6 border border-gray-200 text-center transition-transform duration-300 hover:-translate-y-1"
					>
						<p className="text-2xl sm:text-3xl font-bold text-[#308D46] mb-2">{stat.num}</p>
						<p className="text-sm text-gray-600 font-medium">{stat.label}</p>
					</div>
				))}
			</section>

			{/* About Section */}
			<section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-lg mb-12 fade-in">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-8 h-8 bg-gradient-to-r from-[#308D46] to-[#246534] rounded-lg flex items-center justify-center">
						<i className="fas fa-user text-white text-sm"></i>
					</div>
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Hello, World!</h2>
				</div>

				<div className="flex flex-wrap items-center gap-3 mb-6">
					<span className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-[#308D46] to-[#246534] text-white">
						DEVELOPER
					</span>
					<code className="px-3 py-1 rounded-lg bg-gray-100 text-sm text-gray-700 font-mono border">
						/portfolio/rashmi-joshi
					</code>
				</div>

				<p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
					I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in
					creating scalable, user-friendly applications that solve real-world problems and deliver exceptional
					user experiences.
				</p>

				{/* Code Block */}
				<div className="code-block relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
					{/* Header */}
					<div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-gray-800 border-b border-gray-700">
						<div className="flex items-center gap-2">
							<div className="flex gap-1.5">
								<div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
								<div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
								<div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
							</div>
							<span className="text-gray-400 text-xs sm:text-sm font-mono ml-2">developer.js</span>
						</div>
						<button className="copy-btn flex items-center gap-1 px-2.5 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors">
							<i className="far fa-copy"></i> <span>Copy</span>
						</button>
					</div>

					{/* Code Content */}
					<div className="code-container p-3 sm:p-4 overflow-x-auto">
						<pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
							<code>
								{`const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'JavaScript', 'Git', 'Tailwind CSS', 'Bootstrap'],
  Current Status: '2nd Year Student',
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
					className="hidden mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-center"
				>
					<i className="fas fa-check-circle mr-2"></i> Code copied to clipboard!
				</div>
			</section>

			{/* What I Do Section */}
			<section className="space-y-6 mb-10 fade-in">
				<div className="text-center md:text-left">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">What I Do</h2>
					<p className="text-gray-600">Services I offer to bring your ideas to life</p>
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
							className="service-card bg-white rounded-lg p-6 border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="text-2xl mb-4 text-[#308D46]">
								<i className={service.icon}></i>
							</div>
							<h3 className="font-semibold text-lg text-gray-900 mb-3">{service.title}</h3>
							<p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			{/* <footer className="text-center py-8 text-gray-600 border-t border-gray-200 mt-12 fade-in">
        <p>© 2023 Rashmi Joshi. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {[
            { icon: "fab fa-github", link: "#" },
            { icon: "fab fa-linkedin", link: "#" },
            { icon: "fab fa-twitter", link: "#" },
            { icon: "fab fa-dev", link: "#" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="text-gray-500 hover:text-[#308D46]"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </footer> */}
		</div>
	);
}
