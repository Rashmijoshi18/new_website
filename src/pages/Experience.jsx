// src/pages/Experience.jsx
/**
 * Experience.jsx
 * Clone brief:
 * - short timeline of roles
 * - show company, role, date range, short bullets
 */

import React from "react";
import experience from "../data/experience";

export default function Experience() {
	return (
		<section className="container-max mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Experience</h2>
			<ul className="space-y-4">
				{experience.map((e) => (
					<li key={e.company} className="p-4 border rounded-md border-slate-100 dark:border-slate-800">
						<div className="flex items-center justify-between">
							<div>
								<div className="font-semibold">
									{e.role} — {e.company}
								</div>
								<div className="text-xs text-slate-500 dark:text-slate-400">{e.range}</div>
							</div>
						</div>
						<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{e.summary}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
