import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a strong foundation in both backend 
              and frontend technologies. My journey in software development started at the 
              Islamic University of Gaza (IUG), where I completed my Bachelor's degree in IT.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Throughout my career, I've worked on diverse projects ranging from e-commerce 
              platforms to web applications. I'm proficient in ASP.NET for backend development 
              and Angular for frontend development, with a focus on clean code and design patterns.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I've gained valuable experience as a Teaching Assistant at my 
              university, which has helped me develop strong communication and mentoring skills. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Full-Stack Development</p>
                  <p className="text-gray-600">Expertise in both backend and frontend technologies</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Teaching Experience</p>
                  <p className="text-gray-600">Served as Teaching Assistant at IUG</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Clean Code Advocate</p>
                  <p className="text-gray-600">Focus on design patterns and architecture</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Continuous Learner</p>
                  <p className="text-gray-600">Always exploring new technologies and frameworks</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
