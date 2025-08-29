import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 md:px-10 lg:px-16 bg-[#0d1117] text-gray-100 mt-16 lg:mt-4 overflow-y-auto">
      
      {/* Header Section */}
      <header className="text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 break-words">
          Rashmi Joshi
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-full md:max-w-2xl mx-auto md:mx-0 break-words">
          Full-stack developer crafting digital experiences with modern technologies
        </p>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox number="50+" label="Projects Completed" />
        <StatBox number="5+" label="Years Experience" />
        <StatBox number="20+" label="Technologies" />
        <StatBox number="100%" label="Client Satisfaction" />
      </div>

      {/* Quick Start Section */}
      <section className="bg-[#161b22] rounded-lg border border-gray-700 p-4 sm:p-6 lg:p-8">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">
          Quick Start
        </h2>

        {/* API Route */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-2 py-1 text-xs sm:text-sm font-bold rounded text-white"
            style={{ backgroundColor: "#238636" }}
          >
            GET
          </span>
          <code className="px-2 py-1 rounded bg-gray-800 text-xs sm:text-sm md:text-base text-gray-200 break-all">
            /developer/introduction
          </code>
        </div>

        <p className="mb-4 text-gray-300 text-sm sm:text-base leading-relaxed">
          Welcome to my developer portfolio! I'm a passionate full-stack
          developer with expertise in modern web technologies, mobile
          development, and cloud architecture.
        </p>

        {/* Code Snippet */}
        <div className="bg-[#0d1117] font-mono text-xs sm:text-sm md:text-base p-4 rounded-lg relative border border-gray-700 text-[#238636] overflow-x-auto w-full">
          <button
            onClick={() => navigator.clipboard.writeText(sampleCode)}
            className="absolute top-2 right-2 px-2 py-1 text-xs sm:text-sm text-white rounded hover:opacity-90"
            style={{ backgroundColor: "#238636" }}
          >
            Copy
          </button>
          <pre className="whitespace-pre-wrap sm:whitespace-pre break-words">{sampleCode}</pre>
        </div>
      </section>
    </div>
  );
}

/* ✅ Reusable Stat Card */
function StatBox({ number, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#161b22] rounded-lg p-4 sm:p-6 border border-gray-700">
      <p
        className="text-2xl sm:text-3xl lg:text-4xl font-bold"
        style={{ color: "#238636" }}
      >
        {number}
      </p>
      <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-300 text-center">
        {label}
      </p>
    </div>
  );
}

/* ✅ Example code snippet text */
const sampleCode = `const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'Tailwind','JavaScript'],
  passion: 'Building scalable, user-friendly applications'
};`;
