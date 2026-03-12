import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const hasMultipleImages = project.images.length > 1;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Slider */}
        <div className="relative w-full aspect-video bg-gray-100">

          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {hasMultipleImages && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-10">

          <h2 className="text-3xl font-bold mb-4">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Tools */}
          <h3 className="font-semibold mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold mb-2">Skills Applied</h3>
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
      </div>
    </div>
  );
};

export default ProjectModal;
