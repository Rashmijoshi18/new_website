// src/components/ThemeToggle.jsx
/**
 * ThemeToggle.jsx
 * - toggles dark/light theme using theme utils
 */
import React, { useState, useEffect } from 'react'
import { getSavedTheme, toggleTheme } from '../utils/theme'
import { Sun, Moon } from 'lucide-react' // if lucide-react installed

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getSavedTheme())

  useEffect(() => {
    setTheme(getSavedTheme())
  }, [])

  function handleToggle() {
    const next = toggleTheme()
    setTheme(next)
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      title="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
