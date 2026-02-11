import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Loga Prithika",
    role: "Influencer",
    company: "FitMom Club",
    content: "We wanted a scalable way to track client success and ensure accountability among our coaching staff. SmartCoach360 gave us full visibility into all programs and results. Not only has it improved team coordination, but it has also helped our club retain clients more effectively",
    rating: 5
  },
  {
 name: "John",
    role: "Coach",
    company: "FitMom Club",
    content: "I struggled to grow my client base because marketing and lead management were overwhelming. SmartCoach360’s built-in client tracking and automated reminders have streamlined my workflow. I’m now reaching more clients with less effort, and my revenue has increased noticeably.",
    rating: 5
  },
  {
    name: "Pramod",
    role: "Client Success Representative",
    company: "FitMom Club",
    content: "Handling inquiries and follow-ups manually was exhausting and error-prone. SmartCoach360's automated workflows and lead tracking system have made our sales process smooth and efficient. We can now focus on converting leads rather than chasing them.",
    rating: 5
  },
  
{
  name: "Priya",
  role: "Nutritionist",
  company: "FitKid Club",
  content: "Earlier, meal plans and follow-ups were managed manually and it often led to missed updates. With SmartCoach360, I can track each child’s nutrition plan and progress easily and keep parents informed on time.",
  rating: 5
},
{
  name: "Sneha",
  role: "Coach",
  company: "LK",
  content: "SmartCoach360 made client communication and session tracking very simple. Automated reminders and progress reports helped my clients stay more consistent and motivated with their fitness goals.",
  rating: 5
},
{
  name: "Ritika",
  role: "Nutritionist",
  company: "FitMom Club",
  content: "Creating personalized diet plans and tracking adherence used to be very time-consuming. SmartCoach360 allows me to monitor every client’s nutrition journey and follow up effectively without manual work.",
  rating: 5
},
{
  name: "Amit",
  role: "Coach",
  company: "FitDad Club",
  content: "All my client schedules, progress updates and follow-ups are now managed through one platform. SmartCoach360 helped me save a lot of time and focus more on actual coaching instead of administration.",
  rating: 5
},
{
  name: "Neha",
  role: "Nutritionist",
  company: "VMax",
  content: "SmartCoach360 gives me a clear view of client adherence and progress. It has improved the way I track outcomes and communicate recommendations with both clients and trainers.",
  rating: 5
},
{
  name: "Rahul",
  role: "Coach",
  company: "FitKid Club",
  content: "Managing kids’ sessions and progress tracking is much easier now. SmartCoach360 helped me organize programs better and maintain consistent engagement with parents and students.",
  rating: 5
},
{
  name: "Pooja",
  role: "Nutritionist",
  company: "FitDad Club",
  content: "With SmartCoach360, I can easily review client food logs, track progress and send timely follow-ups. My clients are more disciplined and the overall results have improved.",
  rating: 5
}

];

const TestimonialSection = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-400">
           What Our Users Say
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            <span className="text-white font-normal">Trusted by thousands of fitness and wellness professionals</span> worldwide who are <br/>transforming their coaching businesses with SmartCoach360
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex-shrink-0 w-[350px] md:w-[400px] mx-3"
                  >
                    <div className="group relative bg-[#171717] rounded-2xl border border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-500 overflow-hidden h-full">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 via-transparent to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="p-6 relative z-10">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                            <Quote className="w-10 h-10 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-300 relative z-10" />
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-zinc-400 text-sm mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 min-h-[100px] font-['Source_Code_Pro',monospace]">
                          "{testimonial.content}"
                        </p>

                        {/* Author Info */}
                        <div className="pt-4 border-t border-zinc-800">
                          <h4 className="text-white/90 font-semibold text-sm group-hover:text-purple-100 transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-zinc-500 text-xs group-hover:text-zinc-400 transition-colors duration-300">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 mb-6">
            Join thousands of coaches already growing their business
          </p>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
            Book a Demo
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;