import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolMarquee from "@/components/ToolMarquee";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background Blur Effects */}
      <div className="absolute -right-40 top-40 w-96 h-96 bg-portfolio-secondary rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 bg-portfolio-accent rounded-full opacity-10 filter blur-3xl"></div>

      <div className="section-container flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 animate-slide-in">
          
          {/* Hello + Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-portfolio-accent font-semibold">
              Hello, I'm
            </div>

            {/* ✅ Open for Opportunities Badge */}
            <span
              className="px-3 py-1 text-xs font-semibold rounded-full 
                         bg-green-100 text-green-700 border border-green-300"
            >
              Open for Internships 🚀
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            D. Yathin
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-text mb-6">
            UI/UX Designer & Influencer
          </h2>

          {/* Description */}
          <p className="text-lg mb-8 leading-relaxed max-w-lg">
            Computer Science student at IIITDM Kancheepuram with a passion for AI,
            leadership, and creative problem-solving through thoughtful design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            
            {/* View Work */}
            <Button
              className="bg-portfolio-accent hover:bg-portfolio-contrast text-white"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            {/* Experience */}
            <Button
              className="border-2 border-portfolio-accent bg-transparent 
                         text-portfolio-contrast hover:bg-portfolio-accent hover:text-white"
              asChild
            >
              <a href="#resume">My Experience</a>
            </Button>

            {/* ✅ Resume Download */}
            <Button
              className="bg-white border-2 border-gray-300 text-gray-700 
                         hover:border-portfolio-accent hover:text-portfolio-accent"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume 📄
              </a>
            </Button>
          </div>

          {/* Tools Section */}
          <div className="mt-10">
            <p className="text-sm font-semibold text-gray-500 mb-3">
              Tools I Work With
            </p>
            <ToolMarquee />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 animate-fade-in">
          <div className="relative">
            
            {/* Profile Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-secondary mx-auto overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/lovable-uploads/d6ec9903-1858-49bb-9693-ba805313eac1.png"
                alt="D. Yathin"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge Right */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-portfolio-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium">
                UI/UX
                <br />
                Designer
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-portfolio-accent" />
      </a>
    </section>
  );
};

export default HeroSection;
