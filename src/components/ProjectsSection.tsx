import { useState } from "react";
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

    images: ["/projects/port-1.jpg", "/projects/port-2.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Web UI", "Deployment", "Modern Portfolio Design"],
  },
];

/* ========================================= */
/* ✅ PROJECT MODAL COMPONENT */
/* ========================================= */

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* ✅ Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* ✅ Popup Box 75% Screen */}
      <div className="relative z-50 w-[75%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= IMAGE SECTION (16:9) ================= */}
        <div className="w-full aspect-video bg-gray-100">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="p-8 grid md:grid-cols-2 gap-8">

          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tools Used */}
            <h3 className="font-semibold mb-2">Tools Used:</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="bg-portfolio-secondary/20 text-portfolio-contrast"
                >
                  {tool}
                </Badge>
              ))}
            </div>

            {/* Skills */}
            <h3 className="font-semibold mb-2">Skills Applied:</h3>
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

          {/* Right Side (Second Image Preview) */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.images[1]}
              alt="Second Preview"
              className="w-full h-full object-cover"
            />
          </div>
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
                    className="bg-white text-black"
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
