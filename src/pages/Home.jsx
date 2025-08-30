import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* --- Simplified Stat Card --- */
function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 text-center">
      <p className="text-2xl sm:text-3xl font-bold text-[#308D46] mb-2">
        {number}
      </p>
      <p className="text-sm text-gray-600 font-medium">{label}</p>
    </div>
  );
}

/* --- Simplified Service Card --- */
function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[#308D46] hover:shadow-md transition-all duration-200">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

/* --- Enhanced Code Block --- */
function CodeBlock({ copied, setCopied }) {
  const profileCode = `const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: [
    '%cReact', '%cNode.js', '%cJavaScript', 
    '%cTypeScript', '%cTailwind CSS', '%cMongoDB'
  ],
  experience: '3+ years',
  passion: 'Building scalable web applications',
  currentFocus: 'Modern web technologies & UX'
};

console.log('Welcome to my digital world! 🚀');`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileCode.replace(/%c/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-x-auto border border-gray-700">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm font-mono ml-3">
            developer.js
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 text-xs text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4 text-[#308D46]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        <pre className="text-sm sm:text-base text-gray-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
          <code>
            {`const developer = {
  name: 'Rashmi Joshi',
  role: 'Full Stack Developer',
  location: 'India',
  specialties: [
    React, Node.js, JavaScript,
    TypeScript, Tailwind CSS, MongoDB
  ],
  experience: '3+ years',
  passion: 'Building scalable web applications',
  currentFocus: 'Modern web technologies & UX'
};

console.log('Welcome to my digital world! 🚀');`}
          </code>
        </pre>
      </div>
    </div>
  );
}

/* --- Home Component --- */
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <div
        className={`flex flex-col gap-12 px-4 py-4 sm:px-6 md:px-10 lg:px-16 pb-10 max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Hero Section */}
        <header className="text-center md:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-[#308D46] to-[#308D46] bg-clip-text text-transparent">
                Rashmi Joshi
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Full-stack developer crafting exceptional digital experiences with
              modern technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
            <button
              onClick={() => handleNavigation("/projects")}
              className="group px-8 py-3 bg-gradient-to-r from-[#308D46] to-[#246534] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="px-8 py-3 border-2 border-[#308D46] text-[#308D46] rounded-xl font-semibold hover:bg-[#308D46] hover:text-white transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard number="3+" label="Years Experience" />
          <StatCard number="25+" label="Projects Completed" />
          <StatCard number="15+" label="Technologies" />
          <StatCard number="100%" label="Client Satisfaction" />
        </section>

        {/* Introduction Section */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#308D46] to-[#246534] rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              About Me
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-[#308D46] to-[#246534] text-white">
              DEVELOPER
            </span>
            <code className="px-3 py-1 rounded-lg bg-gray-100 text-sm text-gray-700 font-mono border">
              /portfolio/rashmi-joshi
            </code>
          </div>

          <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I specialize in creating scalable, user-friendly
            applications that solve real-world problems and deliver exceptional
            user experiences.
          </p>

          {/* Enhanced Code Block */}
          <CodeBlock copied={copied} setCopied={setCopied} />
        </section>

        {/* What I Do Section */}
        <section className="space-y-6 mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              What I Do
            </h2>
            <p className="text-gray-600">
              Services I offer to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard
              title="Web Development"
              description="Building responsive and performant web applications with modern frameworks"
              icon="💻"
            />
            <ServiceCard
              title="UI/UX Design"
              description="Creating intuitive and engaging user experiences with thoughtful design"
              icon="🎨"
            />
            <ServiceCard
              title="Graphic Design"
              description="Designing intuitive logos and brochures using Figma and Canva to create compelling visual identities."
              icon="📱"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
