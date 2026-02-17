import { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

    // ✅ Card Preview
    description: "Designed a complete mobile food ordering experience...",

    // ✅ Modal Full Detail
    fullDescription:
      "This project focuses on designing an end-to-end food delivery mobile application experience. I worked on the complete user journey — from browsing restaurants, selecting meals, adding items to cart, and completing checkout smoothly. The UI was designed with a modern clean layout, consistent spacing, and user-friendly navigation. The goal was to create an intuitive ordering flow that feels fast, simple, and visually engaging.",
  },

  {
    id: 2,
    title: "Task Manager Application",

    thumbnail: "/thumb-task.png",
    images: ["/task-1.jpg", "/task-2.jpg"],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    // ✅ Card Preview
    description: "A productivity-focused task management UI design...",

    // ✅ Modal Full Detail
    fullDescription:
      "In this project, I designed a modern Task Manager mobile application interface focused on productivity and simplicity. The design includes task creation, priority-based workflows, and a clean dashboard layout. I explored both light and dark mode screens, ensuring strong contrast and accessibility. This project helped me strengthen my UI structuring, interaction design thinking, and building consistent design systems inside Figma.",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",

    thumbnail: "/thumb-portfolio.png",
    images: ["/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    // ✅ Card Preview
    description: "Built and deployed a premium portfolio website...",

    // ✅ Modal Full Detail
    fullDescription:
      "This project is my personal portfolio website built to showcase my UI/UX work and design journey. I used ChatGPT for content structuring, Lovable for rapid UI building, and GitHub for deployment-ready hosting. The portfolio is fully responsive, modern, and recruiter-friendly. It highlights my projects, achievements, and skills in a clean premium layout while being easy to maintain and update.",
  },
];

/* ========================================= */
/* ✅ PROJECT MODAL COMPONENT */
/* ========================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  /* ✅ Close modal on ESC key */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Popup Box */}
      <div
        className="
          relative z-50 
          w-full max-w-5xl 
          h-[75vh]
          bg-white rounded-3xl 
          shadow-2xl overflow-hidden
          animate-fadeInScale
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Image Section */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 overflow-y-auto h-full">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-3 text-portfolio-contrast">
            {project.title}
          </h2>

          {/* Full Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {project.fullDescription}
          </p>

          {/* Tools */}
          <h3 className="font-semibold text-lg mb-2">Tools Used:</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <Badge
                key={index}
                className="bg-portfolio-secondary/20 text-portfolio-contrast px-4 py-1"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold text-lg mb-2">Skills Applied:</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm bg-gray-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Second Image Preview */}
          {project.images.length > 1 && (
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.images[1]}
                alt="Second Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ========================================= */
/* ✅ PROJECTS SECTION MAIN */
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
