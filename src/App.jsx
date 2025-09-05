import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
	return (
		<div className="min-h-screen  text-gray-800 transition-colors flex flex-col lg:flex-row">
			{/* Left Sidebar */}
			<Sidebar />

			{/* Main content wrapper */}
			<div className="flex-1 flex flex-col">
				{/* Main content */}
				<main className="flex-1 px-4 sm:px-6 md:pl-2 md:pr-6 lg:pr-10 pt-16 lg:pt-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}
