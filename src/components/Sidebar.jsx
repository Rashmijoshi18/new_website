// // // src/components/Sidebar.jsx
// // /**
// //  * Sidebar.jsx
// //  * - left persistent sidebar on desktop
// //  * - collapses to a top/bottom bar on narrow screens
// //  * - contains nav links, theme switch and small profile
// //  */

// // import React, { useState } from 'react'
// // import NavItem from './NavItem'
// // import ThemeToggle from './ThemeToggle'
// // import { Home, User, Code, Briefcase, Mail } from 'lucide-react'
// // import { Link } from 'react-router-dom'

// // export default function Sidebar() {
// //   const [open, setOpen] = useState(true) // desktop default open; you can add toggle logic

// //   return (
// //     <aside
// //       className={`h-screen sticky top-0 left-0 z-20 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800
// //         ${open ? 'w-64' : 'w-20'} transition-all duration-200`}
// //     >
// //       <div className="h-full flex flex-col p-4">
// //         {/* Profile block */}
// //         <div className="flex items-center gap-3 mb-6">
// //           <Link to="/" className="flex items-center gap-3">
// //             <div className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-lg font-medium">
// //               R
// //             </div>
// //             <div className={`${open ? 'block' : 'hidden'}`}>
// //               <div className="text-sm font-semibold">Rashmi Joshi</div>
// //               <div className="text-xs text-slate-500 dark:text-slate-400">Software Engineer</div>
// //             </div>
// //           </Link>
// //         </div>

// //         {/* Nav links */}
// //         <nav className="flex-1 space-y-1">
// //           <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Home" />
// //           <NavItem to="/about" icon={<User className="w-5 h-5" />} label="About" />
// //           <NavItem to="/projects" icon={<Code className="w-5 h-5" />} label="Projects" />
// //           <NavItem to="/experience" icon={<Briefcase className="w-5 h-5" />} label="Experience" />
// //           <NavItem to="/contact" icon={<Mail className="w-5 h-5" />} label="Contact" />
// //         </nav>

// //         {/* Utilities */}
// //         <div className="mt-4">
// //           <div className="flex items-center justify-between gap-3">
// //             <ThemeToggle />
// //             <button
// //               onClick={() => setOpen(s => !s)}
// //               className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
// //               title="Toggle sidebar"
// //             >
// //               {/* simple hamburger / chevron */}
// //               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* copyright / small footer */}
// //         <div className={`mt-6 text-xs text-slate-500 dark:text-slate-400 ${open ? '' : 'hidden'}`}>
// //           © {new Date().getFullYear()} Rashmi
// //         </div>
// //       </div>
// //     </aside>
// //   )
// // }

// /**
//  * Sidebar.jsx
//  * - Persistent left sidebar
//  * - Smooth clean design (doc-style)
//  * - Dark/light ready with green accent
//  */

// import React, { useState } from "react";
// import NavItem from "./NavItem";
// import ThemeToggle from "./ThemeToggle";
// import { Home, User, Code, Briefcase, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);

//   return (
//     <aside
//   className={`h-screen sticky top-0 left-0 z-20 
//     bg-[#0d1117] text-gray-200 border-r border-gray-800
//     ${open ? 'w-64' : 'w-20'} transition-all duration-200`}
// >

//     {/* <aside
//       className={`h-screen sticky top-0 left-0 z-20 flex flex-col border-r 
//         bg-gray-50 dark:bg-[#0d1117]
//         border-gray-200 dark:border-gray-800
//         ${open ? "w-64" : "w-20"} transition-all duration-300 ease-in-out`}
//     > */}
//       {/* Profile */}
//       <div className="flex items-center gap-3 p-4">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold shadow">
//             R
//           </div>
//           {open && (
//             <div>
//               <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
//                 Rashmi Joshi
//               </div>
//               <div className="text-xs text-gray-500 dark:text-gray-400">
//                 Software Engineer
//               </div>
//             </div>
//           )}
//         </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-2 py-4 space-y-1">
//         <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Home" />
//         <NavItem to="/about" icon={<User className="w-5 h-5" />} label="About" />
//         <NavItem to="/projects" icon={<Code className="w-5 h-5" />} label="Projects" />
//         <NavItem
//           to="/experience"
//           icon={<Briefcase className="w-5 h-5" />}
//           label="Experience"
//         />
//         <NavItem to="/contact" icon={<Mail className="w-5 h-5" />} label="Contact" />
//       </nav>

//       {/* Footer / Utilities */}
//       <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-800">
//         <div className="flex items-center justify-between">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen((s) => !s)}
//             className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//             title="Toggle sidebar"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 text-gray-600 dark:text-gray-300"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//         {open && (
//           <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
//             © {new Date().getFullYear()} Rashmi
//           </p>
//         )}
//       </div>
//     </aside>
//   );
// }
/**
 * Sidebar.jsx
 * - Persistent dark sidebar with green active nav
 * - Matches screenshot clean design
 */

import React, { useState } from "react";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`h-screen sticky top-0 left-0 z-20 flex flex-col
        bg-[#0d1117] border-r border-gray-800
        ${open ? "w-64" : "w-20"} transition-all duration-300`}
    >
      {/* Profile */}
      <div className="flex items-center gap-3 p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold">
            R
          </div>
          {open && (
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

      {/* Bottom Utilities */}
      <div className="p-4 mt-auto border-t border-gray-800">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <button
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-[#161b22] transition"
            title="Toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Rashmi</p>
        )}
      </div>
    </aside>
  );
}

