import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ProjectModal from "@/components/ProjectModal"; // ✅ Import Modal

// ✅ Updated Projects Data with Modal Fields
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description:
      "Complete UX overhaul for a fashion e-commerce platform, focusing on improved conversion rates.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    mockup:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&auto=format&fit=crop",
    category: "ui-ux",
    tools: ["Figma", "Prototype", "UI/UX"],
    presentedTo: "IIITDM UI/UX Faculty Review Panel",
    review:
      "The redesign was highly structured and visually modern. The user flow improvements were clearly justified with strong UX reasoning."
  },
  {
    id: 2,
    title: "HackAdThon Marketing Campaign",
    description:
      "Marketing campaign for HackAdThon event that reached over 1000 participants.",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop",
    mockup:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop",
    category: "marketing",
    tools: ["Canva", "Social Media", "Strategy"],
    presentedTo: "HackAdThon Organizing Committee",
    review:
      "The campaign creatives were impactful and helped attract massive participation. Excellent storytelling and marketing execution."
  },
  {
    id: 3,
    title: "Todo App Design",
    description:
      "A clean, intuitive to-do application design focused on simplicity and productivity.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
    mockup:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop",
    category: "ui-ux",
    tools: ["Figma", "Mobile Design", "UI/UX"],
    presentedTo: "Human Computer Interaction (HCI) Course Panel",
    review:
      "A minimal yet powerful design. The interface is highly usable and the visual hierarchy makes task management effortless."
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  // ✅ Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-portfolio-secondary bg-opacity-20 rounded-lg">
            {["all", "ui-ux", "marketing"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-white shadow-md text-portfolio-contrast"
                    : "text-portfolio-text hover:bg-white/50"
                }`}
              >
                {type === "all"
                  ? "All Projects"
                  : type === "ui-ux"
                  ? "UI/UX Design"
                  : "Marketing"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-portfolio-contrast"
                    onClick={() => setSelectedProject(project)} // ✅ Open Modal
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-portfolio-secondary/10 text-portfolio-contrast border-none"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-12">
          <Button className="bg-portfolio-accent hover:bg-portfolio-contrast text-white">
            View All Projects
          </Button>
        </div>
      </div>

      {/* ✅ Project Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
