import React from 'react';
import vmax from '../assets/logos/brandlogos/vmax.png'
import lk from '../assets/logos/brandlogos/lk.png'
import fitdad from '../assets/logos/brandlogos/fitdad.png'
import fitkid from '../assets/logos/brandlogos/fitkid.png'
import miracle from '../assets/logos/brandlogos/miracle.png'
import mindfully from '../assets/logos/brandlogos/yours-mindfully.png'
import fitmom from '../assets/logos/brandlogos/fitmomclub.png'

const LogoCarousel = () => {
  const logos = [
    { name: 'Fit Mom Club', src: fitmom },
    { name: 'VMax', src: vmax },
    { name: 'FitDad Club', src: fitdad },
    { name: 'LK', src: lk },
    { name: 'FitKid Club', src: fitkid },
    { name: 'Yours Mindfully', src: mindfully },
    { name: 'FMC Miracle', src: miracle },
    { name: 'LK', src: lk },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="max-w-3xl mx-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="relative w-full overflow-hidden">

          {/* Logo strip container with proper blend fade */}
          <div
            className="
              relative w-full overflow-hidden mb-4
              mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
            "
          >
            <div className="flex items-center animate-scroll-images">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
                  style={{ minWidth: 'max-content' }}
                >
                  <div className="sm:h-15 flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="
                        h-12 w-auto object-contain
                        opacity-60
                        transition-all duration-300
                        hover:opacity-100
                        hover:scale-105
                        hover:drop-shadow-[0_0_18px_rgba(147,51,234,0.35)]
                      "
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="mb-4 sm:mb-6 md:mb-4">
            <p className="text-center text-xs sm:text-sm md:text-base 2xl:text-lg text-white/50 font-medium tracking-wider">
              Trusted by leading companies
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scroll-images {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll-images {
          display: flex;
          width: max-content;
          animation: scroll-images 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-images:hover {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          .animate-scroll-images {
            animation-duration: 35s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-images {
            animation-duration: 40s;
          }
        }

        @media (min-width: 1536px) {
          .animate-scroll-images {
            animation-duration: 50s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-images {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
