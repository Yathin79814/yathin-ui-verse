import { useEffect } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // ✅ Stop background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* ✅ Background Blur + Dim */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* ✅ Popup Box (75% Screen) */}
      <div
        className="
          relative z-50 
          w-full max-w-5xl 
          h-[75vh]
          bg-white rounded-3xl 
          shadow-2xl overflow-hidden
          animate-fadeInScale
        "
      >
        {/* ✅ Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5 
            bg-white/90 hover:bg-white 
            p-2 rounded-full 
            shadow-md transition
          "
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ✅ Image Section (16:9) */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
            src={project.fullImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✅ Details Section */}
        <div className="p-8 overflow-y-auto h-full">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-3 text-portfolio-contrast">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tools */}
          <h3 className="font-semibold text-lg mb-3">
            Tools & Skills Used
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-1 rounded-full text-sm"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {/* Optional Extra Review */}
          {project.review && (
            <div className="mt-8 p-5 bg-gray-50 rounded-xl border">
              <p className="italic text-gray-700">
                “{project.review}”
              </p>
              <p className="text-sm text-gray-500 mt-2">
                — {project.presentedTo}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
