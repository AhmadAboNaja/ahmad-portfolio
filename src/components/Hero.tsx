import React from 'react';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">👨‍💻</div>
                <p className="text-sm">Ahmad Abo Naja</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Ahmad Abo Naja
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              Full-Stack Developer
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              I'm a full-stack developer with a passion for building web applications. 
              Graduated from IUG with experience as a Teaching Assistant. Skilled in 
              backend development using ASP.NET and frontend development using Angular. 
              Always looking for new opportunities to improve myself.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-blue-600" />
                <span>+970 59767 4243</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-blue-600" />
                <span>ahmad@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span>Rafah, Gaza Strip, PS</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
