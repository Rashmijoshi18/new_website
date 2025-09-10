import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, User, Code, Briefcase, Mail, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Constants
const NAVIGATION_ITEMS = [
	{ to: "/", label: "Overview", icon: Home },
	{ to: "/about", label: "About", icon: User },
	{ to: "/projects", label: "Projects", icon: Code },
	{ to: "/skills", label: "Skills", icon: Briefcase },
	{ to: "/contact", label: "Contact", icon: Mail },
];

const PROFILE = {
	name: "Rashmi Joshi",
	username: "rashmi3699",
	title: "Full Stack Developer",
	subtitle: "A Computer Science Student",
	tagline: "Practice • Learn • Improve",
	mobileTagline: "Coding • Learning • Growing",
};

// Subcomponents
const ProfileAvatar = ({ size = "md", className = "" }) => {
	const sizeClasses = {
		sm: "w-10 h-10 text-2xl",
		md: "w-12 h-12 text-3xl",
		lg: "w-14 h-14 text-3xl",
	};

	return (
		<div
			className={`rounded bg-white bg-opacity-20 backdrop-blur-sm text-theme-sidebar-accent flex items-center justify-center font-bold border-2 border-white border-opacity-30 shadow-lg ${sizeClasses[size]} ${className}`}
		>
			R
		</div>
	);
};

const NavigationLink = ({ item, onClick, collapsed = false }) => {
	const Icon = item.icon;

	return (
		<NavLink
			to={item.to}
			onClick={onClick}
			className={({ isActive }) =>
				`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative group ${
					isActive
						? "bg-theme-primary text-white shadow-md"
						: "text-theme-secondary hover:bg-theme-surface hover:text-theme-primary"
				} ${collapsed ? "justify-center px-3 mx-0" : ""}`
			}
		>
			<Icon className="w-5 h-5 flex-shrink-0 hover:scale-110 transition-transform" />
			{!collapsed && <span className="font-semibold">{item.label}</span>}
			{collapsed && (
				<div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1.5 bg-theme-surface text-theme-primary border border-theme rounded-md text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
					{item.label}
				</div>
			)}
		</NavLink>
	);
};

const MobileNavbar = ({ isOpen, onToggle }) => (
	<div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-theme-background border-b-2 border-theme-primary px-4 py-3 shadow-md">
		<Link to="/" className="flex items-center gap-3">
			<div className="w-10 h-10 rounded bg-theme-sidebar-accent text-white flex items-center justify-center text-lg font-bold shadow-sm">
				R
			</div>
			<div className="flex flex-col">
				<span className="text-lg font-bold text-theme-primary leading-tight">{PROFILE.name}</span>
				<span className="text-xs text-theme-brand font-semibold">{PROFILE.username}</span>
			</div>
		</Link>

		<div className="flex items-center gap-2">
			<ThemeToggle />
			<button
				onClick={onToggle}
				className="p-2 rounded hover:bg-theme-surface transition-colors"
				aria-label="Toggle navigation menu"
			>
				{isOpen ? (
					<X className="w-6 h-6 text-theme-primary" />
				) : (
					<Menu className="w-6 h-6 text-theme-primary" />
				)}
			</button>
		</div>
	</div>
);

