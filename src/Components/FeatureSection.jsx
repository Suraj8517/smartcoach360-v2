import {User,UserCheck,CalendarCheck,CreditCard,TrendingUp,Workflow,PhoneOutgoing} from 'lucide-react';
const FeatureSection = () => {
  return (
    <section className="bg-[#121212] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
  
          <div className="lg:col-span-2 relative bg-[#171717] border  rounded-lg p-6 hover:border-zinc-500/60 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 border-zinc-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-500 group overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <User className='text-purple-400/70 group-hover:text-purple-500 transition-transform duration-500'/>
                </div>

                <h3 className="text-white/70 text-base font-medium group-hover:text-purple-100 transition-colors duration-300">
                  Lead Management
                </h3>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors duration-300">
                Capture, organize, and convert{" "}
                <span className="text-white/70 group-hover:text-purple-200 transition-colors duration-300">every potential member</span> into a paying client with a structured lead workflow.
              </p>

              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  "Track lead status from inquiry to conversion",
                  "Assign leads to coaches or sales staff",
                  "Automate follow-ups and reminders"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1 "
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" style={{ transitionDelay: `${index * 100}ms` }} />
                      <svg
                        className="w-4 h-4 text-green-400 transition-all duration-300 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="group-hover:text-zinc-300 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-6 right-6 w-48 md:w-56 h-40 md:h-48 flex items-end justify-end opacity-20 group-hover:opacity-40 pointer-events-none transition-all duration-700">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-zinc-300 group-hover:text-purple-400 transition-colors duration-700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="userGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated background shapes */}
                <g className="animate-pulse">
                  <rect
                    x={36}
                    y={36}
                    width="140"
                    height="140"
                    rx="28"
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeWidth="1.5"
                    className="transition-all duration-1000"
                  />
                  <rect
                    x={33}
                    y={33}
                    width="140"
                    height="140"
                    rx="28"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={105}
                    cy={106}
                    r="70"
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>

                <g
                  filter="url(#userGlow)"
                  className="transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                >
                  <circle
                    cx="100"
                    cy="78"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />

                  <path
                    d="M68 126 Q100 104 132 126"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="group-hover:scale-110 transition-transform duration-500"
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />

                  <path
                    d="M80 138 Q100 150 120 138"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeOpacity="0.9"
                  />
                </g>
              </svg>
            </div>
          </div>

         
          <div className="bg-[#171717] border  rounded-lg p-6 border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <UserCheck className='text-purple-400/70 ggroup-hover:text-purple-500 transition-transform duration-500' />
                </div>
                <h4 className="text-white/70 text-base font-medium group-hover:text-blue-100 transition-colors duration-300">Client Management</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Maintain complete,<span className="text-white/70 group-hover:text-blue-200 transition-colors duration-300"> centralized client profiles</span> that give your team full visibility into every member's journey. 
              </p>
              
              <div className="space-y-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="grid grid-cols-2 gap-3">
                    {[0, 1].map((col) => (
                      <div 
                        key={col}
                        className="h-9 bg-zinc-900 border border-zinc-800 rounded group-hover:border-blue-500/20 transition-all duration-300 group-hover:bg-zinc-900/50 transform group-hover:scale-105 overflow-hidden"
                        style={{ 
                          transitionDelay: `${(row * 2 + col) * 50}ms`,
                          ...(row === 0 || row === 2 ? {
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '0.75rem'
                          } : {})
                        }}
                      >
                        {row === 0 && col === 0 && <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300 ">160198@gmail.com</span>}
                        {row === 0 && col === 1 && <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">alex160198</span>}
                        {row === 2 && col === 0 && <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">x2345678@gmail.com</span>}
                        {row === 2 && col === 1 && <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">mememaster000</span>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#171717] border hover:border-zinc-400/60 rounded-lg p-6 border-zinc-400/20 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <CreditCard className="text-purple-400/70 group-hover:text-purple-500" />
                </div>
                <h4 className="text-white/70 text-base font-medium group-hover:text-purple-100 transition-colors duration-300">Payment Tracking</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Manage <span className="text-white/70 group-hover:text-purple-200 transition-colors duration-300">memberships, billing, and renewals </span>with a streamlined and transparent payment system.
              </p>
              
              <div className="relative h-32 flex items-center justify-center">
                <div className="text-xs text-purple-500 font-mono absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse">
                  $ processing payments...
                </div>
                <svg viewBox="0 0 120 120" className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <g className="group-hover:animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "60px 60px" }}>
                    <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 group-hover:text-purple-600/90 transition-colors duration-500" />
                    <ellipse cx="60" cy="60" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 group-hover:text-purple-600/90 transition-colors duration-500" />
                    <ellipse cx="60" cy="60" rx="20" ry="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 group-hover:text-purple-600/90 transition-colors duration-500" />
                    <line x1="15" y1="60" x2="105" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 group-hover:text-purple-600/90 transition-colors duration-500" />
                    <line x1="60" y1="15" x2="60" y2="105" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 group-hover:text-purple-600/90 transition-colors duration-500" />
                  </g>
                  <circle cx="60" cy="30" r="2" fill="currentColor" className="text-purple-500 group-hover:animate-ping" />
                  <circle cx="60" cy="30" r="2" fill="currentColor" className="text-purple-500" />
                  <circle cx="80" cy="70" r="2" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "200ms" }} />
                  <circle cx="40" cy="80" r="2" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "400ms" }} />
                  {/* Connection lines */}
                  <path d="M 60,30 L 80,70" stroke="currentColor" strokeWidth="0.5" className="text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                </svg>
              </div>
            </div>
          </div>

          {/* Appointment Scheduling */}
          <div className="relative bg-[#171717] border rounded-lg p-6 border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-500" />
                  <CalendarCheck className="text-purple-400/70 group-hover:text-purple-500" />
                </div>
                <h4 className="text-white/70 text-base font-medium md:group-hover:text-purple-100 transition-colors duration-300">Appointment Scheduling</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 md:group-hover:text-zinc-300 transition-colors duration-300">
                Enable seamless <span className="text-white/70 md:group-hover:text-purple-200 transition-colors duration-300">booking and scheduling of sessions, consultations, and classes</span> without manual coordination.
              </p>
              
              <div className="grid grid-cols-6 gap-2 opacity-50 md:opacity-30 md:group-hover:opacity-50 transition-opacity duration-500">
                {[...Array(18)].map((_, i) => {
                  const isBooked = [2, 5, 7, 10, 13, 16].includes(i);
                  return (
                    <div 
                      key={i} 
                      className={`aspect-square border rounded flex items-center justify-center transition-all duration-300 transform md:group-hover:scale-110 ${
                        isBooked 
                          ? 'bg-purple-500/20 border-purple-500/40 md:bg-zinc-900 md:border-zinc-800 md:group-hover:bg-purple-500/20 md:group-hover:border-purple-500/40' 
                          : 'bg-zinc-800 border-zinc-700 md:group-hover:border-purple-500/20 md:group-hover:bg-zinc-900/50'
                      }`}
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {isBooked && (
                        <svg className="w-3 h-3 text-purple-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* progress tracking */}
           <div className="relative bg-[#171717] border rounded-lg p-6 border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-500" />
                  <TrendingUp className="text-purple-400/70 group-hover:text-purple-500" />
                </div>
                <h4 className="text-white/70 text-base font-medium md:group-hover:text-purple-100 transition-colors duration-300">Progress Tracking</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 md:group-hover:text-zinc-300 transition-colors duration-300">
                Track, analyze, and showcase <span className="text-white/70 md:group-hover:text-purple-200 transition-colors duration-300">client fitness progress </span>with clear, data-driven performance insights.
              </p>
              
              {/* Growth chart animation */}
              <div className="relative h-32 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full opacity-50 md:opacity-30 md:group-hover:opacity-50 transition-opacity duration-500">
                  <defs>
                    <radialGradient id="progressGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgb(236,72,153)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="rgb(236,72,153)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(236,72,153)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(236,72,153)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Glow effect */}
                  <circle cx="60" cy="65" r="32" fill="url(#progressGlow)" className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Grid lines (wireframe) */}
                  <g className="text-zinc-800">
                    <line x1="30" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="30" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="30" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="30" y1="30" x2="90" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  </g>

                  {/* Animated growth bars */}
                  <g className="text-purple-400 md:text-zinc-700 md:group-hover:text-purple-400 transition-colors duration-500">
                    <rect 
                      x="38" 
                      y="82" 
                      width="8" 
                      height="8" 
                      rx="1" 
                      fill="url(#barGradient)"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="origin-bottom scale-y-100 md:scale-y-75 md:group-hover:scale-y-100 transition-transform duration-700"
                      style={{ transformBox: 'fill-box' }}
                    />
                    <rect 
                      x="52" 
                      y="70" 
                      width="8" 
                      height="20" 
                      rx="1" 
                      fill="url(#barGradient)"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="origin-bottom scale-y-100 md:scale-y-75 md:group-hover:scale-y-100 transition-transform duration-700"
                      style={{ transformBox: 'fill-box', transitionDelay: '100ms' }}
                    />
                    <rect 
                      x="66" 
                      y="55" 
                      width="8" 
                      height="35" 
                      rx="1" 
                      fill="url(#barGradient)"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="origin-bottom scale-y-100 md:scale-y-75 md:group-hover:scale-y-100 transition-transform duration-700"
                      style={{ transformBox: 'fill-box', transitionDelay: '200ms' }}
                    />
                    <rect 
                      x="80" 
                      y="38" 
                      width="8" 
                      height="52" 
                      rx="1" 
                      fill="url(#barGradient)"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="origin-bottom scale-y-100 md:scale-y-75 md:group-hover:scale-y-100 transition-transform duration-700"
                      style={{ transformBox: 'fill-box', transitionDelay: '300ms' }}
                    />
                  </g>

                  <path 
                    d="M 42 86 L 56 75 L 70 60 L 84 43" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    className="text-purple-500 animate-[dash_2s_ease-in-out_forwards] md:animate-none md:group-hover:animate-[dash_2s_ease-in-out_forwards]"
                  />

                  {/* Data points */}
                  <circle cx="42" cy="86" r="2" className="fill-purple-500 animate-pulse" />
                  <circle cx="56" cy="75" r="2" className="fill-purple-500 md:opacity-0 md:group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '100ms' }} />
                  <circle cx="70" cy="60" r="2" className="fill-purple-500 md:opacity-0 md:group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '200ms' }} />
                  <circle cx="84" cy="43" r="2" className="fill-purple-500 md:opacity-0 md:group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '300ms' }} />

                  
                </svg>
              </div>
            </div>
          </div>


          {/* Workflow */}
          <div className="bg-[#171717] border  rounded-lg p-6 border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <Workflow className="text-purple-400/70 group-hover:text-purple-500" />
                </div>
                <h4 className="text-white/70 text-base font-medium group-hover:text-purple-100 transition-colors duration-300">Workflow Automation</h4>
              </div>
              <p className="text-zinc-400 text-white/70 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
              Automate<span className="text-white/70 group-hover:text-purple-200 transition-colors duration-300"> repetitive operational tasks</span> so your team can focus more on clients and growth. 
              </p>
              
              {/* 3D cube with vectors */}
              <div className="relative h-32 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  {/* 3D Cube with rotation */}
                  <g className="text-zinc-700 group-hover:text-purple-600/30 transition-colors duration-500">
                    <g className="group-hover:animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "60px 60px" }}>
                      <path d="M 35,35 L 75,35 L 75,75 L 35,75 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M 45,45 L 85,45 L 85,85 L 45,85 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                      <line x1="35" y1="35" x2="45" y2="45" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="75" y1="35" x2="85" y2="45" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="75" y1="75" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="35" y1="75" x2="45" y2="85" stroke="currentColor" strokeWidth="0.5" />
                    </g>
                  </g>
                  {/* Vector points with sequential pulse */}
                  <circle cx="50" cy="50" r="2" fill="currentColor" className="text-purple-500 group-hover:animate-ping" />
                  <circle cx="50" cy="50" r="2" fill="currentColor" className="text-purple-500" />
                  <circle cx="70" cy="55" r="1.5" fill="currentColor" className="text-purple-600 group-hover:animate-pulse transition-colors duration-500" style={{ animationDelay: "200ms" }} />
                  <circle cx="60" cy="70" r="1.5" fill="currentColor" className="text-purple-600 group-hover:animate-pulse transition-colors duration-500" style={{ animationDelay: "400ms" }} />
                  <circle cx="80" cy="75" r="1.5" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "100ms" }} />
                  <circle cx="48" cy="80" r="1.5" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "200ms" }} />
                  <circle cx="75" cy="48" r="1.5" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "300ms" }} />
                  <circle cx="55" cy="60" r="1.5" fill="currentColor" className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-500" style={{ transitionDelay: "400ms" }} />
                </svg>
              </div>
              
              {/* Data providers */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1.5 group/badge">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 group-hover/badge:border-purple-500/50 flex items-center justify-center transition-all duration-300 group-hover/badge:scale-110">
                    <svg className="w-2.5 h-2.5 text-zinc-500 group-hover/badge:text-purple-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-500 group-hover/badge:text-purple-400 transition-colors duration-300">Reports</span>
                </div>
                <div className="flex items-center gap-1.5 group/badge">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 group-hover/badge:border-purple-500/50 flex items-center justify-center transition-all duration-300 group-hover/badge:scale-110">
                    <svg className="w-2.5 h-2.5 text-zinc-500 group-hover/badge:text-purple-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-500 group-hover/badge:text-purple-400 transition-colors duration-300">Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Tools */}
          <div className="bg-[#171717] border rounded-lg p-6 border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)] transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <PhoneOutgoing className="text-purple-400/70 group-hover:text-purple-500"/>
                </div>
                <h4 className="text-white/70 text-base font-medium group-hover:text-purple-100 transition-colors duration-300">Communication Tools</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Send messages, notifications, and updates with <span className="text-white/60 group-hover:text-purple-200 transition-colors duration-300">integrated messaging</span>.
              </p>
              
              <div className="space-y-2 opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                {[
                  { name: 'Email', path: '/send/email' },
                  { name: 'SMS', path: '/send/sms' },
                  { name: 'In-App', path: '/send/notification' },
                  { name: 'Slack', path: '/send/slack' },
                ].map((endpoint, index) => (
                  <div 
                    key={endpoint.name} 
                    className="flex items-center gap-2 text-xs transform transition-all duration-300 hover:translate-x-1 group-hover:scale-105"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <svg className="w-3 h-3 text-zinc-700 group-hover:text-purple-500/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">{endpoint.name}</span>
                    <span className="ml-auto text-zinc-700 group-hover:text-purple-500/50 font-mono transition-colors duration-300">{endpoint.path}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <p className="text-start text-xl text-zinc-500 mt-3 animate-fade-in">
          <span className="text-white font-normal">All-in-one platform.</span>{" "}
          Everything you need to run your coaching business, integrated seamlessly.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;