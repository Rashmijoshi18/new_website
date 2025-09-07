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
		<div className="min-h-screen flex flex-col">
			{/* Header */}
			<header className="bg-surface dark:bg-surface border-b border-main dark:border-main">
				<div className="max-w-3xl mx-auto px-4 py-12 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-primary-bright mb-4">
						Get In <span className="text-primary-bright">Touch</span>
					</h1>
					<p className="text-light dark:text-light max-w-xl mx-auto mb-6">
						Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
					</p>
					<div className="flex items-center justify-center gap-2 text-sm text-primary-bright">
						<Clock size={16} />
						<span>Typically responds within 24 hours</span>
					</div>
				</div>
			</header>

			{/* Content */}
			<main className="flex-1 max-w-6xl mx-auto px-4 py-12">
				<section className="mb-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								icon: <Mail size={24} className="text-primary-bright" />,
								title: "Email",
								desc: "rashmijoshi3699@gmail.com",
								subtitle: "Send me a message anytime",
								link: "https://mail.google.com/mail/?view=cm&fs=1&to=rashmijoshi3699@gmail.com&su=Hello%20Rashmi&body=I%20would%20like%20to%20connect%20with%20you.",
								target: "_blank", // open in new tab
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
								className="bg-surface dark:bg-surface rounded-lg p-6 text-center border border-main dark:border-main 
               hover:shadow-lg focus:shadow-lg active:shadow-lg hover:border-primary-bright dark:hover:border-primary-bright
               transition-all block cursor-pointer"
							>
								<div className="mb-4 flex justify-center">{contact.icon}</div>
								<h3 className="font-semibold text-main dark:text-main mb-2">{contact.title}</h3>
								<p className="text-primary-bright font-medium mb-2">{contact.desc}</p>
								<p className="text-light dark:text-light text-sm">{contact.subtitle}</p>
							</a>
						))}
					</div>
				</section>

				{/* Contact Form */}
				<section className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main p-6 md:p-8">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-primary-bright mb-2">Send a Message</h2>
						<p className="text-light dark:text-light">
							Fill out the form below and I'll get back to you soon
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Name + Email */}
						<div className="grid md:grid-cols-2 gap-6">
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
									className={`w-full p-3 border rounded-lg outline-none font-medium bg-background dark:bg-background text-main dark:text-main focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.name ? "border-red-400" : "border-main dark:border-main"
									}`}
								/>
								{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
									className={`w-full p-3 border rounded-lg outline-none bg-background dark:bg-background text-main dark:text-main focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.email ? "border-red-400" : "border-main dark:border-main"
									}`}
								/>
								{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
								rows="5"
								className={`w-full p-3 border rounded-lg outline-none resize-none bg-background dark:bg-background text-main dark:text-main focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
									errors.message ? "border-red-400" : "border-main dark:border-main"
								}`}
							/>
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
						</div>

						{/* Button */}
						<button
							type="submit"
							className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-theme-primary-hover transition-colors flex items-center justify-center gap-2"
						>
							<Send size={18} />
							<span>Send Message</span>
						</button>
					</form>
				</section>

				{/* Additional Info */}
				<section className="mt-12 text-center">
					<div className="bg-primary-light dark:bg-primary-light rounded-lg p-6 border border-main dark:border-main">
						<h3 className="font-semibold text-main dark:text-main mb-6">
							What to expect after you reach out
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
							{[
								"I'll respond within 24 hours",
								"We'll discuss your project needs",
								"I'll provide a custom proposal",
							].map((step, i) => (
								<div key={i} className="flex flex-col items-center">
									<div className="w-10 h-10 rounded-full bg-surface-elevated dark:bg-surface-elevated flex items-center justify-center text-primary-bright font-bold mb-3">
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
				<div className="fixed bottom-6 right-6 bg-primary-bright text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
					<Check size={20} />
					<span>Message sent successfully!</span>
				</div>
			)}
		</div>
	);
};

export default ContactPage;
