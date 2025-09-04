import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-3 py-2 rounded-md
        text-sm font-medium tracking-wide transition-all duration-200
        ${
          isActive
            ? "bg-[#238636] text-white shadow-sm"
            : "text-gray-400 hover:text-white hover:bg-[#161b22]"
        }
        `
      }
    >
      {/* Icon (always visible) */}
      {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}

      {/* Label (responsive: hidden when sidebar collapsed on desktop, always visible on mobile) */}
      <span className="truncate">{label}</span>
    </NavLink>
  );
}
