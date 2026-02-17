import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  /* Reset slider when opening new project */
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  /* Close on ESC */
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
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-50 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-50"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">

          {/* Image */}
          <img
            key={currentIndex}
            src={project.images[currentIndex]}
            alt="Project Preview"
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />

          {/* Left Arrow */}
          {project.images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Right Arrow */}
          {project.images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        {/* ================= CONTENT SCROLL AREA ================= */}
        <div className="max-h-[45vh] overflow-y-auto p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">
            {project.title}
          </h2>

          {/* Full Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {project.fullDescription}
          </p>

          {/* Tools */}
          <h3 className="font-semibold text-lg mb-2">Tools Used:</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, i) => (
              <Badge key={i} className="px-4 py-1">
                {tool}
              </Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold text-lg mb-2">Skills Applied:</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <span
                key={i}
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
