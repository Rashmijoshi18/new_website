import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-4 py-3 sm:px-6 md:px-10 lg:px-16 bg-white text-gray-800 mt-8 lg:mt-2 overflow-y-auto">
      
      {/* Header Section */}
      <header className="text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 break-words text-[#308D46]">
          Rashmi Joshi
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-full md:max-w-2xl mx-auto md:mx-0 break-words">
          Full-stack developer crafting digital experiences with modern technologies
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center mt-6">
          <button 
            className="px-6 py-2 text-sm text-white rounded hover:opacity-90"
            style={{ backgroundColor: "#308D46" }}
          >
            View My Work
          </button>
          <button 
            className="px-6 py-2 text-sm border border-[#308D46] text-[#308D46] rounded hover:bg-[#308D46] hover:text-white"
          >
            Contact Me
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox number="5+" label="Years Experience" />
        <StatBox number="50+" label="Projects Completed" />
        <StatBox number="20+" label="Technologies" />
        <StatBox number="100%" label="Client Satisfaction" />
      </div>

      {/* Introduction Section */}
      <section className="bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 shadow-sm">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 text-[#308D46]">
          Welcome to My Portfolio
        </h2>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-2 py-1 text-xs sm:text-sm font-bold rounded text-white"
            style={{ backgroundColor: "#308D46" }}
          >
            INTRO
          </span>
          <code className="px-2 py-1 rounded bg-gray-200 text-xs sm:text-sm md:text-base text-gray-800 break-all">
            /developer/rashmi-joshi
          </code>
        </div>
        <p className="mb-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          Hi! I'm a passionate full-stack developer with expertise in modern web technologies. 
          I specialize in creating scalable, user-friendly applications that solve real-world problems.
        </p>
        
        {/* Quick Tech Stack */}
        <div className="bg-gray-200 font-mono text-xs sm:text-sm md:text-base p-4 rounded-lg relative border border-gray-300 text-gray-800 overflow-x-auto w-full">
          <button
            onClick={() => navigator.clipboard.writeText(profileCode)}
            className="absolute top-2 right-2 px-2 py-1 text-xs sm:text-sm text-white rounded hover:opacity-90"
            style={{ backgroundColor: "#308D46" }}
          >
            Copy
          </button>
          <pre className="whitespace-pre-wrap sm:whitespace-pre break-words">{profileCode}</pre>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-100 rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 shadow-sm">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 text-[#308D46]">
          Explore My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-[#308D46] text-sm mb-1">About</h3>
            <p className="text-xs text-gray-700">Learn more about me</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-[#308D46] text-sm mb-1">Skills</h3>
            <p className="text-xs text-gray-700">Technical expertise</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-[#308D46] text-sm mb-1">Services</h3>
            <p className="text-xs text-gray-700">What I can do for you</p>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-3 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-[#308D46] text-sm mb-1">Contact</h3>
            <p className="text-xs text-gray-700">Get in touch</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ✅ Reusable Stat Card */
function StatBox({ number, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-300 shadow-sm">
      <p
        className="text-2xl sm:text-3xl lg:text-4xl font-bold"
        style={{ color: "#308D46" }}
      >
        {number}
      </p>
      <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-600 text-center">
        {label}
      </p>
    </div>
  );
}

/* ✅ Profile code snippet */
const profileCode = `const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS'],
  experience: '5+ years',
  passion: 'Building scalable web applications'
};

console.log('Welcome to my portfolio!');`;