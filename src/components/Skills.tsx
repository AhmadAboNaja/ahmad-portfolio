import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['C#', 'Java', 'TypeScript', 'Dart', 'JavaScript', 'Python'],
    },
    {
      icon: Code2,
      title: 'Frameworks & Libraries',
      skills: ['ASP.NET Core Web API 5+', 'ASP.NET Core MVC 5+', 'Angular 14+', 'Bootstrap', 'MDBootstrap'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MSSQL', 'MySQL', 'ORACLE', 'MongoDB', 'Firebase'],
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git Hub', 'Visual Studio', 'VS Code', 'Umbraco', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
