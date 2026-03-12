import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ========================================= */
/* ✅ PROJECT DATA */
/* ========================================= */

const projects = [
  {
    id: 1,
    title: "End-to-End Food Delivery App",

    images: ["/food-1.jpg", "/food-2.jpg"],

    tools: ["Figma"],
    skills: ["UX Flow", "UI Design"],

    description: "Designed a complete mobile food ordering experience...",

    fullDescription:
      "This project focuses on designing an end-to-end food delivery mobile application experience. I worked on the complete user journey — from browsing restaurants, selecting meals, adding items to cart, and completing checkout smoothly. The UI was designed with a modern clean layout, consistent spacing, and user-friendly navigation. The goal was to create an intuitive ordering flow that feels fast, simple, and visually engaging.",
  },

  {
    id: 2,
    title: "Task Manager Application",

    images: ["/task-1.jpg", "/task-2.jpg"],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    description: "A productivity-focused task management UI design...",

    fullDescription:
      "In this project, I designed a modern Task Manager mobile application interface focused on productivity and simplicity. The design includes task creation, priority-based workflows, and a clean dashboard layout. I explored both light and dark mode screens, ensuring strong contrast and accessibility. This project helped me strengthen my UI structuring, interaction design thinking, and building consistent design systems inside Figma.",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",

    images: ["/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    description: "Built and deployed a premium portfolio website...",

    fullDescription:
      "This project is my personal portfolio website built to showcase my UI/UX work and design journey. I used ChatGPT for content structuring, Lovable for rapid UI building, and GitHub for deployment-ready hosting. The portfolio is fully responsive, modern, and recruiter-friendly.",
  },
];

/* ========================================= */
/* ✅ PROJECT MODAL */
/* ========================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-50 w-full max-w-5xl h-[75vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main Image */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-8 overflow-y-auto h-full">
          <h2 className="text-3xl font-bold mb-3">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {project.fullDescription}
          </p>

          <h3 className="font-semibold mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <Badge key={index}>{tool}</Badge>
            ))}
          </div>

          <h3 className="font-semibold mb-2">Skills Applied</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
              onClick={() => setSelectedProject(project)}
              className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
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

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
