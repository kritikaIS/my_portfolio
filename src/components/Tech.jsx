import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world.
            From Back-end To Design, Data Science to AI.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 lg:gap-10">
          {technologies.map((technology, index) => (
            <div
              key={technology.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Tech Card */}
              <div className="tech-card relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-800/60 hover:border-gray-600/60 hover:shadow-2xl hover:shadow-blue-500/30">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="tech-icon w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse shadow-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping shadow-lg"></div>
                  </div>
                  
                  {/* Technology Name */}
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">
                      {technology.name}
                    </h3>
                  </div>
                </div>
                
                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 text-gray-400">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-medium">Always learning new technologies</span>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
