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

    thumbnail: "/projects/thumb-food.png",
    images: [
      "/projects/food-1.jpg",
      "/projects/food-2.jpg"
    ],

    tools: ["Figma"],
    skills: ["UX Flow", "UI Design"],

    description: "Designed a complete mobile food ordering experience...",
    fullDescription:
      "This project focuses on designing an end-to-end food delivery journey...",
  },

  {
    id: 2,
    title: "Task Manager Application",

    thumbnail: "/projects/thumb-task.png",
    images: [
      "/projects/task-1.jpg",
      "/projects/task-2.jpg"
    ],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    description: "A productivity-focused task management UI design...",
    fullDescription:
      "In this project, I designed a modern Task Manager app...",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",

    thumbnail: "/projects/thumb-portfolio.png",
    images: [
      "/projects/port-1.jpg"
    ],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    description: "Built and deployed a premium portfolio website...",
    fullDescription:
      "This portfolio showcases my UI/UX projects and achievements...",
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
