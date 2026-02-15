const tools = [
  { logo: "/logos/Adobe_idLnet8cfu_1.png" },
  { logo: "/logos/Canva_Logo_1.png" },
  { logo: "/logos/CapCut_Logo_1.png" },
  { logo: "/logos/ChatGPT_Logo_1.png" },
  { logo: "/logos/Figma_Symbol_1.png" }
];

const ToolMarquee = () => {
  return (
    <div className="overflow-hidden mt-8 w-full">
      <div className="flex gap-10 animate-marquee items-center">
        
        {/* Duplicate logos for smooth infinite scroll */}
        {[...tools, ...tools].map((tool, index) => (
          <img
            key={index}
            src={tool.logo}
            alt="tool-logo"
            className="w-12 h-12 object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
