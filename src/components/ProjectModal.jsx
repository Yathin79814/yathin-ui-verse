console.log("🔥 MODAL UPDATED VERSION RUNNING");

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset slider when new project opens
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Slider Controls
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

  // Swipe Support
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 60) nextImage();
    if (diff < -60) prevImage();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* ✅ Full Page Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* ✅ Popup Box */}
      <div
        className="relative z-50 w-[90%] md:w-[75%] max-w-6xl 
        bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ height: "85vh" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 bg-white p-2 rounded-full shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= SLIDER IMAGE AREA ================= */}
        <div
          className="relative w-full h-[45%] bg-gray-100"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image */}
          <img
            src={project.images[currentIndex]}
            alt="Project Preview"
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* ✅ Show Arrows ONLY if Multiple Images */}
          {project.images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight size={28} />
              </button>

              {/* Slide Count */}
              <div className="absolute bottom-3 right-4 text-sm bg-black/60 text-white px-3 py-1 rounded-full">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* ================= DETAILS SECTION (SCROLLABLE) ================= */}
        <div className="h-[55%] overflow-y-auto p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tools */}
          <h3 className="font-semibold mb-2">Tools Used:</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, i) => (
              <Badge key={i} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold mb-2">Skills Applied:</h3>
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
  );
};

export default ProjectModal;
