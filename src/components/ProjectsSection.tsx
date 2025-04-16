import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "Complete UX overhaul for a fashion e-commerce platform, focusing on improved conversion rates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    category: "ui-ux",
    tools: ["Figma", "Prototype", "UI/UX"],
    link: "#"
  },
  {
    id: 2,
    title: "HackAdThon Marketing Campaign",
    description: "Marketing campaign for HackAdThon event that reached over 1000 participants.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop",
    category: "marketing",
    tools: ["Canva", "Social Media", "Strategy"],
    link: "#"
  },
  {
    id: 3,
    title: "Todo App Design",
    description: "A clean, intuitive to-do application design focused on simplicity and productivity.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop",
    category: "ui-ux",
    tools: ["Figma", "Mobile Design", "UI/UX"],
    link: "#"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-portfolio-secondary bg-opacity-20 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-white shadow-md text-portfolio-contrast' : 'text-portfolio-text hover:bg-white/50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('ui-ux')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'ui-ux' ? 'bg-white shadow-md text-portfolio-contrast' : 'text-portfolio-text hover:bg-white/50'
              }`}
            >
              UI/UX Design
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'marketing' ? 'bg-white shadow-md text-portfolio-contrast' : 'text-portfolio-text hover:bg-white/50'
              }`}
            >
              Marketing
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="bg-white text-portfolio-contrast">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="bg-portfolio-secondary/10 text-portfolio-contrast border-none">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-accent hover:bg-portfolio-contrast text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
