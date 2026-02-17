import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  /* ✅ Slider State */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Reset slider when new project opens */
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  /* ESC Close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  /* Slider Controls */
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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* ✅ Full Website Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* ✅ Popup Container */}
      <div
        className="
          relative z-50 
          w-full max-w-5xl 
          max-h-[90vh]
          bg-white rounded-3xl 
          shadow-2xl overflow-hidden
          flex flex-col
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">

          {/* Main Image */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* ✅ Show Arrows Only If More Than 1 Image */}
          {project.images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                  bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                  bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* ================= SCROLLABLE DETAILS ================= */}
        <div className="p-8 overflow-y-auto">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3 text-portfolio-contrast">
            {project.title}
          </h2>

          {/* Full Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-base">
            {project.description}
          </p>

          {/* Tools */}
          <h3 className="font-semibold text-lg mb-2">
            Tools Used:
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <Badge
                key={index}
                className="px-4 py-1 bg-portfolio-secondary/20 text-portfolio-contrast"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold text-lg mb-2">
            Skills Applied:
          </h3>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
