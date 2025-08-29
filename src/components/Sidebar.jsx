// import React, { useState } from "react";
// import NavItem from "./NavItem";
// import ThemeToggle from "./ThemeToggle";
// import { Home, User, Code, Briefcase, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);

//   return (
//     <aside
//       className={`h-screen sticky top-0 left-0 z-20 flex flex-col
//         bg-[#0d1117] border-r border-gray-800
//         ${open ? "w-64" : "w-20"} transition-all duration-300`}
//     >
//       {/* Profile */}
//       <div className="flex items-center gap-3 p-4">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold">
//             R
//           </div>
//           {open && (
//             <div>
//               <div className="text-sm font-semibold text-white">Rashmi Joshi</div>
//               <div className="text-xs text-gray-400">Software Engineer</div>
//             </div>
//           )}
//         </Link>
//       </div>

//       {/* Nav */}
//       <nav className="flex-1 px-2 py-4 space-y-1">
//         <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Home" />
//         <NavItem to="/about" icon={<User className="w-5 h-5" />} label="About" />
//         <NavItem to="/projects" icon={<Code className="w-5 h-5" />} label="Projects" />
//         <NavItem to="/experience" icon={<Briefcase className="w-5 h-5" />} label="Experience" />
//         <NavItem to="/contact" icon={<Mail className="w-5 h-5" />} label="Contact" />
//       </nav>

//       {/* Bottom Utilities */}
//       <div className="p-4 mt-auto border-t border-gray-800">
//         <div className="flex items-center justify-between">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen((s) => !s)}
//             className="p-2 rounded-md hover:bg-[#161b22] transition"
//             title="Toggle sidebar"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//         {open && (
//           <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Rashmi</p>
//         )}
//       </div>
//     </aside>
//   );
// }

import React, { useState } from "react";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false); // for mobile drawer
  const [expanded, setExpanded] = useState(true); // for desktop expand/collapse

  return (
    <>
      {/* 🔹 Top Navbar (Mobile only) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-[#0d1117] border-b border-gray-800 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold">
            R
          </div>
          <span className="text-sm font-semibold text-white">Rashmi</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-[#161b22] transition"
        >
          {open ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
        </button>
      </div>

      {/* 🔹 Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-gray-800 z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-800">
          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold">
            R
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Rashmi Joshi</div>
            <div className="text-xs text-gray-400">Software Engineer</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Home" />
          <NavItem to="/about" icon={<User className="w-5 h-5" />} label="About" />
          <NavItem to="/projects" icon={<Code className="w-5 h-5" />} label="Projects" />
          <NavItem to="/experience" icon={<Briefcase className="w-5 h-5" />} label="Experience" />
          <NavItem to="/contact" icon={<Mail className="w-5 h-5" />} label="Contact" />
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800">
          <ThemeToggle />
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Rashmi</p>
        </div>
      </div>

      {/* 🔹 Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-screen sticky top-0 left-0 z-20
          bg-[#0d1117] border-r border-gray-800
          transition-all duration-300 ${expanded ? "w-64" : "w-20"}`}
      >
        {/* Profile */}
        <div className="flex items-center gap-3 p-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold">
              R
            </div>
            {expanded && (
              <div>
                <div className="text-sm font-semibold text-white">Rashmi Joshi</div>
                <div className="text-xs text-gray-400">Software Engineer</div>
              </div>
            )}
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Home" />
          <NavItem to="/about" icon={<User className="w-5 h-5" />} label="About" />
          <NavItem to="/projects" icon={<Code className="w-5 h-5" />} label="Projects" />
          <NavItem to="/experience" icon={<Briefcase className="w-5 h-5" />} label="Experience" />
          <NavItem to="/contact" icon={<Mail className="w-5 h-5" />} label="Contact" />
        </nav>

        {/* Footer */}
        <div className="p-4 mt-auto border-t border-gray-800">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <button
              onClick={() => setExpanded((s) => !s)}
              className="p-2 rounded-md hover:bg-[#161b22] transition"
              title="Toggle sidebar"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          {expanded && (
            <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Rashmi</p>
          )}
        </div>
      </aside>
    </>
  );
}
