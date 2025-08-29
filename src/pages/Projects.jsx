// src/pages/Projects.jsx
/**
 * Projects.jsx
 * Clone brief:
 * - grid of ProjectCard components
 * - include a short description, tech stack tags, link to repo / live
 */

import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="container-max mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
