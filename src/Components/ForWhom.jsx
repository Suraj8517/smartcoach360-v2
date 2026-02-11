import React from 'react';
import { Apple, Building2, Dumbbell, Heart } from 'lucide-react';

const securityFeatures = [
  {
    title: "Nutritionists & Dietitians",
    icon: Apple
  },
  {
    title: "Fitness Coaches & Personal Trainers",
    icon: Dumbbell
  },
  {
    title: "Wellness Consultants",
    icon: Heart
  },
  {
    title: "Wellness Centers",
    icon: Building2
  },
  
 
];

const ForWhomSection = () => {
  return (
    <div className=" bg-[#121212] text-white pt-20 pb-15 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-purple-500 text-sm uppercase tracking-wider mb-4">
              Designed For Fitness & Wellness Professionals
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tighter">
Designed for wellness professionals, coaches, and modern fitness teams.</h1>     
       <p className="text-zinc-400 text-md mb-8 leading-relaxed">
             SmartCoach360 is designed to support health and wellness professionals who want to streamline their practice, engage clients more effectively, and grow their business with ease.</p>
            <a 
              href="#" 
              className="inline-flex items-center text-white hover:text-purple-400 transition-colors duration-300 group"
            >
              Book a Demo
              <svg 
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Security Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative  transition-all duration-300 overflow-hidden "
                >
                  
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-4 flex items-center gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-md font-normal text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhomSection;