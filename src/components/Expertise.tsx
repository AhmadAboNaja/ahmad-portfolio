import React from 'react';
import { Star } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: 'Developing Web Application',
      description: 'E-Tickets movies using ASP.NET MVC core 5',
      icon: '🌐',
    },
    {
      title: 'Developing Gym Website',
      description: 'Full stack using asp.net web API core 6, angular 15.',
      icon: '💪',
    },
    {
      title: 'Developing Frontend Website',
      description: 'Using Angular 15 for startup project',
      icon: '⚡',
    },
    {
      title: 'ABP Framework',
      description: 'Advanced expertise in ABP Framework development',
      icon: '🏗️',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{area.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
