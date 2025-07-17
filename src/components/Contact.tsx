import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:palsanya372@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="connect" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Gradient outline heading for Let's Connect */}
        <div className="flex justify-center mb-16 fade-in-heading">
          <svg width="420" height="80" viewBox="0 0 420 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="connect-gradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3C3C" />
                <stop offset="0.5" stopColor="#A259F7" />
                <stop offset="1" stopColor="#00C3FF" />
              </linearGradient>
              <filter id="connect-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#A259F7" flood-opacity="0.25"/>
              </filter>
            </defs>
            <text x="210" y="60" text-anchor="middle" font-family="Calibri,Nusar, serif" font-size="75" stroke="url(#connect-gradient)" stroke-width="2.5" fill="none" filter="url(#connect-glow)">Let's Connect</text>
          </svg>
        </div>
        
        <div className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-[#FF9587]/50 transition-all duration-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          {/* Gradient background effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF9587]/5 via-purple-500/5 to-cyan-500/5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 mx-auto mb-4 text-[#FF9587]" />
              <p className="text-white/80 text-lg">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#FF9587]" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#FF9587] focus:ring-2 focus:ring-[#FF9587]/20 transition-all duration-300"
                  />
                </div>
                
                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#FF9587]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#FF9587] focus:ring-2 focus:ring-[#FF9587]/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Subject Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-[#FF9587]" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#FF9587] focus:ring-2 focus:ring-[#FF9587]/20 transition-all duration-300"
                />
              </div>
              
              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#FF9587] focus:ring-2 focus:ring-[#FF9587]/20 transition-all duration-300 resize-none"
                />
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : submitStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gradient-to-r from-[#FF9587] to-purple-500 hover:shadow-lg hover:shadow-[#FF9587]/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <div className="w-5 h-5 text-white">✓</div>
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <div className="w-5 h-5 text-white">✗</div>
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                Something went wrong. Please try again or email me directly.
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 text-white/60">
          <p>© Made with ❤️ by Sanya. Stay Connected ✨</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;