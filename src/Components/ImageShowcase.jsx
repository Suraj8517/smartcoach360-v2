import { useState, useRef } from "react";
import client from "../assets/crm-images/clients.png";
import leads from "../assets/crm-images/leads.png";
import payments from "../assets/crm-images/payments.webp";
import client_progress from "../assets/crm-images/client-progress.webp";
import workflow from "../assets/crm-images/Workflow.webp";
import engage from "../assets/crm-images/engage.png";
import finance from "../assets/crm-images/finance.webp";
import realtime from "../assets/crm-images/Lead Management.png";
import interaction from "../assets/crm-images/interactions.png";
import { Users, UserCheck, CalendarCheck2, ChartSpline, CreditCard, Workflow, MessageCircle, Banknote, MessageCircleQuestionMark, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const features = [
    {
      title: "Capture, organize, and convert every potential member into a paying client with a structured lead workflow.",
      subtitle: "lead management",
      description: "Bring all your leads from trials, social media, and referrals into one centralized system. Track every interaction, assign ownership, and follow up at the right time to ensure no opportunity slips through the cracks.",
     details: [
  "Capture leads from all sources",
  "Track leads to conversion",
  "Assign leads to your team",
  "Automate follow-ups"
],
      image: leads,
      icon: <UserCheck className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Maintain complete, centralized client profiles that give your team full visibility into every member's journey.",
      subtitle: "client management",
      description: "Store and manage all client information — from personal details to workouts, diet plans, and engagement history — in one unified dashboard that's accessible anytime your team needs it.",
      details: [
  "Centralized client profiles",
  "Workouts and diet plans",
  "Attendance and engagement tracking",
  "Access data anytime"
]
,
      image: client,
      icon: <Users className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Enable seamless booking and scheduling of sessions, consultations, and classes without manual coordination.",
      subtitle: "appointment scheduling",
      description: "Simplify session management with an automated scheduling system that allows clients to book on their own while keeping trainers, classes, and availability perfectly organized.",
     details: [
  "Client self-booking",
  "Trainer and class scheduling",
  "Auto reminders",
  "Reduce no-shows"
]
,
      image: interaction,
      icon: <CalendarCheck2 className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Track, analyze, and showcase client fitness progress with clear, data-driven performance insights.",
      subtitle: "client progress tracking",
      description: "Monitor weight, measurements, workouts, and nutrition adherence through visual dashboards and reports that help trainers make smarter decisions and motivate clients with visible results.",
      details: [
  "Track body and fitness metrics",
  "Workout and diet compliance",
  "Progress charts and reports",
  "Share progress with clients"
]
,
      image: client_progress,
      icon: <ChartSpline className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Manage memberships, billing, and renewals with a streamlined and transparent payment system.",
      subtitle: "payment tracking",
      description: "Automate invoices, track payments, and send timely reminders to ensure smooth cash flow while maintaining a clear payment history for every client.",
      details: [
  "Membership and package payments",
  "Automated invoices",
  "Payment and renewal reminders",
  "Complete payment history"
]
,
      image: payments,
      icon: <CreditCard className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Automate repetitive operational tasks so your team can focus more on clients and growth.",
      subtitle: "workflow automation",
      description: "Eliminate manual follow-ups and routine admin work by automating reminders, check-ins, and daily workflows that keep your business running efficiently.",
      details: [
  "Automated trial follow-ups",
  "Session and class reminders",
  "Diet and workout check-ins",
  "Reduce manual work"
]
,
      image: workflow,
      icon: <Workflow className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Engage clients across multiple channels with consistent and timely communication tools.",
      subtitle: "communication tools",
      description: "Connect with clients through chat, email, and SMS from a single platform to share updates, reminders, and offers that keep them informed and engaged.",
     details: [
  "Real-time client chat",
  "Bulk and personal messaging",
  "Email and SMS support",
  "Share updates and offers"
],
      image: engage,
      icon: <MessageCircle className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Gain full visibility into your finances with structured tracking and insightful reporting.",
      subtitle: "finance management",
      description: "Monitor revenue, expenses, and outstanding dues with clear financial summaries that help you make informed business decisions with confidence.",
     details: [
  "Revenue and payment tracking",
  "Outstanding dues overview",
  "Financial summaries",
  "Smarter financial decisions"
]
,
      image: finance,
      icon: <Banknote className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    },
    {
      title: "Access real-time business insights that help you stay on top of performance from anywhere.",
      subtitle: "real-time insights",
      description: "View live dashboards that show memberships, active plans, renewals, and revenue performance across devices so you're always informed and in control.",
     details: [
  "Live membership stats",
  "Plans and renewals tracking",
  "Revenue performance view",
  "Access from any device"
],
      image: realtime,
      icon: <MessageCircleQuestionMark className="w-4 h-4" />,
      color: "from-[#6E0ACE] to-purple-700"
    }
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const activeFeature = features[activeIndex];

  return (
    <>
      {/* MOBILE VERSION - Compact Design */}
      <section className="block lg:hidden w-full px-4 py-8">
        <div className="flex-1 mb-12">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-400 text-center">
              Everything you need to run
            </h2>
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-2 min-h-[1.2em] transition-all duration-300 text-center">
              people operations
            </h3>
          </div>

        <div className="mb-4">
          <div className="relative mb-4">
            <div 
              ref={scrollContainerRef}
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
            >
              {features.map((feature, index) => (
                <button
                  key={feature.subtitle}
                  onClick={() => handleSelect(index)}
                  className={`shrink-0 snap-center px-3 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-zinc-900 text-white/80 border border-zinc-300 shadow-sm'
                    : 'bg-transparent text-zinc-400 border border-zinc-600 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{feature.icon}</span>
                    <span className="capitalize whitespace-nowrap">
                      {feature.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900">
            {/* Image with overlay */}
            <div className="relative animate-slideIn">
            {/* Browser window */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a] border border-zinc-900/80">
              {/* Browser Chrome Header */}
              <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#28c840]"></div>
                </div>
              </div>

              {/* Main content area */}
              <div className="bg-[#1a1a1a] p-3">
                <div className="relative bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 z-10 pointer-events-none"></div>
                  
                  <img
                    key={activeFeature.image}
                    src={activeFeature.image}
                    alt={activeFeature.subtitle}
                    className="w-full h-50 object-cover object-top-left transition-all duration-700 ease-out opacity-80 animate-imageFade"
                  />

                  
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        
      </section>

      {/* DESKTOP VERSION - Original Design */}
      <section className="hidden lg:block w-full max-w-5xl mx-auto px-4 py-16 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 blur-3xl rounded-full"></div>
        </div>

        <div className="flex-1 mb-12">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-400 text-center">
              Everything you need to run
            </h2>
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-2 min-h-[1.2em] transition-all duration-300 text-center">
              people operations
            </h3>
          </div>

        {/* Feature buttons grid */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-4 gap-4 mb-3">
            {features.slice(0, 4).map((feature, index) => (
              <button
                key={feature.subtitle}
                onClick={() => handleSelect(index)}
                className={`px-0.5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-zinc-900 text-white/80 border border-gray-300 shadow-sm'
                    : 'bg-transparent text-zinc-400 border border-zinc-600 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                 
                  <span className="capitalize whitespace-nowrap">
                    {feature.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4">
            {features.slice(4, 9).map((feature, index) => (
              <button
                key={feature.subtitle}
                onClick={() => handleSelect(index + 4)}
                className={`px-0.5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndex === index + 4
                    ? 'bg-zinc-900 text-white/80 border border-zinc-300 shadow-sm'
                    : 'bg-transparent text-zinc-400 border border-zinc-600 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  
                  <span className="capitalize whitespace-nowrap text-xs">
                    {feature.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feature tags */}
        <div className="flex justify-center items-center mt-8 gap-6 mb-12 text-sm">
          {activeFeature.details.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>

        <div className="lg:px-15 lg:mx-15 xl:mx-10 xl:px-10 items-center">
          <div className="relative animate-slideIn">
            {/* Browser window */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a] border border-zinc-900/80">
              {/* Browser Chrome Header */}
              <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
              </div>

              {/* Main content area */}
              <div className="bg-[#1d1d1d] p-3">
                <div className="relative bg-[#302f2f] rounded-lg overflow-hidden border border-gray-800">
                  <div className="absolute inset-0 z-10 pointer-events-none"></div>
                  
                  <img
                    key={activeFeature.image}
                    src={activeFeature.image}
                    alt={activeFeature.subtitle}
                    className="w-full h-100 object-cover object-top-left transition-all duration-300 ease-out opacity-100 animate-imageFade"
                  />

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes imageFade {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-imageFade {
          animation: imageFade 0.7s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}