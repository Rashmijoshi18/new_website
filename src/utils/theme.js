// src/utils/theme.js
/**
 * Theme helper
 * - uses localStorage 'theme' key ('light' | 'dark')
 * - applies the 'dark' class to document.documentElement when dark
 * - returns current theme
 */

/**
 * Get saved theme from localStorage. If none, detect prefer-color-scheme.
 */
export function getSavedTheme() {
  try {
    const t = localStorage.getItem('theme');
    if (t === 'dark' || t === 'light') return t;
  } catch (e) {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

/**
 * Apply theme to document root and persist.
 * @param {'light'|'dark'} theme
 */
export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

/**
 * Toggle current theme and return the new theme.
 */
export function toggleTheme() {
  const curr = getSavedTheme();
  const next = curr === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}
