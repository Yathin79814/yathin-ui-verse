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
      <div className="flex gap-10 whitespace-nowrap animate-marquee items-center">
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-center"
          >
            <img
              src={tool.logo}
              alt="tool-logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
