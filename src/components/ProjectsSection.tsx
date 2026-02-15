import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    review:
      "The redesign was highly structured and visually modern. Strong UX reasoning and flow.",
    presentedTo: "IIITDM UI/UX Faculty Review Panel"
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
    review:
      "Creative marketing execution that helped attract massive participation.",
    presentedTo: "HackAdThon Organizing Committee"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  // ✅ Expanded Project State
  const [openProjectId, setOpenProjectId] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-portfolio-secondary/20 rounded-lg">
            {["all", "ui-ux", "marketing"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-white shadow text-portfolio-contrast"
                    : "text-gray-600 hover:bg-white/50"
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
              className="rounded-xl bg-white shadow-lg overflow-hidden"
            >
              {/* Cover Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, i) => (
                    <Badge
                      key={i}
                      className="bg-portfolio-secondary/10 text-gray-700 border-none"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* View Button */}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setOpenProjectId(
                      openProjectId === project.id ? null : project.id
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {openProjectId === project.id ? "Close" : "View Details"}
                </Button>

                {/* ✅ Expanded Inline Details */}
                {openProjectId === project.id && (
                  <div className="mt-6 border-t pt-5 space-y-4">
                    {/* Mockup */}
                    <img
                      src={project.mockup}
                      alt="mockup"
                      className="rounded-lg shadow-md"
                    />

                    {/* Review */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="italic text-gray-700 text-sm">
                        “{project.review}”
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        — Presented To: {project.presentedTo}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
