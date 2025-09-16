import React, { useState, memo } from "react";
import {
	Code,
	Database,
	Globe,
	Server,
	Trophy,
	Award,
	Users,
	MessageCircle,
	Target,
	Lightbulb,
	Heart,
	Zap,
} from "lucide-react";
import react_js from "../assets/react.pdf";
import dsa from "../assets/dsa_mooc.png";
import geeksforgeeks from "../assets/hackathon.pdf";
import cpp from "../assets/c++.pdf";

// Memoized skill item
const SkillItem = memo(({ skill }) => (
	<div className="flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-300 custom-hover">
		<div className="flex items-center space-x-2 sm:space-x-3">
			<div className="w-2 h-2 bg-primary rounded-full"></div>
			<span className="text-main dark:text-main font-medium text-sm sm:text-base">{skill.name}</span>
			<span className="text-light dark:text-light text-xs sm:text-sm">({skill.category})</span>
		</div>
	</div>
));

// Memoized soft skill card
const SoftSkillCard = memo(({ skill }) => (
	<div className="rounded-lg p-4 sm:p-5 bg-surface-elevated dark:bg-surface-elevated shadow-sm border border-main dark:border-main transition-all duration-300 custom-hover">
		<div className="flex justify-center mb-2 sm:mb-3">
			<div className="p-2 sm:p-3 bg-primary-light dark:bg-primary-light text-primary rounded-full">
				{skill.icon}
			</div>
		</div>
		<div className="text-center">
			<h4 className="font-semibold text-main dark:text-main mb-1 sm:mb-2 text-sm sm:text-base">{skill.name}</h4>
			<p className="text-light dark:text-light text-xs sm:text-sm">{skill.description}</p>
		</div>
	</div>
));

// Memoized achievement card
const AchievementCard = memo(({ ach }) => (
	<div className="rounded-lg p-4 sm:p-5 bg-surface-elevated dark:bg-surface-elevated shadow-sm border border-main dark:border-main transition-all duration-300 custom-hover">
		<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
			<div className="p-2 sm:p-3 bg-primary-light dark:bg-primary-light text-primary-bright rounded-lg">
				{ach.icon}
			</div>
			<div className="flex-1">
				<h3 className="font-semibold text-main dark:text-main mb-1 text-sm sm:text-base">{ach.title}</h3>
				<p className="text-light dark:text-light text-xs sm:text-sm">{ach.issuer}</p>
				<p className="text-primary-bright text-xs sm:text-sm font-medium mb-2 sm:mb-3">{ach.date}</p>
				{ach.certificate && (
					<a
						href={ach.certificate}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-xs sm:text-sm font-medium text-primary hover:underline"
					>
						View Certificate
					</a>
				)}
			</div>
		</div>
	</div>
));

