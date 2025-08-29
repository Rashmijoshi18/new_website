import { skills } from '../data';

const Skills = () => {
  return (
    <div className="ml-64 p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">Skills & Technologies</h1>
        
        <div className="card mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Over the years, I've worked with a variety of technologies and tools. Here's a overview of my technical skills:
          </p>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Tools & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
            'Tailwind CSS', 'TypeScript', 'Git', 'AWS', 'Docker', 'Jest'
          ].map((tool, index) => (
            <div key={index} className="card text-center py-4">
              <span className="text-gray-700 dark:text-gray-300 font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;