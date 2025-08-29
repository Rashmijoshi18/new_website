// src/components/ProjectCard.jsx
/**
 * ProjectCard.jsx
 * Presentational card for a single project
 * expects `project` object with: id, title, desc, tags, repo, live
 */

import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="p-4 rounded-md border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition">
      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">{t}</span>)}
      </div>
      <div className="flex gap-3">
        {project.live && <a className="text-sm underline" href={project.live} target="_blank" rel="noreferrer">Live</a>}
        {project.repo && <a className="text-sm underline" href={project.repo} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  )
}
