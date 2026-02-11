import React from 'react';

const metrics = [
  {
    value: "8x",
    label: "Faster Admin Changes"
  },
  {
    value: "50%",
    label: "CRM Cost Savings"
  },
  {
    value: "60%",
    label: "Reduction in First TAT"
  },
  {
    value: "2.5 hrs",
    label: "Daily Time Saved"
  }
];

const CTASection = () => {
  return (
    <div className="relative bg-[#121212] py-20 px-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-zinc-400">
            Performance that scales
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            with your growth
          </h3>
          <p className="text-zinc-400 text-md max-w-xl mx-auto">
            Every improvement we've made is engineered to remove roadblocks and speed up your entire process.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-all duration-300"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Metric Value */}
              <div className="relative z-10 text-4xl md:text-5xl lg:text-3xl font-bold mb-3 text-white group-hover:text-purple-100 transition-colors duration-300">
                {metric.value}
              </div>
              
              {/* Metric Label */}
              <div className="relative z-10 text-zinc-400 text-sm md:text-base font-medium group-hover:text-zinc-300 transition-colors duration-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-md  transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-[0.98]">
        Book a Demo
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CTASection;