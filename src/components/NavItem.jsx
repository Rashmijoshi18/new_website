// // src/components/NavItem.jsx
// /**
//  * NavItem.jsx
//  * - small wrapper for a nav link used inside Sidebar
//  * props:
//  *  - to (string) route path
//  *  - icon (React node) optional
//  *  - label (string)
//  */
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function NavItem({ to, icon, label }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150
//         ${isActive ? 'bg-slate-100 dark:bg-slate-800 font-semibold' : 'hover:bg-slate-50 dark:hover:bg-slate-900'}`
//       }
//       aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
//     >
//       {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
//       <span className="text-sm">{label}</span>
//     </NavLink>
//   )
// }
/**
 * NavItem.jsx
 * - Sidebar link with green active state
 * - Matches the screenshot style
 */

import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium tracking-wide
        transition-all duration-200
        ${
          isActive
            ? "bg-green-600 text-white shadow-sm"
            : "text-gray-400 hover:text-white hover:bg-[#161b22]"
        }`
      }
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
}
