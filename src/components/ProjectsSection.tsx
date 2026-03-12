import { useState } from "react";
import ProjectModal from "./ProjectModal";

/* ========================================= */
/* PROJECT DATA */
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
      "This project focuses on designing an end-to-end food delivery mobile application experience. I worked on the complete user journey — from browsing restaurants, selecting meals, adding items to cart, and completing checkout smoothly.",
  },

  {
    id: 2,
    title: "Task Manager Application",

    images: ["/task-1.jpg", "/task-2.jpg"],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    description: "A productivity-focused task management UI design...",

    fullDescription:
      "In this project, I designed a modern Task Manager mobile application interface focused on productivity and simplicity.",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",

    images: ["/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    description: "Built and deployed a premium portfolio website...",

    fullDescription:
      "This project is my personal portfolio website built to showcase my UI/UX work and design journey.",
  },
];

/* ========================================= */
/* PROJECT SECTION */
/* ========================================= */

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">

        <h2 className="section-title">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="
                rounded-xl overflow-hidden
                bg-white shadow-lg
                hover:shadow-xl transition
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600">
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
