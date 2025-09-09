import React, { useState } from "react";
import { Mail, MapPin, Send, Check, Clock, User, MessageCircle, Linkedin } from "lucide-react";

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	// Handle input
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Simple form validation
	const validateForm = () => {
		let newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Enter a valid email";
		}
		if (!formData.message.trim()) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setSuccess(true);
		setFormData({ name: "", email: "", message: "" });

		setTimeout(() => setSuccess(false), 4000);
	};

	return (
		<div className="min-h-screen flex flex-col pt-20 sm:pt-24">
			{/* Header */}
			<header className="bg-surface dark:bg-surface border-b border-main dark:border-main">
				<div className="max-w-3xl mx-auto px-4 py-10 sm:py-12 text-center">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-bright mb-4">
						Get In <span className="text-primary-bright">Touch</span>
					</h1>
					<p className="text-light dark:text-light max-w-lg sm:max-w-xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
						Have a project in mind? Let’s discuss how we can work together to bring your ideas to life.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-primary-bright">
						<Clock size={16} />
						<span>Typically responds within 24 hours</span>
					</div>
				</div>
			</header>

			{/* Content */}
			<main className="flex-1 max-w-6xl mx-auto px-4 py-8 sm:py-12">
				{/* Contact Cards */}
				<section className="mb-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
						{[
							{
								icon: <Mail size={24} className="text-primary-bright" />,
								title: "Email",
								desc: "rashmijoshi3699@gmail.com",
								subtitle: "Send me a message anytime",
								link: "mailto:rashmijoshi3699@gmail.com",
								target: "_self",
							},
							{
								icon: <Linkedin size={24} className="text-primary-bright" />,
								title: "LinkedIn",
								desc: "linkedin.com/in/rashmi3699",
								subtitle: "Connect with me on LinkedIn",
								link: "https://www.linkedin.com/in/rashmi3699/",
								target: "_blank",
							},
							{
								icon: <MapPin size={24} className="text-primary-bright" />,
								title: "Location",
								desc: "India",
								subtitle: "Available remotely worldwide",
								link: "https://www.google.com/maps/place/India",
								target: "_blank",
							},
						].map((contact, idx) => (
							<a
								key={idx}
								href={contact.link}
								target={contact.target}
								rel={contact.target === "_blank" ? "noopener noreferrer" : ""}
								className="bg-surface dark:bg-surface rounded-lg p-4 sm:p-6 text-center border border-main dark:border-main 
								hover:shadow-lg focus:shadow-lg active:shadow-lg hover:border-primary-bright dark:hover:border-primary-bright
								transition-all block cursor-pointer"
							>
								<div className="mb-3 flex justify-center">{contact.icon}</div>
								<h3 className="font-semibold text-main dark:text-main mb-1 sm:mb-2 text-base sm:text-lg">
									{contact.title}
								</h3>
								<p className="text-primary-bright font-medium text-sm sm:text-base mb-1 sm:mb-2 break-words">
									{contact.desc}
								</p>
								<p className="text-light dark:text-light text-xs sm:text-sm">{contact.subtitle}</p>
							</a>
						))}
					</div>
				</section>

				{/* Contact Form */}
				<section className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main p-4 sm:p-6 md:p-8">
					<div className="text-center mb-6 sm:mb-8">
						<h2 className="text-xl sm:text-2xl font-bold text-primary-bright mb-2">Send a Message</h2>
						<p className="text-light dark:text-light text-sm sm:text-base">
							Fill out the form below and I’ll get back to you soon
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
						{/* Name + Email */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
							<div>
								<label className="block text-main dark:text-main font-medium mb-2 text-sm">
									<User size={16} className="inline mr-2" />
									Full Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="Your name"
									className={`w-full p-3 border rounded-lg outline-none font-medium bg-background dark:bg-background text-main dark:text-main text-sm sm:text-base focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.name ? "border-red-400" : "border-main dark:border-main"
									}`}
								/>
								{errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
							</div>

							<div>
								<label className="block text-main dark:text-main font-medium mb-2 text-sm">
									<Mail size={16} className="inline mr-2" />
									Email Address
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="your.email@example.com"
									className={`w-full p-3 border rounded-lg outline-none bg-background dark:bg-background text-main dark:text-main text-sm sm:text-base focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.email ? "border-red-400" : "border-main dark:border-main"
									}`}
								/>
								{errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
							</div>
						</div>

						{/* Message */}
						<div>
							<label className="block text-main dark:text-main font-medium mb-2 text-sm">
								<MessageCircle size={16} className="inline mr-2" />
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								placeholder="How can I help you with your project?"
								rows="4"
								className={`w-full p-3 border rounded-lg outline-none resize-none bg-background dark:bg-background text-main dark:text-main text-sm sm:text-base focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
									errors.message ? "border-red-400" : "border-main dark:border-main"
								}`}
							/>
							{errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
						</div>

						{/* Button */}
						<button
							type="submit"
							className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-theme-primary-hover transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
						>
							<Send size={18} />
							<span>Send Message</span>
						</button>
					</form>
				</section>

				{/* Additional Info */}
				<section className="mt-10 sm:mt-12 text-center">
					<div className="bg-primary-light dark:bg-primary-light rounded-lg p-4 sm:p-6 border border-main dark:border-main">
						<h3 className="font-semibold text-main dark:text-main mb-4 sm:mb-6 text-base sm:text-lg">
							What to expect after you reach out
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
							{[
								"I'll respond within 24 hours",
								"We'll discuss your project needs",
								"I'll provide a custom proposal",
							].map((step, i) => (
								<div key={i} className="flex flex-col items-center">
									<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface-elevated dark:bg-surface-elevated flex items-center justify-center text-primary-bright font-bold mb-2 sm:mb-3 text-sm sm:text-base">
										{i + 1}
									</div>
									<p className="text-main dark:text-main">{step}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			{/* Success Toast */}
			{success && (
				<div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-primary-bright text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in text-xs sm:text-sm">
					<Check size={18} />
					<span>Message sent successfully!</span>
				</div>
			)}
		</div>
	);
};

export default ContactPage;
