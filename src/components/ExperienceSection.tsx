
import {
  Briefcase,
  Award,
  Star,
  ChevronRight,
  Calendar,
  GraduationCap,
  Wrench
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Under Officer",
      organization: "National Cadet Corps (NCC)",
      duration: "2021 - Present",
      description: "Leading a 52 cadets, organizing training sessions, and representing the institute at national-level camps and events.",
      icon: <Star className="w-6 h-6 text-portfolio-accent" />
    },
    {
      title: "Placement Cell Coordinator",
      organization: "IIITDM Kancheepuram",
      duration: "2022 - Present",
      description: "Serving as a liaison between students and companies, organizing placement drives, and mentoring junior students for interviews.",
      icon: <Briefcase className="w-6 h-6 text-portfolio-accent" />
    },
    {
      title: "Online Influencer",
      organization: "@designpreneurss",
      duration: "2020 - Present",
      description: "Building a community of 35K+ followers focused on design and entrepreneurship, creating educational content, and mentoring aspiring designers.",
      icon: <Award className="w-6 h-6 text-portfolio-accent font-bold" />,
      highlight: true
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science (AI Specialization)",
      institution: "IIITDM Kancheepuram",
      duration: "2020 - 2024",
      description: "Focusing on artificial intelligence, machine learning, and design thinking. Maintaining a strong academic record while actively participating in extracurricular activities."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-portfolio-background">
      <div className="section-container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-portfolio-accent" />
              Leadership Roles
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 border-l-2 ${exp.highlight ? 'border-portfolio-accent' : 'border-portfolio-secondary'}`}
                >
                  <div className={`absolute -left-3 top-0 w-6 h-6 ${exp.highlight ? 'bg-portfolio-accent text-white' : 'bg-white'} rounded-full border-2 border-portfolio-accent flex items-center justify-center`}>
                    {exp.icon}
                  </div>
                  
                  <div className="mb-1 flex items-center text-sm text-portfolio-text/70">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <h4 className={`text-xl font-semibold ${exp.highlight ? 'text-portfolio-accent' : ''}`}>
                    {exp.title}
                    {exp.highlight && <span className="ml-2 inline-block animate-pulse">★</span>}
                  </h4>
                  <p className={`${exp.highlight ? 'text-portfolio-accent font-medium' : 'text-portfolio-accent'} mb-2`}>
                    {exp.organization}
                  </p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-portfolio-accent" />
              Education
            </h3>
            
            <div className="card">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center text-sm text-portfolio-text/70">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-portfolio-accent mb-4">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-2 text-portfolio-accent" />
              Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h4 className="text-lg font-semibold mb-3">Technical</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Artificial Intelligence
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Figma & Canva
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Programming
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Leadership
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Communication
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Team Management
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-portfolio-accent mr-2" />
                    Problem Solving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
