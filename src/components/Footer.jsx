/**
 * Footer.jsx
 * - simple footer placed at the bottom of the app
 * - consistent with dark/light theme
 */

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0d1117] text-gray-400 text-sm py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left text */}
        <p>© {new Date().getFullYear()} Rashmi Joshi. All rights reserved.</p>

        {/* Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Rashmijoshi18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rashmijoshi3699@gmail.com"
            className="hover:text-green-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
