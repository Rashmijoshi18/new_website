import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [expanded, setExpanded] = useState(true); // desktop expand/collapse
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const navItems = [
    { to: "/", label: "Overview", icon: <Home className="w-5 h-5" /> },
    { to: "/about", label: "About", icon: <User className="w-5 h-5" /> },
    { to: "/projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { to: "/skills", label: "Skills", icon: <Briefcase className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const socialItems = [
    { href: "#", icon: <Github className="w-4 h-4" /> },
    { href: "#", icon: <Linkedin className="w-4 h-4" /> },
    { href: "#", icon: <Twitter className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-[#0d1117] border-b border-gray-800 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#238636] text-white flex items-center justify-center text-sm font-semibold">
            R
          </div>
          <span className="text-sm font-semibold text-white">Rashmi</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-[#161b22] transition"
        >
          {open ? (
            <X className="w-6 h-6 text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-gray-800 z-40 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-800">
          <div className="w-10 h-10 rounded-full bg-[#238636] text-white flex items-center justify-center text-lg font-semibold">
            R
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Rashmi Joshi</div>
            <div className="text-xs text-gray-400">Software Engineer</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#238636]/20 text-[#238636]"
                    : "text-gray-300 hover:bg-[#161b22]"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer (Mobile stacked layout) */}
        <div className="p-4 mt-auto border-t border-gray-800 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#161b22] transition"
            >
              {darkMode ? (
                <Moon className="w-4 h-4 text-[#238636]" />
              ) : (
                <Sun className="w-4 h-4 text-[#238636]" />
              )}
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 text-xs rounded-md bg-[#238636] text-white hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
          <div className="flex gap-2 mt-2 justify-center">
            {socialItems.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-2 rounded-full hover:bg-[#161b22] transition text-gray-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rashmi Joshi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 left-0 z-20 bg-[#0d1117] border-r border-gray-800 transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col gap-2 p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#238636] text-white flex items-center justify-center text-lg font-semibold">
              R
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Rashmi Joshi
              </div>
              <div className="text-xs text-gray-400">Software Engineer</div>
            </div>
          </div>
          <div className="mt-3 border-t border-gray-700"></div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#238636]/20 text-[#238636]"
                    : "text-gray-300 hover:bg-[#161b22]"
                }`
              }
            >
              {item.icon}
              {expanded && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Footer (Desktop aligned like main footer) */}
        <div className="border-t border-gray-800 py-4 px-6 flex flex-row items-start justify-between">
          {/* Social icons */}
          <div className="flex gap-4">
            {socialItems.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-2 rounded-full hover:bg-[#161b22] transition text-gray-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          {/* <p className="text-sm text-gray-400 whitespace-nowrap">
            © {new Date().getFullYear()} Rashmi Joshi. All rights reserved.
          </p> */}
        </div>
      </aside>
    </>
  );
}
