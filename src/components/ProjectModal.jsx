import { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Reset index when new project opens
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Smooth Fade Transition
  const changeSlide = (newIndex) => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 200);
  };

  // Next Slide
  const nextImage = () => {
    if (currentIndex === project.images.length - 1) {
      changeSlide(0);
    } else {
      changeSlide(currentIndex + 1);
    }
  };

  // Prev Slide
  const prevImage = () => {
    if (currentIndex === 0) {
      changeSlide(project.images.length - 1);
    } else {
      changeSlide(currentIndex - 1);
    }
  };

  // ESC Close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ===============================
  // ✅ Swipe Support (Behance Style)
  // ===============================

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance =
      touchStartX.current - touchEndX.current;

    // Swipe Left → Next
    if (swipeDistance > 60) {
      nextImage();
    }

    // Swipe Right → Prev
    if (swipeDistance < -60) {
      prevImage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-50 w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-50"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div
          className="relative w-full aspect-video bg-gray-100 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Smooth Fade Image */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Arrows only if multiple images */}
          {project.images.length > 1 && (
            <>
              {/* Left */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicator */}
              <p className="absolute bottom-3 right-5 text-sm bg-black/60 text-white px-3 py-1 rounded-full">
                {currentIndex + 1} / {project.images.length}
              </p>
            </>
          )}
        </div>

        {/* ================= DETAILS (Scrollable) ================= */}
        <div className="flex-1 overflow-y-auto p-8">

          <h2 className="text-3xl font-bold mb-3">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
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
                className="bg-portfolio-secondary/20 px-4 py-1"
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
