import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* Popup Box */}
      <div
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl 
                   overflow-hidden relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 
                     p-2 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ================= TOP IMAGE ================= */}
        <div className="w-full h-72 bg-gray-200">
          <img
            src={project.mockup}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ================= BOTTOM GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

          {/* LEFT: REVIEW */}
          <div className="bg-portfolio-secondary/20 p-5 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              Review / Feedback
            </h3>
            <p className="italic text-gray-700 leading-relaxed">
              “{project.review}”
            </p>

            <p className="mt-3 text-sm text-gray-500">
              — Presented To: {project.presentedTo}
            </p>
          </div>

          {/* RIGHT: SKILLS USED */}
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">
              Skills & Tools Used
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-white border rounded-full shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* PROJECT TITLE (Optional) */}
        <div className="px-6 pb-6">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-600 text-sm mt-1">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
