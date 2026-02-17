import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background Blur + Dim */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-50 w-[90%] max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ✅ Top Image (16:9 Ratio) */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={project.fullImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {project.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {project.description}
          </p>

          {/* Tools */}
          <h3 className="font-semibold mb-2">Tools & Skills Used:</h3>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
