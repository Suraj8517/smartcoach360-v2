import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black to-[#121212] pt-10">
      {/* subtle background gradient */}
      <div className="absolute inset-0" />

      <div className="relative max-w-5xl mx-auto px-6 pt-34 pb-24 text-center">

        {/* Heading */}
        <h1 className="font-base tracking-tight text-white/70
                       text-4xl sm:text-5xl md:text-5xl lg:text-7xl mt-3">
          The flexible way to manage
          <br />
          <span className="text-purple-900">
            your coaching business
          </span>
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-xl mx-auto text-base sm:text-lg
                      text-gray-300/70 leading-relaxed">
          SmartCoach360 is the all-in-one platform.
          </p>
          <p className="max-w-xl mx-auto text-base sm:text-lg
                      text-gray-300/70 leading-relaxed"> Manage your coaching
          business with scheduling, payments, client management, automation
          and real-time insights.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            className="px-6 py-1 rounded-lg font-medium text-white/90
                       bg-purple-900 hover:bg-purple-800 transition"
          >
           Contact Us
          </button>

          <button
            className="px-6 py-1 rounded-lg font-medium text-white/90
                       bg-white/10 border border-white/10
                       hover:bg-white/15 transition"
          >
            Book a Demo
          </button>
        </div>

      </div>
      
      <LogoCarousel/>
    </section>
  );
};

export default Hero;
