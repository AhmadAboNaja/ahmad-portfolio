import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: '2023/05 - Present',
      title: 'Full-stack Developer',
      company: 'Cube Master | SA',
      description: 'Building web application using asp.net core MVC, umbraco, Tailwind CSS, and JS/JQuery/Ajax.',
    },
    {
      period: '2022 - Present',
      title: 'Teaching Assistant',
      company: 'Islamic University of Gaza (IUG)',
      location: 'Gaza, PS',
      description: 'Teaching assistant at IUG for one year in the IT field.',
    },
    {
      period: '2022',
      title: 'Flutter Developer',
      company: 'Fiverr | Freelancer',
      description: 'Connected an online store application developed using WordPress and Woo Commerce with a mobile application developed using Flutter.',
    },
    {
      period: '2022 - Present',
      title: 'Full-Stack Developer',
      company: 'Full-stack Developer',
      description: 'Developing website for backend and frontend using ASP.NET Framework and Angular Framework, and using design patterns, architecture pattern, clean code.',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  {exp.location && <p className="text-gray-600 mb-3">{exp.location}</p>}
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
