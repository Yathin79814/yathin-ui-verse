
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize animations for elements with 'animate-on-scroll' class
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    // Run on initial load
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ScrollAnimation>
          <AboutSection />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <ExperienceSection />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <ProjectsSection />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <ExpertiseSection />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <AchievementsSection />
        </ScrollAnimation>
        
        <ScrollAnimation>
          <ContactSection />
        </ScrollAnimation>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
