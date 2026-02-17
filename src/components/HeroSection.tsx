import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolMarquee from "@/components/ToolMarquee";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* ================= PREMIUM BACKGROUND GLOWS ================= */}
      <div className="absolute -right-40 top-40 w-[500px] h-[500px] 
        bg-portfolio-secondary rounded-full opacity-30 blur-[140px]" />

      <div className="absolute -left-40 bottom-40 w-[500px] h-[500px] 
        bg-portfolio-accent rounded-full opacity-20 blur-[140px]" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-transparent via-white/30 to-white pointer-events-none" />

      <div className="section-container flex flex-col md:flex-row items-center relative z-10">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 animate-slide-in">

          {/* Hello + Premium Badge */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-portfolio-accent font-semibold text-lg">
              Hello, I'm
            </p>

            {/* Premium Glass Badge */}
            <span
              className="px-4 py-1.5 text-xs font-semibold rounded-full 
              bg-green-200/40 text-green-800 border border-green-300 
              shadow-md backdrop-blur-md"
            >
              Open for Opportunities ✨
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5">
            YATHIN D
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-text mb-6">
            UI/UX & Marketing Design Specialist
          </h2>

          {/* Description */}
          <p className="text-lg mb-8 leading-relaxed max-w-lg">
  I design clean and user-focused digital experiences, combining UI/UX thinking 
  with strong visual storytelling and marketing creativity. From app prototypes 
  to winning design campaigns, I build interfaces that connect with people.
</p>

          {/* Buttons Premium Hover */}
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-portfolio-accent hover:bg-portfolio-contrast 
              text-white px-7 py-6 rounded-xl shadow-lg hover:scale-[1.03] transition-all"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            <Button
              className="border-2 border-portfolio-accent bg-transparent 
              text-portfolio-contrast px-7 py-6 rounded-xl 
              hover:bg-portfolio-accent hover:text-white 
              hover:scale-[1.03] transition-all"
              asChild
            >
              <a href="#resume">My Experience</a>
            </Button>

            {/* Resume Download */}
            <Button
              className="bg-white border border-gray-300 text-gray-700 
              px-7 py-6 rounded-xl shadow-sm 
              hover:border-portfolio-accent hover:text-portfolio-accent 
              hover:scale-[1.03] transition-all"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume 📄
              </a>
            </Button>
          </div>

          {/* Tools Section */}
          <div className="mt-14">
            <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
              Tools I Work With
            </p>
            <ToolMarquee />
          </div>
        </div>

        {/* ================= RIGHT AVATAR PREMIUM ================= */}
        <div className="md:w-1/2 flex justify-center relative animate-fade-in">

          {/* Glow Rings Behind Avatar */}
          <div className="absolute w-[520px] h-[520px] 
            bg-portfolio-accent/25 rounded-full blur-[120px] 
            top-24 right-10" />

          <div className="absolute w-[450px] h-[450px] 
            bg-yellow-400/20 rounded-full blur-[120px] 
            bottom-10 left-10" />

          {/* Floating Premium Sparkles */}
          <div className="absolute top-16 left-20 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-40 right-24 w-3 h-3 bg-portfolio-accent rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-24 left-32 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-80"></div>

          {/* Avatar Image */}
          <img
            src="/images/profile.svg"
            alt="D. Yathin"
            className="relative z-10 w-[440px] md:w-[560px] 
            drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] 
            hover:scale-[1.02] transition-transform duration-500"
          />

          {/* Floating UI Badge */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 
            bg-white/80 backdrop-blur-lg p-3 rounded-full shadow-xl">
            <div className="bg-portfolio-accent text-white w-16 h-16 
              rounded-full flex items-center justify-center text-xs font-semibold">
              UI/UX <br /> Designer
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={34} className="text-portfolio-accent" />
      </a>
    </section>
  );
};

export default HeroSection;
