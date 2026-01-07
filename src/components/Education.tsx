import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      period: '2017 - 2021',
      degree: "Bachelor's degree in IT",
      institution: 'Islamic University of Gaza (IUG)',
      location: 'Gaza, PS',
      description: 'Studied in the IT field for four years to get a bachelor\'s degree at IUG.',
    },
    {
      period: '2022',
      degree: 'Google IT Automation',
      institution: 'Google | Coursera',
      location: 'Online',
      description: 'This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills including Python, Git, and IT automation.',
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{edu.location}</p>
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
