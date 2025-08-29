// src/components/SkillPill.jsx
/**
 * SkillPill.jsx
 * small presentational component for showing skills
 */
import React from 'react'

export default function SkillPill({ label }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
      {label}
    </span>
  )
}
