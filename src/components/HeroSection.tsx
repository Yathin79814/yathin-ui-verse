import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute -right-40 top-40 w-96 h-96 bg-portfolio-secondary rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 bg-portfolio-accent rounded-full opacity-10 filter blur-3xl"></div>
      
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 animate-slide-in">
          <div className="text-portfolio-accent font-semibold mb-4">Hello, I'm</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">D. Yathin</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-text mb-6">UI/UX Designer &amp; Influencer</h2>
          <p className="text-lg mb-8 leading-relaxed max-w-lg">
            Computer Science student at IIITDM Kancheepuram with a passion for AI, 
            leadership, and creative problem-solving through thoughtful design.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-portfolio-accent hover:bg-portfolio-contrast text-white" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button className="border-2 border-portfolio-accent bg-transparent text-portfolio-contrast hover:bg-portfolio-accent hover:text-white" asChild>
              <a href="#resume">My Experience</a>
            </Button>
          </div>
        </div>
        
        
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <ChevronDown size={32} className="text-portfolio-accent" />
      </a>
    </section>;
};
export default HeroSection;