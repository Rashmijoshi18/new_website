import React, { useState } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Trophy,
  Award,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

const SimpleSkillsPage = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    {
      name: "JavaScript",
      level: 90,
      icon: <Code className="w-5 h-5" />,
      category: "Frontend",
    },
    {
      name: "React.js",
      level: 85,
      icon: <Code className="w-5 h-5" />,
      category: "Frontend",
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: <Globe className="w-5 h-5" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      level: 80,
      icon: <Server className="w-5 h-5" />,
      category: "Backend",
    },
    {
      name: "Python",
      level: 88,
      icon: <Code className="w-5 h-5" />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <Database className="w-5 h-5" />,
      category: "Database",
    },
    {
      name: "MySQL",
      level: 80,
      icon: <Database className="w-5 h-5" />,
      category: "Database",
    },
  ];

  const achievements = [
    {
      title: "Frontend Developer Certification",
      date: "2024",
      icon: <Award className="w-5 h-5" />,
      issuer: "HackerRank",
    },
    {
      title: "React JS Concepts",
      date: "2025",
      icon: <Trophy className="w-5 h-5" />,
      issuer: "Tech Veda",
    },
    {
      title: "Introduction to DSA",
      date: "2023",
      icon: <Code className="w-5 h-5" />,
      issuer: "Coding Tantra",
    },
    {
      title: "Hack-a-Throne",
      date: "2024",
      icon: <Database className="w-5 h-5" />,
      issuer: "GeeksforGeeks",
    },
  ];

  const softSkills = [
    {
      name: "Team Leadership",
      icon: <Users className="w-5 h-5" />,
      description:
        "Leading development teams and coordinating cross-functional projects",
    },
    {
      name: "Communication",
      icon: <MessageCircle className="w-5 h-5" />,
      description:
        "Clear technical communication with stakeholders and team members",
    },
    {
      name: "Problem Solving",
      icon: <Lightbulb className="w-5 h-5" />,
      description:
        "Analytical thinking and creative solutions to complex challenges",
    },
    {
      name: "Project Management",
      icon: <Target className="w-5 h-5" />,
      description:
        "Planning, organizing, and delivering projects on time and within scope",
    },
    {
      name: "Adaptability",
      icon: <Zap className="w-5 h-5" />,
      description:
        "Quick learning and adapting to new technologies and changing requirements",
    },
    {
      name: "Empathy",
      icon: <Heart className="w-5 h-5" />,
      description:
        "Understanding user needs and team dynamics for better collaboration",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
            Professional Profile
          </h2>
          <p className="text-gray-600">
            Technical skills, soft skills, and achievements
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm border border-green-900 overflow-hidden">
            {["skills", "soft-skills", "achievements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab
                    ? "bg-green-700 text-white shadow-md"
                    : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {tab === "skills"
                  ? "Technical Skills"
                  : tab === "soft-skills"
                  ? "Soft Skills"
                  : "Achievements"}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        {activeTab === "skills" && (
          <div className="bg-white rounded-lg shadow-sm border border-[#101d13] animate-slide-up">
            <div className="bg-green-700 text-white px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            <div className="p-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-3 rounded-lg transition-all duration-300 custom-hover"
                >
                  <div className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-green-700 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                    <span className="text-gray-800 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({skill.category})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft-skills" && (
          <div className="bg-white rounded-lg shadow-sm border border-green-700 animate-slide-up">
            <div className="bg-green-700 text-white px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-lg p-5 bg-white shadow-sm border border-gray-100 transition-all duration-300 custom-hover"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-green-100 text-green-700 rounded-full">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeTab === "achievements" && (
          <div className="bg-white rounded-lg shadow-sm border border-green-900 animate-slide-up">
            <div className="bg-green-700 text-white px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {achievements.map((ach, index) => (
                <div
                  key={index}
                  className="rounded-lg p-5 bg-white shadow-sm border border-gray-100 transition-all duration-300 custom-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                      {ach.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {ach.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{ach.issuer}</p>
                      <p className="text-green-700 text-sm font-medium">
                        {ach.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animations & Custom Hover */}
      <style>{`
        .animate-slide-up { 
          animation: slideUp 0.6s ease-in-out; 
        }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }

        /* Custom hover effect */
        .custom-hover {
          position: relative;
        }
        .custom-hover:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 20px rgba(0,0,0,0.08);
          // border-color: #16a34a;
        }
        .custom-hover:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default SimpleSkillsPage;
