import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const hasMultipleImages = project.images.length > 1;

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
    <div className="fixed inset-0 z-[999] flex items-center justify-center">

      {/* ✅ FULL PAGE BLUR BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* ✅ MODAL BOX 75% SCREEN */}
      <div className="relative z-50 w-[75%] max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">

          {/* Main Image */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* ✅ Arrows Only If Multiple Images */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* ================= PROJECT DETAILS ================= */}
        <div className="p-10">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3">
            {project.title}
          </h2>

          {/* Long Description */}
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
