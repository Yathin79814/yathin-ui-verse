import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* ✅ Rectangular Popup Box */}
      <div
        className="bg-white w-full max-w-xl rounded-xl shadow-2xl 
                   overflow-hidden relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 
                     p-2 rounded-full transition"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* ✅ Smaller Mockup Preview */}
        <div className="w-full h-48 bg-gray-100">
          <img
            src={project.mockup}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold mb-2">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Presented To */}
          <p className="text-xs text-gray-500 mb-4">
            <span className="font-semibold">Presented To:</span>{" "}
            {project.presentedTo}
          </p>

          {/* Review */}
          <div className="bg-portfolio-secondary/20 p-4 rounded-lg">
            <p className="italic text-gray-700 text-sm">
              “{project.review}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
