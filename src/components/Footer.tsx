import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Raw-Bot?', href: '#why-raw-bot' },
    { name: 'Features', href: '#features' },
    { name: 'Specification', href: '#specification' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const resourceLinks = [
    { name: 'API Reference', href: '#api' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Support', href: '#support' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rahil1202',
      icon: Github,
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/rahil-vahora',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Rahil_Vahora12',
      icon: Twitter,
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50'
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
         
             <img 
                src="/logo.png" 
                alt="Raw-Bot Logo" 
                className="w-auto h-12"
              />             
      
            <p className="text-gray-600 text-sm leading-relaxed">
              Powerful AI-driven automation platform built with cutting-edge technology and crafted with passion.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500">Built with</span>
              <span className="inline-flex items-center space-x-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium animate-pulse">
                <span>🤖</span>
                <span>AI</span>
              </span>
              <span className="text-gray-500">and</span>
              <span className="inline-flex items-center space-x-1 px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium animate-pulse" style={{ animationDelay: '0.5s' }}>
                <span>💖</span>
                <span>Love</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm flex items-center space-x-2 group transform hover:translate-x-1"
                    style={{ 
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` 
                    }}
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 relative">
              Resources
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center space-x-2 group transform hover:translate-x-1"
                    style={{ 
                      animation: `fadeInUp 0.6s ease-out ${(index + 5) * 0.1}s both` 
                    }}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Project Link */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 relative">
              Connect
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h4>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border border-gray-200 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-pulse-500 hover:text-white hover:shadow-lg group`}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Project Repository */}
            <div className="space-y-3">
              <a
                href="https://github.com/rahil1202/Raw-Bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pulse-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group text-sm font-medium"
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Project</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <p className="text-xs text-gray-500">
                ⭐ Star the project if you find it useful!
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Raw-Bot. All rights reserved.</span>
            <span className="hidden sm:block">•</span>
            <span>
              Crafted with passion by{" "}
              <a
                href="https://github.com/rahil1202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-300"
              >
                Rahil Vahora
              </a>
            </span>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md group text-sm text-gray-600 hover:text-purple-600"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;