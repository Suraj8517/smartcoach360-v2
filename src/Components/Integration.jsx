import { useState } from 'react';
import zoom from "../assets/integration-logos/zoom.svg"
import stripe from "../assets/integration-logos/stripe.svg"
import Twilio from "../assets/integration-logos/Twilio.png"
import razorpay from "../assets/integration-logos/razorpay.png"
import plivo from "../assets/integration-logos/plivo.svg"
import sheet from "../assets/integration-logos/gsheet.png"
import gfit from "../assets/integration-logos/heart.png"
import servetel from "../assets/integration-logos/servetel.webp"
import zoho from "../assets/integration-logos/zoho.svg"
import logo from "../assets/logos/logo.png"
const FrameworkSection = () => {
  const [activeFramework, setActiveFramework] = useState('the tools you already trust');

  const frameworks = [
    { 
      name: 'Zoom', 
      icon: zoom
    },
    { 
      name: 'Razorpay', 
      icon: razorpay
    },
    { 
      name: 'Stripe', 
      icon: stripe
    },
    { 
      name: 'Plivo', 
      icon: plivo
    },
    { 
      name: 'Zoho Suite', 
      icon: zoho
    },
    { 
      name: 'Google Fit', 
      icon: gfit
    },
    { 
      name: 'Twilio', 
      icon: Twilio
    },
    { 
      name: 'Servetel', 
      icon: servetel
    },
    { 
      name: 'Google Sheet', 
      icon: sheet
    }
  ];

  return (
    <section className="bg-[#121212] py-20 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-col items-center justify-between gap-12">
          
          {/* Left side - Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-400">
              Seamless integrations with
            </h2>
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mt-2 min-h-[1.2em] transition-all duration-300 text-center">
              {activeFramework}
            </h3>
          </div>

          {/* Right side - Framework Icons */}
          <div className="flex-1 flex items-center justify-center md:justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 md:gap-3 lg:gap-4">
              {frameworks.map((framework, index) => (
                <div
                  key={framework.name}
                  onClick={() => setActiveFramework(framework.name)}
                  onMouseEnter={() => setActiveFramework(framework.name)}
                  onMouseLeave={() => setActiveFramework('the tools you already trust')}
                  className={`w-15 h-15 md:w-15 md:h-15 lg:w-18 lg:h-18 transition-all duration-300 cursor-pointer transform`}
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                 <img
  src={framework.icon}
  alt={framework.name}
  className="w-16 h-16 object-contain grayscale hover:border hover:border-zinc-50/60 p-2 rounded-lg"
/>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;