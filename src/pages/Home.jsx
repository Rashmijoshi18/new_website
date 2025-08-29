
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#0d1117] text-gray-100 flex flex-col">
//       {/* Container aligned to sidebar, no huge top padding */}
//       <div className="max-w-5xl mx-auto w-full px-6 lg:px-8 pt-6 pb-12">
        
//         {/* ✅ Header */}
//         <header className="mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
//             Developer Portfolio API
//           </h1>
//           <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
//             Full-stack developer crafting digital experiences with modern technologies
//           </p>
//         </header>

//         {/* ✅ Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           <StatBox number="50+" label="Projects Completed" />
//           <StatBox number="5+" label="Years Experience" />
//           <StatBox number="20+" label="Technologies" />
//           <StatBox number="100%" label="Client Satisfaction" />
//         </div>

//         {/* ✅ Quick Start */}
//         <section className="bg-[#161b22] rounded-xl border border-gray-800 p-6 shadow-lg">
//           <h2 className="text-2xl font-semibold text-white mb-6">
//             Quick Start
//           </h2>

//           {/* Route */}
//           <div className="flex items-center gap-3 mb-4">
//             <span className="px-3 py-1 text-xs font-bold rounded bg-green-600 text-white shadow-sm">
//               GET
//             </span>
//             <code className="px-3 py-1 rounded bg-[#0d1117] border border-gray-700 text-sm text-gray-200">
//               /developer/introduction
//             </code>
//           </div>

//           <p className="mb-4 text-gray-300 max-w-3xl leading-relaxed">
//             Welcome to my developer portfolio! I'm a passionate full-stack developer with
//             expertise in modern web technologies, mobile development, and cloud architecture.
//           </p>

//           {/* Code Snippet */}
//           <div className="bg-[#0d1117] border border-gray-800 rounded-lg relative overflow-x-auto">
//             <button
//               onClick={() => navigator.clipboard.writeText(sampleCode)}
//               className="absolute top-3 right-3 px-3 py-1 text-xs bg-green-700 text-white rounded hover:bg-green-600 transition"
//             >
//               Copy
//             </button>
//             <pre className="p-4 text-green-400 font-mono text-sm whitespace-pre-wrap">
//               {sampleCode}
//             </pre>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// /* ✅ Stat Box */
// function StatBox({ number, label }) {
//   return (
//     <div className="flex flex-col items-center justify-center bg-[#161b22] rounded-lg p-6 border border-gray-800">
//       <p className="text-3xl font-bold text-green-500">{number}</p>
//       <p className="mt-2 text-gray-400 text-sm">{label}</p>
//     </div>
//   );
// }

// /* ✅ Example Code */
// const sampleCode = `const developer = {
//   name: 'Alex Johnson',
//   role: 'Full Stack Developer',
//   location: 'San Francisco, CA',
//   specialties: ['React', 'Node.js', 'Python', 'AWS'],
//   passion: 'Building scalable, user-friendly applications'
// };`;
export default function Home() {
  return (
    
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-[#0d1117] text-gray-100 min-h-screen">
      {/* Header Section */}
      <header>
        <h1 className="text-3xl font-bold mb-1">Developer Portfolio API</h1>
        <p className="text-base text-gray-400">
          Full-stack developer crafting digital experiences with modern technologies
        </p>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox number="50+" label="Projects Completed" />
        <StatBox number="5+" label="Years Experience" />
        <StatBox number="20+" label="Technologies" />
        <StatBox number="100%" label="Client Satisfaction" />
      </div>

      {/* Quick Start Section */}
      <section className="bg-[#161b22] rounded-lg border border-gray-700 p-4 md:p-6">
        <h2 className="text-lg font-semibold mb-3">Quick Start</h2>

        {/* API Route */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2 py-1 text-xs font-bold rounded text-white"
            style={{ backgroundColor: "#238636" }}
          >
            GET
          </span>
          <code className="px-2 py-1 rounded bg-gray-800 text-sm text-gray-200">
            /developer/introduction
          </code>
        </div>

        <p className="mb-3 text-gray-300">
          Welcome to my developer portfolio! I'm a passionate full-stack developer with expertise in
          modern web technologies, mobile development, and cloud architecture.
        </p>

        {/* Code Snippet */}
        <div className="bg-[#0d1117] font-mono text-sm p-4 rounded-lg relative border border-gray-700 text-[#238636]">
          <button
            onClick={() => navigator.clipboard.writeText(sampleCode)}
            className="absolute top-2 right-2 px-2 py-1 text-xs text-white rounded hover:opacity-90"
            style={{ backgroundColor: "#238636" }}
          >
            Copy
          </button>
          <pre>{sampleCode}</pre>
        </div>
      </section>
    </div>
  );
}

/* ✅ Reusable Stat Card */
function StatBox({ number, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#161b22] rounded-lg p-6 border border-gray-700">
      <p className="text-3xl font-bold" style={{ color: "#238636" }}>
        {number}
      </p>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
}

/* ✅ Example code snippet text */
const sampleCode = `const developer = {
  name: 'Alex Johnson',
  role: 'Full Stack Developer',
  location: 'San Francisco, CA',
  specialties: ['React', 'Node.js', 'Python', 'AWS'],
  passion: 'Building scalable, user-friendly applications'
};`;
