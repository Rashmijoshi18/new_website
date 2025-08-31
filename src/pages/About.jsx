import React, { useState, useEffect } from "react";
import {
  User,
  GraduationCap,
  Lightbulb,
  Code,
  FolderOpen,
  CheckCircle,
  Star,
  MapPin,
  Award,
  BookOpen,
  Target,
  Coffee,
  Brain
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("intro");

  useEffect(() => {
    const copyButton = document.querySelector(".copy-btn");
    const copySuccess = document.getElementById("copy-success");

    if (copyButton) {
      copyButton.addEventListener("click", function () {
        const code = `const myApproach = {
  focus: "User Experience",
  codeStyle: "Clean & Maintainable",
  testing: "Test-Driven Development",
  learning: "Continuous Growth"
};

console.log('Crafting scalable & meaningful solutions 🚀');`;

        navigator.clipboard.writeText(code).then(function () {
          copySuccess.classList.remove("hidden");
          copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';

          setTimeout(function () {
            copySuccess.classList.add("hidden");
            copyButton.innerHTML =
              '<i class="far fa-copy"></i> Copy';
          }, 2000);
        });
      });
    }
  }, [activeTab]);

  const tabs = [
    { id: "intro", label: "Introduction", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "philosophy", label: "Philosophy", icon: Lightbulb },
    { id: "approach", label: "Approach", icon: Code },
    { id: "interests", label: "Interests", icon: FolderOpen },
  ];

  const strengths = [
    { icon: Target, text: "Problem-solving expertise" },
    { icon: Code, text: "Clean code architecture" },
    { icon: User, text: "User-centered design" },
    { icon: Coffee, text: "Team collaboration" },
  ];

  const educationData = [
    {
      period: "2016-2020",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      description: "Focus on full-stack development and algorithms.",
      // gpa: "3.8/4.0",
      // honors: "Dean's List"
    },
    {
      period: "2020-2022",
      degree: "Higher Secondary Education",
      institution: "New Adarsh Senior Secondary School",  
      location: "Punjab, India",
      description: "Studied various subjects including Mathematics, Physics, and Computer Science.",
      // gpa: "3.9/4.0",
      // honors: "Summa Cum Laude"
    },
    // {
    //   period: "2016-2020",
    //   degree: "Bachelor of Technology in Computer Science and Engineering",
    //   institution: "Lovely Professional University",
    //   location: "Punjab, India",
    //   description: "Focus on full-stack development and algorithms.",
    //   // gpa: "3.8/4.0",
    //   // honors: "Dean's List"
    // }
  ];

  const philosophyPrinciples = [
    { icon: BookOpen, title: "Clean Code", description: "Write self-documenting and maintainable code" },
    { icon: CheckCircle, title: "Test-Driven", description: "Comprehensive testing ensures reliability" },
    { icon: Brain, title: "Continuous Learning", description: "Stay updated with emerging technologies" },
  ];

  const interests = [
    { icon: Brain, title: "Artificial Intelligence", description: "Exploring artificial intelligence" },
    { icon: Code, title: "Open Source", description: "Contributing to community projects" },
    { icon: BookOpen, title: "Technical Writing", description: "Creating educational content" },
    { icon: User, title: "Learning", description: "Learning new technologies and skills" },
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 mb-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-grey-900 mb-3">About Me</h1>
          <div className="w-16 h-1 bg-green-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Software Engineer | Problem Solver | Lifelong Learner
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white rounded-lg p-2 shadow-sm">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center transition-all ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          {/* Intro */}
          {activeTab === "intro" && (
            <div className="p-6">
              <div className="flex items-center mb-6 pb-3 border-b border-green-800">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    I am a passionate software engineer who thrives on building
                    clean, scalable, and efficient solutions. My focus is on
                    creating user-friendly applications while keeping performance
                    and maintainability in mind.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I enjoy transforming complex problems into simple, intuitive
                    experiences that delight users and solve real-world challenges.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-5 border border-green-700">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-green-700 mr-2" />
                    Core Strengths
                  </h3>
                  <div className="space-y-3">
                    {strengths.map((strength, idx) => {
                      const IconComponent = strength.icon;
                      return (
                        <div key={idx} className="flex items-center">
                          <IconComponent className="w-4 h-4 text-green-700 mr-3" />
                          <span className="text-gray-700">{strength.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div className="p-6">
              <div className="flex items-center mb-6 pb-3 border-b border-green-800">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-grey-900">Education</h2>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-5 hover:border-green-800 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-grey-900">
                        {edu.degree}
                      </h3>
                      
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-gray-600">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{edu.description}</p>

                    <div className="flex gap-2">
                      <div className="bg-green-100 text-grey-700 px-3 py-1 rounded-full text-sm">
                        <Award className="w-3 h-3 inline mr-1" />
                        {/* GPA: {edu.gpa} */}
                      </div>
                      <div className="bg-green-100 text-grey-700 px-3 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 inline mr-1" />
                        {/* {edu.honors} */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Philosophy */}
          {activeTab === "philosophy" && (
            <div className="p-6">
              <div className="flex items-center mb-6 pb-3 border-b border-green-800">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-3">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Development Philosophy</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  I believe in writing{" "}
                  <span className="text-green-700 font-semibold bg-green-50 px-2 py-1 rounded">
                    clean and maintainable code
                  </span>
                  . Every function should be purposeful, every variable meaningful,
                  and every feature should serve a real user need.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {philosophyPrinciples.map((principle, idx) => {
                    const IconComponent = principle.icon;
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-4 hover:border-green-800 transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5 text-green-800" />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          {principle.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {principle.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Approach (Updated with Documentation style) */}
          {activeTab === "approach" && (
            <div className="p-6">
              <div className="flex items-center mb-6 pb-3 border-b border-green-800">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-green-700">Development Approach</h2>
              </div>

              <p className="text-gray-700 mb-6">
                My development approach focuses on building scalable, maintainable,
                and meaningful applications with strong user experience at the core.
              </p>

              {/* Code Block Styled */}
              <div className="code-block relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs font-mono ml-2">
                      myApproach.js
                    </span>
                  </div>
                  <button className="copy-btn flex items-center gap-1 px-2.5 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors">
                    <i className="far fa-copy"></i> <span>Copy</span>
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono leading-relaxed">
{`const myApproach = {
  focus: "User Experience",
  codeStyle: "Clean & Maintainable",
  testing: "Test-Driven Development",
  learning: "Continuous Growth"
};

console.log('Crafting scalable & meaningful solutions 🚀');`}
                  </pre>
                </div>
              </div>

              <div
                id="copy-success"
                className="hidden mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-center"
              >
                <i className="fas fa-check-circle mr-2"></i> Code copied to clipboard!
              </div>
            </div>
          )}

          {/* Interests */}
          {activeTab === "interests" && (
            <div className="p-6">
              <div className="flex items-center mb-6 pb-3 border-b border-green-800">
                <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mr-3">
                  <FolderOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Areas of Interest</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Beyond development, I'm passionate about exploring new
                  technologies, contributing to the community, and sharing
                  knowledge.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest, idx) => {
                    const IconComponent = interest.icon;
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-4 hover:border-green-800 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-green-800" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">
                              {interest.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {interest.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-green-50 border-l-4 border-green-800 p-4 rounded-r">
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-green-800 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Note</h4>
                      <p className="text-gray-700 text-sm">
                        This clean design reflects my belief in simplicity and
                        functionality - creating interfaces that are both beautiful
                        and usable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
