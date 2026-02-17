import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

/* ========================================= */
/* ✅ PROJECT DATA */
/* ========================================= */

const projects = [
  {
    id: 1,
    title: "End-to-End Food Delivery App",
    thumbnail: "/thumb-food.png",
    images: ["/food-1.jpg", "/food-2.jpg"],

    tools: ["Figma"],
    skills: ["UX Flow", "UI Design"],

    description: "Designed a complete mobile food ordering experience...",

    fullDescription:
      "This project focuses on designing an end-to-end food delivery mobile application experience. I worked on the complete user journey — from browsing restaurants, selecting meals, adding items to cart, and completing checkout smoothly. The UI was designed with a modern clean layout, consistent spacing, and user-friendly navigation.",
  },

  {
    id: 2,
    title: "Task Manager Application",
    thumbnail: "/thumb-task.png",
    images: ["/task-1.jpg", "/task-2.jpg"],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    description: "A productivity-focused task management UI design...",

    fullDescription:
      "In this project, I designed a modern Task Manager mobile application interface focused on productivity and simplicity. The design includes task creation, priority-based workflows, and a clean dashboard layout. I explored both light and dark mode screens, ensuring accessibility and consistency.",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",
    thumbnail: "/thumb-portfolio.png",
    images: ["/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    description: "Built and deployed a premium portfolio website...",

    fullDescription:
      "This project is my personal portfolio website built to showcase my UI/UX work and design journey. I used ChatGPT for content structuring, Lovable for rapid UI building, and GitHub for deployment-ready hosting. The portfolio is responsive, modern, and recruiter-friendly.",
  },
];

/* ========================================= */
/* ✅ PROJECTS SECTION */
/* ========================================= */

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Button
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
