import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  /* ✅ Reset slider when project changes */
  useEffect(() => {
    if (project) setIndex(0);
  }, [project]);

  if (!project) return null;

  const hasMultiple = project.images.length > 1;

  const next = () => {
    setIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-50 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative w-full aspect-video bg-black overflow-hidden">

          {/* Image */}
          <img
            key={index}
            src={project.images[index]}
            alt="Project Preview"
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Arrows Only If Multiple */}
          {hasMultiple && (
            <>
              {/* Left */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft />
              </button>

              {/* Right */}
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* ================= SCROLLABLE DETAILS ================= */}
        <div className="p-8 overflow-y-auto max-h-[40vh]">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Tools */}
          <h3 className="font-semibold mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, i) => (
              <Badge key={i}>{tool}</Badge>
            ))}
          </div>

          {/* Skills */}
          <h3 className="font-semibold mb-2">Skills Applied</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
