import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // ✅ Slider index
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Next Image
  const nextImage = () => {
    if (project.images.length > 1) {
      setCurrentIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // ✅ Prev Image
  const prevImage = () => {
    if (project.images.length > 1) {
      setCurrentIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup Box */}
      <div className="relative z-[1000] w-[75%] max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
          
          {/* Main Image */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* ✅ Show arrows ONLY if more than 1 image */}
          {project.images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 
                bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* ================= DETAILS SECTION ================= */}
        <div className="p-8 space-y-8">

          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Extra Description Block */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              What I Worked On 🚀
            </h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Designed end-to-end user flow with clean navigation</li>
              <li>Built modern UI screens with strong visual hierarchy</li>
              <li>Created interactive prototypes for smooth experience</li>
              <li>Focused on usability, accessibility, and simplicity</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Tools Used 🛠
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <Badge
                  key={i}
                  className="bg-portfolio-secondary/20 text-portfolio-contrast"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Skills Applied ✨
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="bg-portfolio-secondary/10 p-5 rounded-xl">
            <h3 className="font-semibold mb-2 text-lg">
              Outcome / Impact 📌
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This project strengthened my ability to design complete digital
              experiences, combining user research, UI craft, and real-world
              product thinking into a polished prototype.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
