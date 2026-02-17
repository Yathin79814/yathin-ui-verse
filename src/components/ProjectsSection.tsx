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
    images: ["/projects/food-1.jpg", "/projects/food-2.jpg"],

    tools: ["Figma"],
    skills: ["UX Flow", "UI Design"],

    description: "Designed a complete food ordering journey...",
    fullDescription:
      "This project focuses on designing an end-to-end food delivery mobile application experience. I worked on the full customer journey — browsing restaurants, selecting meals, cart flow, and checkout. The UI was built with clean spacing, modern visuals, and intuitive navigation.",
  },

  {
    id: 2,
    title: "Task Manager Application",

    thumbnail: "/projects/thumb-task.png",
    images: ["/projects/task-1.jpg", "/projects/task-2.jpg"],

    tools: ["Figma"],
    skills: ["Prototyping", "Mobile UI"],

    description: "Designed a productivity-focused task manager UI...",
    fullDescription:
      "In this project, I designed a modern Task Manager app interface focused on productivity and simplicity. It includes priority workflows, clean dashboard layouts, and both light + dark mode screens with strong accessibility.",
  },

  {
    id: 3,
    title: "Deploy Ready Portfolio Website",

    thumbnail: "/projects/thumb-portfolio.png",
    images: ["/projects/port-1.jpg"],

    tools: ["ChatGPT", "Lovable", "GitHub"],
    skills: ["Portfolio Design", "Deployment"],

    description: "Built and deployed a premium portfolio website...",
    fullDescription:
      "This project is my personal portfolio built to showcase UI/UX work. I used ChatGPT for structuring content, Lovable for rapid UI building, and GitHub for deployment. The site is recruiter-friendly, responsive, and easy to maintain.",
  },
];

export default function ProjectsSection() {
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
              className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
}
