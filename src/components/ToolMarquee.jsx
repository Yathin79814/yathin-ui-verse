const tools = [
  { logo: "/logos/Adobe.svg" },
  { logo: "/logos/Canva.svg" },
  { logo: "/logos/CapCut.svg" },
  { logo: "/logos/ChatGPT.svg" },
  { logo: "/logos/Figma.svg" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-8 w-full">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        
        {/* Duplicate for infinite smooth scroll */}
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img
              src={tool.logo}
              alt="tool-logo"
              className="w-10 h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
