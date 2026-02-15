import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mockup Image */}
        <img
          src={project.mockup}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Tools */}
          <h3 className="font-semibold mb-2">Tools Used:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Presented To */}
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Presented To:</span>{" "}
            {project.presentedTo}
          </p>

          {/* Review */}
          <div className="bg-portfolio-secondary/20 p-4 rounded-xl">
            <p className="italic text-gray-700">
              “{project.review}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
