import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image with clean gradient border */}
        <div className="relative mb-8 inline-block">
          <div className="w-64 h-64 mx-auto relative flex items-center justify-center">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#FF9587] via-purple-500 to-cyan-500"></div>
            {/* Profile image - no shadow, no extra backgrounds, no white border */}
            <img
              src="/Sanya.jpg"
              alt="Sanya"
              className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
              style={{
                imageRendering: 'auto',
              }}
            />
            {/* 3D floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#FF9587] to-purple-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Name with SVG gradient outline, matching the attached image */}
        <div className="flex flex-col items-center mb-6">
          <svg width="420" height="120" viewBox="0 0 420 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sanya-gradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3C3C" />
                <stop offset="0.5" stopColor="#A259F7" />
                <stop offset="1" stopColor="#00C3FF" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A259F7" flood-opacity="0.25"/>
              </filter>
            </defs>
            <text x="210" y="95" text-anchor="middle" font-family="Calibri,Nusar, serif" font-size="105" stroke="url(#sanya-gradient)" stroke-width="3.5" fill="blur" filter="url(#glow)">SANYA</text>
          </svg>
        </div>

        {/* Tagline with typewriter effect */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          I'm passionate about{' '}
          <span className="bg-gradient-to-r from-[#FF9587] to-purple-400 bg-clip-text text-transparent font-semibold">
            machine learning
          </span>{' '}
          and want to build my career in it.
        </p>

        {/* Social buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://www.linkedin.com/in/sanya-8a5a4a306"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-[#FF9587] bg-transparent text-white font-medium hover:bg-gradient-to-r hover:from-[#FF9587] hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9587]/25 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Sassy-San"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-[#FF9587] bg-transparent text-white font-medium hover:bg-gradient-to-r hover:from-[#FF9587] hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9587]/25 hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:palsanya372@gmail.com"
            className="group flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-[#FF9587] bg-transparent text-white font-medium hover:bg-gradient-to-r hover:from-[#FF9587] hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9587]/25 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-[#FF9587] to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
