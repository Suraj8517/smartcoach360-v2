import React from 'react';
import { Users, TrendingUp, Zap, Shield, MessageCircle, Smartphone, Mail, Phone, FileText, Activity ,ClipboardPlus,MicroscopeIcon, ShieldUserIcon, LockKeyholeIcon, EarthLockIcon, FileVideoCameraIcon, NotebookIcon, HeadsetIcon,File, MailCheck} from "lucide-react";

const features = [
  {
    title: "Integrations",
    description:
      "Integrate effortlessly with tools from payment gateways and communication apps to analytics platforms and automation services.",
    icon: Zap,
    badge: "Connect tools",
    preview: {
      type: "integration",
    }
  },
  {
    title: "Diagnostic Reports",
    description:
      "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly.",
    icon: TrendingUp,
    badge: "View reports",
    preview: {
      type: "chart",
      metrics: [
        { label: "Blood Work", value: 95 },
        { label: "Body Comp", value: 78 },
        { label: "Vitals", value: 88 },
        { label: "Progress", value: 92 }
      ]
    }
  },
  {
    title: "Security",
    description:
      "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage trusted by leading teams.",
    icon: Shield,
    badge: "Security overview",
    preview: {
      type: "security",
      features: ["End-to-end encryption", "2FA", "Secure Storage"]
    }
  },
  {
    title: "Free Resources",
    description:
      "Get instant access to premium resources including recipe collections, workout templates, and smart meal planners.",
    icon: FileText,
    badge: "Quick Start Kits",
    preview: {
      type: "resources",
      count: "500+"
    }
  },
  {
    title: "Customer Support",
    description:
      "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp.",
    icon: MessageCircle,
    badge: "Contact support",
    preview: {
      type: "support",
      channels: [
        { name: "Live Chat", icon: MessageCircle },
        { name: "Phone", icon: Phone },
        { name: "Email", icon: Mail },
        { name: "WhatsApp", icon: Smartphone }
      ]
    }
  },
  {
    title: "Branded App",
    description:
      "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint.",
    icon: Users,
    badge: "Launch your app",
    premium: true,
    preview: {
      type: "app",
      gradient: true
    }
  }
];

const FeaturePreview = ({ preview, icon: Icon }) => {
  switch (preview.type) {
    case "integration":
      return (
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Zap className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Shield className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Users className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    case "chart":
      return (
     <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Activity className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <ClipboardPlus className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <MicroscopeIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    case "security":
      return (
          <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <ShieldUserIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <LockKeyholeIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <EarthLockIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    case "resources":
      return (
         <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <File className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <FileVideoCameraIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <NotebookIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    case "support":
      return (
         <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <HeadsetIcon className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Phone className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <MailCheck className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    case "app":
      return (
          <div className="flex items-center justify-center gap-4 py-8">
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Smartphone className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <Shield className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/30 transition-all duration-300">
            <MessageCircle className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

const FeatureShowcase = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-400">
            Why Choose Us
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
<span className="text-white font-normal">Beyond our powerful features</span>, here are a few more <br/>reasons coaches love choosing SmartCoach360          </p>
       
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#171717] rounded-2xl border border-zinc-500/30 hover:border-zinc-500/60 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                {/* Icon Section */}
                <div className="p-6 border-b border-zinc-800">
                  <FeaturePreview preview={feature.preview} icon={Icon} />
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <Icon className="w-5 h-5 text-purple-400/70 group-hover:text-purple-500 transition-colors duration-300 relative z-10" />
                    </div>
                    <h3 className="text-lg font-semibold text-white/90 group-hover:text-purple-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                 
                </div>
              </div>
              
            );
          })}
          
        </div>

        
      </div>
    </div>
  );
};

export default FeatureShowcase;