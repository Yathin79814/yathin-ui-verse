import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose} // Close when clicking outside
    >
      {/* Modal Box */}
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Mockup Image */}
        <div className="w-full h-72 bg-gray-100">
          <img
            src={project.mockup}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold text-portfolio-contrast mb-3">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tools Used */}
          <h3 className="text-lg font-semibold mb-3">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Presented To */}
          <p className="text-sm text-gray-500 mb-6">
            <span className="font-semibold text-gray-700">
              Presented To:
            </span>{" "}
            {project.presentedTo}
          </p>

          {/* Review Box */}
          <div className="bg-portfolio-secondary/20 border-l-4 border-portfolio-accent p-5 rounded-xl">
            <p className="italic text-gray-700 leading-relaxed">
              “{project.review}”
            </p>

            <p className="mt-3 text-sm font-medium text-portfolio-accent">
              — Feedback Highlight
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
