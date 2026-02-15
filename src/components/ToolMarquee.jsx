const tools = [
  { logo: "/logos/Adobe.png" },
  { logo: "/logos/Canva.png" },
  { logo: "/logos/CapCut.png" },
  { logo: "/logos/ChatGPT.png" },
  { logo: "/logos/Figma.png" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-8 w-full">
      <div className="flex gap-10 animate-marquee items-center">
        {[...tools, ...tools].map((tool, index) => (
          <img
            key={index}
            src={tool.logo}
            alt="logo"
            className="w-12 h-12 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
