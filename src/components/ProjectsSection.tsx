import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ProjectModal from "@/components/ProjectModal"; // ✅ Import Modal

const projects = [
  {
    id: 1,
    title: "Online Grocery Shopping App",
    description:
      "UI/UX case study designing an end-to-end food delivery experience.",
    thumbnail: "/projects/thumb-grocery.jpg", // small thumbnail
    fullImage: "/projects/grocery.jpg", // big modal image
    tools: ["Figma", "UX Research", "Wireframing"],
  },
  {
    id: 2,
    title: "Task Manager App Prototype",
    description:
      "A productivity-focused task manager UI designed for simplicity.",
    thumbnail: "/projects/thumb-task.jpg",
    fullImage: "/projects/task-light.jpg",
    tools: ["Figma", "UI Design", "Mobile App"],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              {/* Thumbnail */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Hover Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Title */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
