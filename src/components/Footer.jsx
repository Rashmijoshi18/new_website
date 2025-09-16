import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full border-t border-main bg-footer-gradient text-main text-sm transition-colors duration-300">
			<div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-6">
				{/* Left Section */}
				<div className="flex items-center mb-3 md:mb-0 text-center md:text-left">
					<p>
						© {new Date().getFullYear()} <span className="font-semibold text-primary">Rashmi Joshi</span>.
						<span className="ml-1">All rights reserved.</span>
					</p>
				</div>

				{/* Social Links */}
				<div className="flex gap-6">
					<a
						href="https://github.com/Rashmijoshi18"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-main hover-text-primary transition-all"
					>
						<Github className="w-4 h-4" />
						<span className="hidden sm:inline font-medium">GitHub</span>
					</a>
					<a
						href="https://linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-main hover-text-primary transition-all"
					>
						<Linkedin className="w-4 h-4" />
						<span className="hidden sm:inline font-medium">LinkedIn</span>
					</a>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=rashmijoshi3699@gmail.com&su=Hello%20Rashmi&body=I%20would%20like%20to%20connect%20with%20you."
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-main hover-text-primary transition-all"
					>
						<Mail className="w-4 h-4" />
						<span className="hidden sm:inline font-medium">Email</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
