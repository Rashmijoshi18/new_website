// src/pages/About.jsx
/**
 * About.jsx
 * Clone brief:
 * - short professional summary
 * - core skills / technologies (use SkillPill component)
 * - one-paragraph approach to engineering (how you work)
 */

import React from 'react'
import SkillPill from '../components/SkillPill'

const skills = ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'REST APIs', 'Testing']

export default function About() {
  return (
    <section className="container-max mx-auto">
      <h2 className="text-2xl font-semibold mb-3">About</h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        I’m a software engineer who focuses on building simple, reliable and delightful interfaces. I prefer
        clean design, pragmatic engineering and well-tested code.
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Core skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => <SkillPill key={s} label={s} />)}
        </div>
      </div>
    </section>
  )
}
