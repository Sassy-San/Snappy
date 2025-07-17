import React, { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Python', icon: '🐍', percentage: 90, color: 'from-yellow-400 to-green-500' },
    { name: 'SQL (MySQL)', icon: '🧮', percentage: 70, color: 'from-blue-400 to-blue-600' },
    { name: 'Java', icon: '☕', percentage: 55, color: 'from-orange-400 to-red-500' },
    { name: 'C/C++', icon: '💻', percentage: 40, color: 'from-gray-400 to-gray-600' },
    { name: 'GitHub', icon: '🐙', percentage: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'Git', icon: '🔧', percentage: 60, color: 'from-[#FF9587] to-pink-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Gradient outline heading for Skills */}
        <div className="flex justify-center mb-16 fade-in-heading">
          <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skills-gradient" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3C3C" />
                <stop offset="0.5" stopColor="#A259F7" />
                <stop offset="1" stopColor="#00C3FF" />
              </linearGradient>
              <filter id="skills-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A259F7" flood-opacity="0.25"/>
              </filter>
            </defs>
            <text x="160" y="60" text-anchor="middle" font-family="Calibri,Nusar, serif" font-size="75" stroke="url(#skills-gradient)" stroke-width="2.5" fill="none" filter="url(#skills-glow)">Skills</text>
          </svg>
        </div>
        
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-[#FF9587]/50 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#FF9587] transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-2xl font-bold text-[#FF9587]">
                  {animatedSkills.has(index) ? skill.percentage : 0}%
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{
                    width: animatedSkills.has(index) ? `${skill.percentage}%` : '0%',
                    boxShadow: animatedSkills.has(index) ? `0 0 20px rgba(255, 149, 135, 0.5)` : 'none'
                  }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
                
                {/* Floating indicator */}
                {animatedSkills.has(index) && (
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg animate-pulse"
                    style={{
                      left: `calc(${skill.percentage}% - 8px)`,
                      boxShadow: '0 0 10px rgba(255, 149, 135, 0.8)'
                    }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;