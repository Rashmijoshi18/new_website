import React, { useState, useEffect } from "react";
import profileImage from "../assets/me.png";
import {
	User,
	GraduationCap,
	Lightbulb,
	Code,
	FolderOpen,
	CheckCircle,
	Star,
	MapPin,
	BookOpen,
	Coffee,
	Brain,
	Target,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Reusable card with hover/tap effect
function HoverCard({ children }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`border border-main rounded-lg p-5 transform transition-all duration-300 cursor-pointer 
        ${isHovered ? "shadow-md scale-[1.02]" : ""}`}
			onClick={() => setIsHovered(!isHovered)} // ✅ Mobile tap
			onMouseEnter={() => setIsHovered(true)} // ✅ Desktop hover
			onMouseLeave={() => setIsHovered(false)} // ✅ Desktop leave
		>
			{children}
		</div>
	);
}

export default function About() {
	const [activeTab, setActiveTab] = useState("intro");
	const [copied, setCopied] = useState(false);

	const approachCode = `const myApproach = {
  focus: "User Experience",
  codeStyle: "Clean & Maintainable",
  testing: "Test-Driven Development",
  learning: "Continuous Growth"
};

console.log('Crafting scalable & meaningful solutions 🚀');`;

	const copyToClipboard = () => {
		navigator.clipboard.writeText(approachCode).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	const tabs = [
		{ id: "intro", label: "Introduction", icon: User },
		{ id: "education", label: "Education", icon: GraduationCap },
		{ id: "philosophy", label: "Philosophy", icon: Lightbulb },
		{ id: "approach", label: "Approach", icon: Code },
		{ id: "interests", label: "Interests", icon: FolderOpen },
	];

	const strengths = [
		{ icon: Target, text: "Problem-solving expertise" },
		{ icon: Code, text: "Clean code architecture" },
		{ icon: User, text: "User-centered design" },
		{ icon: Coffee, text: "Team collaboration" },
	];

	const educationData = [
		{
			period: "2016-2020",
			degree: "Bachelor of Technology in Computer Science and Engineering",
			institution: "Lovely Professional University",
			location: "Punjab, India",
			description: "Focus on full-stack development and algorithms.",
		},
		{
			period: "2020-2022",
			degree: "Higher Secondary Education",
			institution: "New Adarsh Senior Secondary School",
			location: "Punjab, India",
			description: "Studied various subjects including Mathematics, Physics, and Computer Science.",
		},
	];

	const philosophyPrinciples = [
		{
			icon: BookOpen,
			title: "Clean Code",
			description: "Write self-documenting and maintainable code",
		},
		{
			icon: CheckCircle,
			title: "Test-Driven",
			description: "Comprehensive testing ensures reliability",
		},
		{
			icon: Brain,
			title: "Continuous Learning",
			description: "Stay updated with emerging technologies",
		},
	];

	const interests = [
		{
			icon: Brain,
			title: "Artificial Intelligence",
			description: "Exploring artificial intelligence",
		},
		{
			icon: Code,
			title: "Open Source",
			description: "Contributing to community projects",
		},
		{
			icon: BookOpen,
			title: "Technical Writing",
			description: "Creating educational content",
		},
		{
			icon: User,
			title: "Learning",
			description: "Learning new technologies and skills",
		},
	];

	return (
		<div className="min-h-screen px-4 sm:px-6 md:pl-2 md:pr-6 lg:pr-10 pt-16 lg:pt-4">
			<div className="max-w-5xl mx-auto py-8 px-4 mb-10">
				{/* Header */}
				<div className="text-center mb-10">
					<div className="w-38 h-38 rounded-full overflow-hidden mx-auto mb-4 shadow-md border-2 border-primary-hover dark:border-primary-hover">
						<img src={profileImage} alt="Rashmi Joshi" className="w-full h-full object-cover" />
					</div>

					<h1 className="text-4xl font-bold text-primary dark:text-primary mb-3">About Me</h1>
					<div className="w-16 h-1 bg-primary dark:bg-primary mx-auto mb-4"></div>
					<p className="text-lg text-light dark:text-light">
						Passionate Coder | Problem Solver | Lifelong Learner
					</p>
				</div>

				{/* Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-10 bg-surface dark:bg-surface rounded-lg p-2 shadow-sm">
					{tabs.map((tab) => {
						const IconComponent = tab.icon;
						const isActive = activeTab === tab.id;
						return (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`px-4 py-2 rounded-lg font-medium flex items-center transition-all duration-300 ${
									isActive
										? "bg-primary text-white shadow-md"
										: "text-light dark:text-light hover:bg-surface-elevated dark:hover:bg-surface-elevated"
								}`}
							>
								<IconComponent className="w-4 h-4 mr-2" />
								{tab.label}
							</button>
						);
					})}
				</div>

				{/* Content */}
				<div className="bg-surface dark:bg-surface rounded-lg shadow-md border border-main dark:border-main p-6 animate-fadeIn">
					{/* Intro */}
					{activeTab === "intro" && (
						<div>
							<div className="flex items-center mb-6 pb-3 border-b border-primary-hover dark:border-primary-hover">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow">
									<User className="w-5 h-5 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-main dark:text-main">Introduction</h2>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<p className="text-light dark:text-light mb-4 leading-relaxed">
										I am a passionate software engineer who thrives on building clean, scalable, and
										efficient solutions.
									</p>
									<p className="text-light dark:text-light leading-relaxed">
										I enjoy transforming complex problems into simple, intuitive experiences that
										delight users and solve real-world challenges.
									</p>
								</div>

								{/* Core strengths */}
								<HoverCard>
									<h3 className="text-lg font-bold text-main dark:text-main mb-4 flex items-center">
										<div className="w-6 h-6 bg-primary rounded flex items-center justify-center mr-2">
											<Star className="w-4 h-4 text-white" />
										</div>
										Core Strengths
									</h3>
									<div className="space-y-3">
										{strengths.map((strength, idx) => {
											const IconComponent = strength.icon;
											return (
												<div
													key={idx}
													className="flex items-center transition duration-300 hover:translate-x-1"
												>
													<div className="w-6 h-6 bg-primary rounded flex items-center justify-center mr-3">
														<IconComponent className="w-4 h-4 text-white" />
													</div>
													<span className="text-light dark:text-light">{strength.text}</span>
												</div>
											);
										})}
									</div>
								</HoverCard>
							</div>
						</div>
					)}

					{/* Education */}
					{activeTab === "education" && (
						<div className="animate-fadeIn">
							<div className="flex items-center mb-6 pb-3 border-b border-primary-hover dark:border-primary-hover">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow">
									<GraduationCap className="w-5 h-5 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-main dark:text-main">Education</h2>
							</div>

							<div className="space-y-6">
								{educationData.map((edu, idx) => (
									<HoverCard key={idx}>
										<h3 className="text-xl font-bold text-main dark:text-main mb-3">
											{edu.degree}
										</h3>
										<div className="flex flex-col md:flex-row gap-4 mb-3">
											<div className="flex items-center">
												<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
													<BookOpen className="w-4 h-4 text-white" />
												</div>
												<span className="text-light dark:text-light font-medium">
													{edu.institution}
												</span>
											</div>

											<div className="flex items-center">
												<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
													<MapPin className="w-4 h-4 text-white" />
												</div>
												<span className="text-light dark:text-light">{edu.location}</span>
											</div>
										</div>
										<p className="text-light dark:text-light text-sm">{edu.description}</p>
									</HoverCard>
								))}
							</div>
						</div>
					)}

					{/* Philosophy */}
					{activeTab === "philosophy" && (
						<div className="animate-fadeIn">
							<div className="flex items-center mb-6 pb-3 border-b border-primary-hover dark:border-primary-hover">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow">
									<Lightbulb className="w-5 h-5 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-main dark:text-main">Development Philosophy</h2>
							</div>

							<p className="text-light dark:text-light leading-relaxed mb-6">
								I believe in writing{" "}
								<span className="text-white bg-primary px-2 py-1 rounded font-semibold">
									clean and maintainable code
								</span>
								. Every function should be purposeful, every variable meaningful, and every feature
								should serve a real user need.
							</p>

							<div className="grid md:grid-cols-3 gap-4">
								{philosophyPrinciples.map((principle, idx) => {
									const IconComponent = principle.icon;
									return (
										<HoverCard key={idx}>
											<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
												<IconComponent className="w-5 h-5 text-white" />
											</div>
											<h4 className="font-bold text-main dark:text-main mb-2">
												{principle.title}
											</h4>
											<p className="text-light dark:text-light text-sm">
												{principle.description}
											</p>
										</HoverCard>
									);
								})}
							</div>
						</div>
					)}

					{/* Approach */}
					{activeTab === "approach" && (
						<div className="animate-fadeIn">
							<div className="flex items-center mb-6 pb-3 border-b border-primary-hover dark:border-primary-hover">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow">
									<Code className="w-5 h-5 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-main dark:text-main">Development Approach</h2>
							</div>

							<div className="code-block relative bg-code rounded-xl overflow-hidden border border-code">
								{/* Header */}
								<div className="flex items-center justify-between px-4 py-2 bg-code-header border-b border-code">
									<div className="flex items-center gap-2">
										<div className="flex gap-1.5">
											<div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
											<div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
											<div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
										</div>
										<span className="text-subtle text-xs font-mono ml-2">myApproach.js</span>
									</div>
									<button
										onClick={copyToClipboard}
										className="copy-btn flex items-center gap-1 px-2.5 py-1.5 text-xs text-subtle hover:text-code bg-code-header hover:bg-surface-elevated rounded transition-colors"
									>
										{copied ? (
											<>
												<i className="fas fa-check"></i> Copied!
											</>
										) : (
											<>
												<i className="far fa-copy"></i> Copy
											</>
										)}
									</button>
								</div>

								{/* Code Content */}
								<div className="p-4 overflow-x-auto">
									<SyntaxHighlighter
										language="javascript"
										style={vscDarkPlus}
										customStyle={{ margin: 0, background: "transparent" }}
									>
										{approachCode}
									</SyntaxHighlighter>
								</div>
							</div>

							{copied && (
								<div className="mt-4 px-4 py-2 bg-primary-light text-primary rounded-lg text-center">
									<i className="fas fa-check-circle mr-2"></i> Code copied to clipboard!
								</div>
							)}
						</div>
					)}

					{/* Interests */}
					{activeTab === "interests" && (
						<div className="animate-fadeIn">
							<div className="flex items-center mb-6 pb-3 border-b border-primary-hover dark:border-primary-hover">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow">
									<FolderOpen className="w-5 h-5 text-white" />
								</div>
								<h2 className="text-2xl font-bold text-main dark:text-main">Areas of Interest</h2>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								{interests.map((interest, idx) => {
									const IconComponent = interest.icon;
									return (
										<HoverCard key={idx}>
											<div className="flex items-start">
												<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
													<IconComponent className="w-4 h-4 text-white" />
												</div>
												<div>
													<h4 className="font-bold text-main dark:text-main mb-1">
														{interest.title}
													</h4>
													<p className="text-light dark:text-light text-sm">
														{interest.description}
													</p>
												</div>
											</div>
										</HoverCard>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Custom fade animation */}
			<style>
				{`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
			</style>
		</div>
	);
}
