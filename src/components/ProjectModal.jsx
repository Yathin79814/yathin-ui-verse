import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // ✅ Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Lock Scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // ✅ Next / Prev Image Functions
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-[1000] w-[75%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= IMAGE SLIDER SECTION ================= */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">

          {/* Main Image */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition duration-300"
          />

          {/* Left Arrow */}
          {project.images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {project.images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {currentIndex + 1} / {project.images.length}
          </div>
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="p-8 space-y-6">

          {/* Title */}
          <h2 className="text-3xl font-bold">{project.title}</h2>

          {/* Full Description */}
          <p className="text-gray-600 leading-relaxed text-lg">
            {project.description}
          </p>

          {/* Highlights */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">
              Key Work Done:
            </h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>Designed complete user flow from start to checkout</li>
              <li>Created clean UI screens with consistent design system</li>
              <li>Focused on usability, simplicity, and smooth navigation</li>
              <li>Built interactive prototype in Figma</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">
              Tools Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <Badge
                  key={i}
                  className="bg-portfolio-secondary/20 text-portfolio-contrast"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">
              Skills Applied:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
