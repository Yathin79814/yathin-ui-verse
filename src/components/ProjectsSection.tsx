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
    description:
      "Designed a complete food delivery experience from browsing to payment with clean UI screens and smooth user flow.",
    thumbnail: "/projects/thumb-food.jpg",
    images: ["/projects/food-1.jpg", "/projects/food-2.jpg"],
    tools: ["Figma", "UX Research", "Wireframing"],
    skills: ["User Journey Design", "Mobile UI", "Prototyping"],
  },

  {
    id: 2,
    title: "Task Manager Application",
    description:
      "Created a productivity-focused task manager UI with light & dark modes, simple task creation and priority workflow.",
    thumbnail: "/projects/thumb-task.jpg",
    images: ["/projects/task-1.jpg", "/projects/task-2.jpg"],
    tools: ["Figma", "UI Design", "Mobile App"],
    skills: ["Interaction Design", "Design Systems", "App UX"],
  },

  {
    id: 3,
    title: "Deploy-Ready Personal Portfolio",
    description:
      "Built a premium portfolio website using ChatGPT + Lovable with GitHub deployment-ready structure and clean modern UI.",
    thumbnail: "/projects/thumb-portfolio.jpg",

    // ✅ If only one image, keep only one
    images: ["/projects/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Web UI", "Deployment", "Modern Portfolio Design"],
  },
];

/* ========================================= */
/* ✅ PROJECT MODAL COMPONENT */
/* ========================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  /* ✅ Stop background scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

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

      {/* ✅ Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* ✅ Popup Box */}
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
          className="
            absolute top-5 right-5 
            bg-white/90 hover:bg-white 
            p-2 rounded-full shadow-md
          "
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ================= IMAGE SECTION (16:9) ================= */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="p-8 overflow-y-auto h-full">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3 text-portfolio-contrast">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
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

          {/* ✅ Second Image Only If Exists */}
          {project.images.length > 1 && (
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
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
