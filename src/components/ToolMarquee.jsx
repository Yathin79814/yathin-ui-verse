const tools = [
  { logo: "/logos/Adobe_idLnet8cfu_1.png" },
  { logo: "/logos/Canva_Logo_1.png" },
  { logo: "/logos/CapCut_Logo_1.png" },
  { logo: "/logos/ChatGPT_Logo_1.png" },
  { logo: "/logos/Figma_Symbol_1.png" }
];

const ToolMarquee = () => {
  return (
    <div className="mt-6 w-full">
      {/* ✅ Static Logo Row */}
      <div className="flex gap-6 items-center flex-wrap justify-start md:justify-start">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-14 h-14 flex items-center justify-center 
                       bg-white rounded-xl shadow-sm border 
                       hover:shadow-md transition"
          >
            <img
              src={tool.logo}
              alt="tool-logo"
              className="max-h-8 max-w-8 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
