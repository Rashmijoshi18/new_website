
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  ChevronLeft, // Added ChevronLeft icon
  ChevronRight // Added ChevronRight icon
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const navItems = [
    { to: "/", label: "Overview", icon: <Home className="w-5 h-5" /> },
    { to: "/about", label: "About", icon: <User className="w-5 h-5" /> },
    { to: "/projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
    { to: "/skills", label: "Skills", icon: <Briefcase className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-b-2 border-[#0F9D58] px-4 py-3 shadow-md">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#0F9D58] text-white flex items-center justify-center text-lg font-bold shadow-sm">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800 leading-tight">Rashmi Joshi</span>
            <span className="text-xs text-[#0F9D58] font-semibold">Portfolio</span>
          </div>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          {open ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {open && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 flex flex-col shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#0F9D58] to-[#0B7A43] p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white flex items-center justify-center text-xl font-bold border-2 border-white border-opacity-30">
              G
            </div>
            <div>
              <div className="text-lg font-bold">Rashmi Joshi</div>
              <div className="text-sm opacity-90">Web Developer</div>
              <div className="text-xs opacity-75 mt-1">Coding • Learning • Growing</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Navigation
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#0F9D58] text-white shadow-md transform scale-[1.02]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#0F9D58] hover:translate-x-1"
                }`
              }
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            Made with ❤️ by Rashmi Joshi
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 bg-white border-r-2 border-[#0F9D58] transition-all duration-300 shadow-lg ${
          expanded ? "w-72" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0F9D58] to-[#0B7A43] p-6 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-6 translate-y-6"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded bg-white bg-opacity-20 backdrop-blur-sm text-white flex items-center justify-center text-xl font-bold border-2 border-white border-opacity-30 shadow-lg">
                R
              </div>
              {expanded && (
                <div>
                  <div className="text-xl font-bold">Rashmi Joshi</div>
                  <div className="text-sm opacity-90">Portfolio</div>
                </div>
              )}
            </div>
            {expanded && (
              <div className="text-xs opacity-80 bg-white bg-opacity-10 rounded px-2 py-1 inline-block">
                A Computer Science Portal
              </div>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute top-24 -right-3 w-6 h-6 bg-[#0F9D58] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0B7A43] transition-colors z-10"
        >
          {expanded ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className={`text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 ${expanded ? 'px-3' : 'text-center'}`}>
            {expanded ? 'Menu' : '•••'}
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
                  isActive
                    ? "bg-[#0F9D58] text-white shadow-md"
                    : "text-gray-700 hover:bg-green-50 hover:text-[#0F9D58]"
                } ${!expanded ? 'justify-center' : ''}`
              }
            >
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              {expanded && <span className="font-semibold">{item.label}</span>}
              {!expanded && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {item.label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className={`p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-green-50 ${!expanded ? 'text-center' : ''}`}>
          {expanded ? (
            <div>
              <div className="text-xs font-semibold text-[#0F9D58] mb-2">Portfolio</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Practice • Learn • Improve
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-[#0F9D58] rounded-full animate-pulse"></div>
                <div className="text-xs text-gray-500">Ready to code</div>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded bg-[#0F9D58] bg-opacity-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#0F9D58] rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}