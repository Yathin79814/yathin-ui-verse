const tools = [
  { logo: "/logos/Adobe_idLnet8cfu_1.png" },
  { logo: "/logos/Canva_Logo_1.png" },
  { logo: "/logos/CapCut_Logo_1.png" },
  { logo: "/logos/ChatGPT_Logo_1.png" },
  { logo: "/logos/Figma_Symbol_1.png" }
];

const ToolMarquee = () => {
  return (
    <div className="mt-6">
      {/* ✅ Clean Small Tool Icons Row */}
      <div className="flex gap-4 items-center flex-wrap">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-12 h-12 flex items-center justify-center 
                       bg-white rounded-lg border shadow-sm"
          >
            <img
              src={tool.logo}
              alt="tool"
              className="h-6 w-6 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
