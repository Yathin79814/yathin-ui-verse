import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "End-to-End Food Delivery App",
    thumbnail: "/projects/thumb-food.png",
    images: [
      "/projects/food-1.jpg",
      "/projects/food-2.jpg",
    ],
    tools: ["Figma"],
    skills: ["UX Flow", "UI Design"],
    description: "Designed complete food ordering journey...",
    fullDescription:
      "This project focuses on designing an end-to-end food delivery journey...",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.thumbnail}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">{project.title}</h3>

                <Button
                  className="mt-3"
                  onClick={() => setSelectedProject(project)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
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
}
