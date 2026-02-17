import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  if (!project) return null;

  const next = () => {
    if (index < project.images.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="relative bg-white w-[80%] max-w-5xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full"
        >
          <X />
        </button>

        {/* Image Slider */}
        <div className="relative aspect-video bg-black">
          <img
            src={project.images[index]}
            className="w-full h-full object-cover"
          />

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-8 max-h-[35vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
          <p className="text-gray-600 mb-6">{project.fullDescription}</p>

          <h3 className="font-semibold mb-2">Tools Used</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tools.map((t, i) => (
              <Badge key={i}>{t}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