const SimpleSkillsPage = () => {
	const [activeTab, setActiveTab] = useState("skills");

	const skills = [
		{ name: "JavaScript", level: 90, category: "Frontend", icon: <Code /> },
		{ name: "React.js", level: 85, category: "Frontend", icon: <Code /> },
		{ name: "HTML/CSS", level: 95, category: "Frontend", icon: <Globe /> },
		{ name: "Tailwind/Bootstrap", level: 75, category: "Frontend", icon: <Code /> },
		{ name: "Node.js", level: 80, category: "Backend", icon: <Server /> },
		{ name: "Express.js", level: 80, category: "Backend", icon: <Server /> },
		{ name: "MongoDB", level: 75, category: "Database", icon: <Database /> },
		{ name: "MySQL", level: 80, category: "Database", icon: <Database /> },
		{ name: "Git/Github", level: 88, category: "Tool", icon: <Code /> },
		{ name: "Vite", level: 88, category: "Tool", icon: <Code /> },
		{ name: "Vercel", level: 88, category: "Hosting & Deployment", icon: <Code /> },
	];

	const achievements = [
		{ title: "React JS Concepts", date: "2025", icon: <Trophy />, issuer: "Tech Veda", certificate: react_js },
		{ title: "Cpp Certification", date: "2025", icon: <Award />, issuer: "Infosys", certificate: cpp },
		{
			title: "Hack-a-Throne",
			date: "2024",
			icon: <Database />,
			issuer: "GeeksforGeeks",
			certificate: geeksforgeeks,
		},
		{ title: "Introduction to DSA", date: "2025", icon: <Code />, issuer: "Coding Tantra", certificate: dsa },
	];

	const softSkills = [
		{ name: "Team Leadership", icon: <Users />, description: "Leading teams & coordinating projects" },
		{ name: "Communication", icon: <MessageCircle />, description: "Clear technical communication" },
		{ name: "Problem Solving", icon: <Lightbulb />, description: "Analytical thinking & solutions" },
		{ name: "Project Management", icon: <Target />, description: "Deliver projects on time & scope" },
		{ name: "Adaptability", icon: <Zap />, description: "Quick learning & adapting to tech" },
		{ name: "Empathy", icon: <Heart />, description: "Understanding team & user needs" },
	];

	const TabContent = () => {
		switch (activeTab) {
			case "skills":
				return (
					<div className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main animate-slide-up">
						<div className="bg-primary text-white px-4 sm:px-6 py-3 rounded-t-lg">
							<h3 className="text-lg sm:text-xl font-bold">Technical Skills</h3>
						</div>
						<div className="p-4 sm:p-6 space-y-3">
							{skills.map((skill, idx) => (
								<SkillItem key={idx} skill={skill} />
							))}
						</div>
					</div>
				);
			case "soft-skills":
				return (
					<div className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main animate-slide-up">
						<div className="bg-primary text-white px-4 sm:px-6 py-3 rounded-t-lg">
							<h3 className="text-lg sm:text-xl font-bold">Soft Skills</h3>
						</div>
						<div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
							{softSkills.map((skill, idx) => (
								<SoftSkillCard key={idx} skill={skill} />
							))}
						</div>
					</div>
				);
			case "achievements":
				return (
					<div className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main animate-slide-up">
						<div className="bg-primary text-white px-4 sm:px-6 py-3 rounded-t-lg">
							<h3 className="text-lg sm:text-xl font-bold">Achievements</h3>
						</div>
						<div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
							{achievements.map((ach, idx) => (
								<AchievementCard key={idx} ach={ach} />
							))}
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 pt-16 lg:pt-8">
			<div className="max-w-7xl mx-auto py-4 sm:py-8">
				{/* Heading */}
				<div className="text-center mb-6 sm:mb-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
						Professional Profile
					</h2>
					<p className="text-light dark:text-light text-sm sm:text-base">
						Technical skills, soft skills, and achievements
					</p>
				</div>

				{/* Navigation Tabs */}
				<div className="flex justify-center mb-6 sm:mb-8">
					<div className="flex flex-col sm:flex-row bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main overflow-hidden">
						{["skills", "soft-skills", "achievements"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 text-sm sm:text-base ${
									activeTab === tab
										? "bg-primary text-white shadow-md"
										: "text-light dark:text-light hover:text-primary hover:bg-surface-elevated dark:hover:bg-surface-elevated"
								}`}
							>
								{tab === "skills"
									? "Technical Skills"
									: tab === "soft-skills"
									? "Soft Skills"
									: "Achievements"}
							</button>
						))}
					</div>
				</div>

				{/* Tab Content */}
				<TabContent />
			</div>

			<style>{`
				.animate-slide-up { 
					animation: slideUp 0.6s ease-in-out; 
				}
				@keyframes slideUp { 
					from { opacity: 0; transform: translateY(20px); } 
					to { opacity: 1; transform: translateY(0); } 
				}
				.custom-hover { position: relative; transition: all 0.3s ease; }
				.custom-hover:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 6px 12px rgba(0,0,0,0.08); }
				.custom-hover:active { transform: scale(0.98); }
			`}</style>
		</div>
	);
};

export default SimpleSkillsPage;
