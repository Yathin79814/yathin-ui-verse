import { useEffect } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // ✅ Lock scroll only when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      {/* ✅ FULL Website Blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* ✅ Popup Box */}
      <div className="relative w-[75%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
        >
          <X />
        </button>

        {/* Image */}
        <div className="aspect-video bg-gray-200">
          <img
            src={project.images[0]}
            className="w-full h-full object-cover"
            alt={project.title}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-600 mt-2">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <Badge key={i}>{tool}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
