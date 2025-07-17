import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Calori-meter",
      description: "I recently built a Meal Calorie & Protein Estimator using Python, Gradio, OpenAI, and PIL. 🍽💪 This tool allows anyone to quickly estimate the calorie and protein content of a meal simply by uploading an image. It combines AI-powered image analysis with an easy-to-use Gradio interface, making nutrition tracking more accessible and engaging.",
      techStack: ["Python", "Gradio", "OpenAI", "PIL"],
      githubLink: "https://github.com/Sa-nya06",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      delay: "0s"
    },
    {
      title: "WeConnect",
      description: "I'm incredibly excited to share a personal milestone in my tech journey — WeConnect 📲 An all-in-one communication app that lets you: 💬 WhatsApp • 📧 Email • 📱 SMS • ☎ Voice Calls • 📸 Instagram • 🔗 LinkedIn Built using Streamlit, integrating platforms like Twilio, InstaGraphAPI, pywhatkit, LinkedIn API, and voice interaction using pyttsx3. 💡 Motivation: Communication shouldn't require six different apps — so I created a single interface where everything comes together.",
      techStack: ["Streamlit", "Twilio", "InstaGraphAPI", "LinkedIn API", "pyttsx3"],
      githubLink: "https://github.com/Sa-nya06",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      delay: "0.3s"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Gradient outline heading for Projects */}
        <div className="flex justify-center mb-16 fade-in-heading">
          <svg width="340" height="80" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="projects-gradient" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3C3C" />
                <stop offset="0.5" stopColor="#A259F7" />
                <stop offset="1" stopColor="#00C3FF" />
              </linearGradient>
              <filter id="projects-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A259F7" flood-opacity="0.25"/>
              </filter>
            </defs>
            <text x="170" y="60" text-anchor="middle" font-family="Calibri,Nusar, serif" font-size="75" stroke="url(#projects-gradient)" stroke-width="2.5" fill="none" filter="url(#projects-glow)">Projects</text>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-[#FF9587]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF9587]/20 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: isVisible ? project.delay : '0s',
                animationFillMode: 'forwards'
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Floating tech badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#FF9587] group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-[#FF9587]/20 to-purple-500/20 text-[#FF9587] rounded-full border border-[#FF9587]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF9587] to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-[#FF9587]/25 transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                  <span>GitHub Link</span>
                  <ExternalLink size={16} />
                </a>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9587]/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;