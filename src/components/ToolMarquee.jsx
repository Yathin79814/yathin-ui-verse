import { motion } from "framer-motion";

const tools = [
  { name: "Adobe", logo: "/logos/Adobe.svg" },
  { name: "Canva", logo: "/logos/Canva.svg" },
  { name: "CapCut", logo: "/logos/CapCut.svg" },
  { name: "ChatGPT", logo: "/logos/ChatGPT.svg" },
  { name: "Figma", logo: "/logos/Figma.svg" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-10 w-full">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear"
        }}
      >
        {/* Duplicate list for infinite smooth scrolling */}
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 bg-white shadow-md rounded-xl min-w-fit hover:scale-105 transition-transform"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm font-semibold text-gray-700">
              {tool.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolMarquee;
