import { motion } from "framer-motion";

const tools = [
  { name: "Canva", logo: "/logos/canva.svg" },
  { name: "CapCut", logo: "/logos/capcut.svg" },
  { name: "ChatGPT", logo: "/logos/chatgpt.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Adobe PS", logo: "/logos/photoshop.svg" },
  { name: "Figma", logo: "/logos/figma.svg" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear"
        }}
      >
        {/* Duplicate for smooth infinite scroll */}
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-3 bg-white shadow-md rounded-xl min-w-fit hover:scale-105 transition"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-6 h-6"
            />
            <span className="text-sm font-medium text-gray-700">
              {tool.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolMarquee;
