import React, { useState } from "react";
import { Mail, MapPin, Send, Check, Clock, User, MessageCircle, Linkedin } from "lucide-react";

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
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
		// Clear error when user starts typing
		if (errors[e.target.name]) {
			setErrors({
				...errors,
				[e.target.name]: "",
			});
		}
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
	const handleSubmit = async (e) => {
		e?.preventDefault?.();
		if (!validateForm() || isSubmitting) return;

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setSuccess(true);
		setFormData({ name: "", email: "", message: "" });
		setIsSubmitting(false);

		setTimeout(() => setSuccess(false), 4000);
	};

	return (
		<div className="min-h-screen flex flex-col pt-16 sm:pt-8 lg:pt-0 bg-background dark:bg-background">
			{/* Header */}
			<header className="bg-surface dark:bg-surface border-b border-main dark:border-main">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12 text-center">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-bright mb-3 sm:mb-4">
						Get In <span className="text-primary-bright">Touch</span>
					</h1>
					<p className="text-sm sm:text-base lg:text-lg text-light dark:text-light max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
						Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
					</p>
					<div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-primary-bright bg-surface-elevated dark:bg-surface-elevated px-3 sm:px-4 py-2 rounded-full">
						<Clock size={14} className="sm:w-4 sm:h-4" />
						<span className="whitespace-nowrap">Typically responds within 24 hours</span>
					</div>
				</div>
			</header>

			{/* Content */}
			<main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
				{/* Contact Cards */}
				<section className="mb-8 sm:mb-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{[
							{
								icon: <Mail size={24} className="text-primary-bright" />,
								title: "Email",
								desc: "rashmijoshi3699@gmail.com",
								subtitle: "Send me a message anytime",
								link: "https://mail.google.com/mail/?view=cm&fs=1&to=rashmijoshi3699@gmail.com&su=Hello%20Rashmi&body=I%20would%20like%20to%20connect%20with%20you.",
								target: "_blank",
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
                transition-all duration-300 block cursor-pointer hover:scale-105"
							>
								<div className="mb-4 flex justify-center">{contact.icon}</div>
								<h3 className="font-semibold text-main dark:text-main mb-2">{contact.title}</h3>
								<p className="text-primary-bright font-medium mb-2 text-sm sm:text-base break-all sm:break-normal">
									{contact.desc}
								</p>
								<p className="text-light dark:text-light text-sm">{contact.subtitle}</p>
							</a>
						))}
					</div>
				</section>

				{/* Contact Form */}
				<section className="bg-surface dark:bg-surface rounded-lg shadow-sm border border-main dark:border-main p-4 sm:p-6 lg:p-8">
					<div className="text-center mb-6 sm:mb-8">
						<h2 className="text-2xl sm:text-3xl font-bold text-primary-bright mb-2">Send a Message</h2>
						<p className="text-light dark:text-light">
							Fill out the form below and I'll get back to you soon
						</p>
					</div>

					<div className="space-y-4 sm:space-y-6">
						{/* Name + Email */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
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
									className={`w-full p-3 sm:p-4 border rounded-lg outline-none font-medium bg-background dark:bg-background text-main dark:text-main placeholder-light dark:placeholder-light focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.name
											? "border-red-400 bg-red-50 dark:bg-red-900/10"
											: "border-main dark:border-main"
									}`}
									disabled={isSubmitting}
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
									className={`w-full p-3 sm:p-4 border rounded-lg outline-none bg-background dark:bg-background text-main dark:text-main placeholder-light dark:placeholder-light focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
										errors.email
											? "border-red-400 bg-red-50 dark:bg-red-900/10"
											: "border-main dark:border-main"
									}`}
									disabled={isSubmitting}
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
								className={`w-full p-3 sm:p-4 border rounded-lg outline-none resize-none bg-background dark:bg-background text-main dark:text-main placeholder-light dark:placeholder-light focus:border-primary-bright focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-light transition-all ${
									errors.message
										? "border-red-400 bg-red-50 dark:bg-red-900/10"
										: "border-main dark:border-main"
								}`}
								disabled={isSubmitting}
							/>
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
						</div>

						{/* Button */}
						<div
							onClick={handleSubmit}
							className={`w-full bg-primary text-white py-3 sm:py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer ${
								isSubmitting
									? "opacity-50 cursor-not-allowed bg-primary"
									: "hover:bg-theme-primary-hover"
							}`}
						>
							{isSubmitting ? (
								<>
									<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
									<span>Sending...</span>
								</>
							) : (
								<>
									<Send size={18} />
									<span>Send Message</span>
								</>
							)}
						</div>
					</div>
				</section>

				{/* What to Expect Section */}
				<section className="mt-8 sm:mt-12 text-center">
					<div className="bg-surface-elevated dark:bg-surface-elevated rounded-lg p-4 sm:p-6 border border-main dark:border-main">
						<h3 className="font-semibold text-main dark:text-main mb-6 text-lg sm:text-xl">
							What to expect after you reach out
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
							{[
								{
									step: "1",
									title: "I'll respond within 24 hours",
									icon: <Clock size={16} />,
								},
								{
									step: "2",
									title: "We'll discuss your project needs",
									icon: <MessageCircle size={16} />,
								},
								{
									step: "3",
									title: "I'll provide a custom proposal",
									icon: <Send size={16} />,
								},
							].map((item, i) => (
								<div key={i} className="flex flex-col items-center">
									<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-bright flex items-center justify-center text-white font-bold mb-3 text-sm sm:text-base">
										{item.step}
									</div>
									<p className="text-main dark:text-main font-medium text-sm sm:text-base">
										{item.title}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>

			{/* Success Toast */}
			{success && (
				<div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-primary-bright text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce z-50 max-w-xs sm:max-w-sm">
					<Check size={20} />
					<span className="text-sm sm:text-base">Message sent successfully!</span>
				</div>
			)}
		</div>
	);
};

export default ContactPage;
