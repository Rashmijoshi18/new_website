import React, { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { getSavedTheme, toggleTheme } from "../utils/theme";

const THEME_CHANGE_EVENT = "themechange";
const STORAGE_KEY = "theme";

/**
 * Theme Toggle Component
 * Provides a button to switch between light and dark themes
 * Synchronizes across multiple instances and browser tabs
 */
export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(() => getSavedTheme() === "dark");

	// Handle theme toggle with event synchronization
	const handleToggle = useCallback(() => {
		const newTheme = toggleTheme();
		const isNewThemeDark = newTheme === "dark";

		setIsDark(isNewThemeDark);

		// Sync with other ThemeToggle instances on the same page
		window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: newTheme }));
	}, []);

	// Handle storage changes (cross-tab synchronization)
	const handleStorageChange = useCallback((event) => {
		if (event.key === STORAGE_KEY && event.newValue) {
			setIsDark(event.newValue === "dark");
		}
	}, []);

	// Handle custom theme change events (same-page synchronization)
	const handleThemeChange = useCallback((event) => {
		setIsDark(event.detail === "dark");
	}, []);

	useEffect(() => {
		// Ensure initial state is correct
		const currentTheme = getSavedTheme();
		setIsDark(currentTheme === "dark");

		// Set up event listeners
		window.addEventListener("storage", handleStorageChange);
		window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

		// Cleanup event listeners
		return () => {
			window.removeEventListener("storage", handleStorageChange);
			window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
		};
	}, [handleStorageChange, handleThemeChange]);

	const buttonLabel = isDark ? "Switch to light mode" : "Switch to dark mode";
	const IconComponent = isDark ? Sun : Moon;
	const iconColorClass = isDark ? "text-yellow-400" : "text-gray-700 dark:text-gray-300";
	const hoverRotation = isDark ? "hover:rotate-12" : "hover:-rotate-12";

	return (
		<button
			onClick={handleToggle}
			className="p-2 rounded-full hover-bg-surface-hover transition transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
			// className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:slate-300 focus:ring-offset-2 dark:focus:ring-offset-gray-100"
			aria-label={buttonLabel}
			title={buttonLabel}
			type="button"
		>
			<IconComponent
				className={`w-5 h-5 transition-transform ${iconColorClass} ${hoverRotation}`}
				aria-hidden="true"
			/>
		</button>
	);
}
