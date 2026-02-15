import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* ✅ Center Popup Card */}
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl 
                   overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white 
                     p-2 rounded-full shadow-md"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* ✅ Modal Layout */}
        <div className="flex flex-col max-h-[85vh]">
          
          {/* IMAGE (Fixed Height) */}
          <div className="h-60 w-full bg-gray-200">
            <img
              src={project.mockup}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT (Scrollable) */}
          <div className="p-6 overflow-y-auto">
            
            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              
              {/* Review */}
              <div className="bg-portfolio-secondary/20 p-4 rounded-xl">
                <h3 className="font-semibold mb-2 text-sm">
                  Review / Feedback
                </h3>
                <p className="italic text-gray-700 text-sm leading-relaxed">
                  “{project.review}”
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  — Presented To: {project.presentedTo}
                </p>
              </div>

              {/* Tools */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2 text-sm">
                  Skills & Tools Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-white border rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
