
import {
  Brain,
  Layout,
  Lightbulb,
  Monitor,
  Palette,
  PenTool,
  Users
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const expertiseAreas = [
  {
    icon: <Brain className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Artificial Intelligence",
    description: "Specializing in machine learning algorithms, neural networks, and practical AI applications.",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Neural Networks", level: 80 },
      { name: "Data Analysis", level: 90 }
    ]
  },
  {
    icon: <Layout className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "UI/UX Design",
    description: "Creating intuitive and aesthetically pleasing interfaces with a focus on user experience.",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Canva", level: 90 },
      { name: "User Research", level: 80 }
    ]
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Leadership",
    description: "Leading teams and initiatives with a strategic vision and strong communication skills.",
    skills: [
      { name: "Team Management", level: 90 },
      { name: "Strategic Planning", level: 85 },
      { name: "Public Speaking", level: 80 }
    ]
  },
  {
    icon: <PenTool className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Content Creation",
    description: "Developing engaging and educational content for social media and digital platforms.",
    skills: [
      { name: "Social Media", level: 90 },
      { name: "Copywriting", level: 85 },
      { name: "Visual Design", level: 85 }
    ]
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-portfolio-background">
      <div className="section-container">
        <h2 className="section-title">My Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="card hover:border-l-4 hover:border-l-portfolio-accent transition-all">
              <div className="text-center md:text-left">
                {area.icon}
                <h3 className="text-2xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <div className="space-y-4">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-portfolio-accent">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-portfolio-secondary/30" indicatorClassName="bg-portfolio-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Monitor className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-gray-600">Programming, AI frameworks, design tools</p>
            </div>
            
            <div className="text-center">
              <Palette className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">Creative Skills</h3>
              <p className="text-gray-600">UI/UX design, visual communication, content creation</p>
            </div>
            
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-600">Analytical thinking, creative solutions, innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