const MobileDrawer = ({ isOpen, onClose }) => (
	<>
		{/* Backdrop */}
		{isOpen && (
			<div className="lg:hidden fixed inset-0 backdrop-blur-xs z-40" onClick={onClose} aria-hidden="true" />
		)}

		{/* Drawer */}
		<div
			className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-theme-background z-50 transform transition-transform duration-300 flex flex-col shadow-2xl ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			{/* Header */}
			<div className="bg-theme-primary p-6 text-white">
				<div className="flex items-center gap-4">
					<ProfileAvatar size="lg" />
					<div>
						<div className="text-lg font-bold">{PROFILE.name}</div>
						<div className="text-sm opacity-90">Web Developer</div>
						<div className="text-xs opacity-75 mt-1">{PROFILE.mobileTagline}</div>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<nav className="flex-1 p-4 space-y-2 overflow-y-auto">
				<div className="text-xs font-semibold text-theme-subtle uppercase tracking-wider mb-3 px-2">
					Navigation
				</div>
				{NAVIGATION_ITEMS.map((item) => (
					<NavigationLink key={item.to} item={item} onClick={onClose} />
				))}
			</nav>

			{/* Footer */}
			<div className="p-4 border-t border-theme bg-theme-surface">
				<div className="text-xs text-theme-subtle text-center">Made with ❤️ by {PROFILE.name}</div>
			</div>
		</div>
	</>
);

const DesktopSidebar = ({ expanded, onToggle }) => (
	<aside
		className={`hidden lg:flex flex-col h-screen sticky top-0 bg-theme-background border-r-2 border-theme-primary transition-all duration-300 shadow-lg ${
			expanded ? "w-72" : "w-20"
		}`}
	>
		{/* Header */}
		<div className={`bg-theme-primary text-white relative overflow-hidden ${expanded ? "p-6" : "p-3"}`}>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-8 -translate-y-8" />
				<div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-6 translate-y-6" />
			</div>

			<div className="relative z-10">
				<div className={`flex items-center mb-3 ${expanded ? "gap-4" : "justify-center"}`}>
					<ProfileAvatar size={expanded ? "md" : "sm"} />
					{expanded && (
						<div>
							<div className="text-xl font-bold">{PROFILE.name}</div>
							<div className="text-sm opacity-90">{PROFILE.username}</div>
						</div>
					)}
				</div>
				{expanded && (
					<div className="text-xs opacity-80 bg-white text-theme-sidebar-accent bg-opacity-10 rounded px-2 py-1 inline-block">
						{PROFILE.subtitle}
					</div>
				)}
			</div>
		</div>

		{/* Toggle Button */}
		<button
			onClick={onToggle}
			className="absolute top-24 -right-3 w-6 h-6 bg-theme-primary hover:bg-theme-primary-hover text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
			aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
		>
			{expanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
		</button>

		{/* Navigation */}
		<nav className="flex-1 p-4 space-y-2 overflow-y-auto">
			<div
				className={`text-xs font-bold text-theme-subtle uppercase tracking-wider mb-4 ${
					expanded ? "px-3" : "text-center"
				}`}
			>
				{expanded ? "Menu" : "•••"}
			</div>
			{NAVIGATION_ITEMS.map((item) => (
				<NavigationLink key={item.to} item={item} collapsed={!expanded} />
			))}
		</nav>

		{/* Footer */}
		<div className={`p-4 border-t border-theme bg-surface-gradient ${!expanded ? "text-center" : ""}`}>
			{expanded ? (
				<div className="flex items-center justify-between">
					<div className="flex-1">
						<div className="text-xs font-semibold text-theme-brand mb-2">{PROFILE.title}</div>
						<div className="text-xs text-theme-secondary leading-relaxed">{PROFILE.tagline}</div>
					</div>
					<div className="ml-3">
						<ThemeToggle />
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center gap-2">
					<ThemeToggle />
				</div>
			)}
		</div>
	</aside>
);

// Main Component
export default function Sidebar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [desktopExpanded, setDesktopExpanded] = useState(true);

	const closeMobileDrawer = () => setMobileOpen(false);
	const toggleMobileDrawer = () => setMobileOpen((prev) => !prev);
	const toggleDesktopSidebar = () => setDesktopExpanded((prev) => !prev);

	return (
		<>
			<MobileNavbar isOpen={mobileOpen} onToggle={toggleMobileDrawer} />

			<MobileDrawer isOpen={mobileOpen} onClose={closeMobileDrawer} />

			<DesktopSidebar expanded={desktopExpanded} onToggle={toggleDesktopSidebar} />
		</>
	);
}
