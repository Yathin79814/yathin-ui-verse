const tools = [
  { name: "Adobe", logo: "/logos/Adobe.svg" },
  { name: "Canva", logo: "/logos/Canva.svg" },
  { name: "CapCut", logo: "/logos/CapCut.svg" },
  { name: "ChatGPT", logo: "/logos/ChatGPT.svg" },
  { name: "Figma", logo: "/logos/Figma.svg" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-8 w-full">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 bg-white shadow-md rounded-xl min-w-fit"
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
      </div>
    </div>
  );
};

export default ToolMarquee;
