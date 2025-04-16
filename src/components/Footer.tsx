
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-contrast text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">D. Yathin</h2>
            <p className="text-white/70 mt-1">AI Specialist & UI/UX Designer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#resume" className="text-white/70 hover:text-white transition-colors">Resume</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div>
            <a 
              href="#contact"
              className="inline-block px-5 py-2 bg-portfolio-accent text-white rounded-md hover:bg-white hover:text-portfolio-contrast transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} D. Yathin. All rights reserved.
          </p>
          
          <p className="text-white/70 text-sm flex items-center mt-4 md:mt-0">
            Designed with <Heart className="w-4 h-4 mx-1 text-portfolio-accent" /> by D. Yathin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
