import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Gradient outline heading for About Me */}
        <div className="flex justify-center mb-16 fade-in-heading">
          <svg width="420" height="80" viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="about-gradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3C3C" />
                <stop offset="0.5" stopColor="#A259F7" />
                <stop offset="1" stopColor="#00C3FF" />
              </linearGradient>
              <filter id="about-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A259F7" flood-opacity="0.25"/>
              </filter>
            </defs>
            <text x="210" y="60" text-anchor="middle" font-family="Calibri,Nusar, serif" font-size="75" stroke="url(#about-gradient)" stroke-width="2.5" fill="none" filter="url(#about-glow)">About Me</text>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left pane: Image with glowing stars */}
          <div className="relative flex justify-center items-center">
            <img
              src="/Sanya2.jpg"
              alt="Sanya"
              className="rounded-3xl shadow-2xl object-cover w-80 h-96 border-4 border-white/10"
            />
            {/* Tiny glowing stars at top-left outside the image */}
            <div className="absolute -top-4 -left-4 flex space-x-1">
              <span className="w-2 h-2 bg-yellow-300 rounded-full shadow-lg animate-pulse"></span>
              <span className="w-1.5 h-1.5 bg-white rounded-full shadow-md animate-ping"></span>
              <span className="w-1 h-1 bg-blue-300 rounded-full shadow-sm animate-pulse"></span>
            </div>
            {/* Shining stars at top-right near the image */}
            <div className="absolute top-2 right-2 flex flex-col space-y-1 items-end">
              <span className="w-3 h-3 bg-white rounded-full shadow-xl animate-pulse"></span>
              <span className="w-1.5 h-1.5 bg-yellow-200 rounded-full shadow-md animate-ping"></span>
              <span className="w-2 h-2 bg-blue-200 rounded-full shadow-lg animate-pulse"></span>
            </div>
            {/* Unicode stars (⭐) around the image with twinkling effect */}
            <svg width="24" height="24" className="twinkle-star" style={{animationDuration: '7s', position: 'absolute', top: '1rem', left: '2rem'}}>
              <polygon
                points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
              />
            </svg>
            {/* SVG outlined stars around the image with twinkling effect */}
            <svg className="absolute top-4 left-8 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '7s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <svg className="absolute bottom-2 right-12 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '7.5s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <svg className="absolute top-1/2 left-4 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '8s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <svg className="absolute bottom-1/2 right-8 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '7s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <svg className="absolute top-10 left-1/4 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '7.2s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <svg className="absolute bottom-10 right-1/4 twinkle-star" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" style={{animationDuration: '6.3s'}}><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
          </div>
          {/* Right pane: About text */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white text-lg leading-relaxed shadow-xl">
            Bonjour! I am Sanya 👩‍💻 — a curious and passionate Computer Science undergrad with a love for turning raw data into meaningful insights. I enjoy uncovering patterns, solving real-world problems, and helping others make smarter, data-driven decisions 📊. My recent work includes building interactive dashboards, automating data workflows with Python 🐍, and experimenting with machine learning models 🤖 to predict outcomes and identify trends. I’m always excited to explore open-source tools and create solutions that are both impactful and user-friendly. Whether it's cleaning datasets, visualizing insights, or training models — I’m here to make data tell a story that matters 🚀.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;