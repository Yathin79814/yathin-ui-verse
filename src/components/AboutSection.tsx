
import { GraduationCap, Code, Layout, Users, Award, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate Computer Science student specializing in Artificial Intelligence at 
              IIITDM Kancheepuram, with a strong foundation in UI/UX design principles and leadership.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              My academic journey is complemented by my creative pursuits in design and my leadership roles
              across various domains. I believe in the power of technology to solve real-world problems
              and create meaningful impact.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              When I'm not coding or designing, I'm actively engaged in mentoring fellow students, 
              participating in national-level events, and growing my online community of designers
              and entrepreneurs.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Computer Science
              </span>
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Artificial Intelligence
              </span>
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Leadership
              </span>
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Figma
              </span>
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Canva
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="card">
              <GraduationCap className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>Computer Science at IIITDM Kancheepuram</p>
            </div>
            
            <div className="card">
              <Code className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">AI Specialist</h3>
              <p>Focusing on AI applications in real-world scenarios</p>
            </div>
            
            <div className="card">
              <Layout className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
              <p>Creating intuitive, user-centered digital experiences</p>
            </div>
            
            <div className="card">
              <Users className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Leader</h3>
              <p>Senior Under Officer in NCC and Placement Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
