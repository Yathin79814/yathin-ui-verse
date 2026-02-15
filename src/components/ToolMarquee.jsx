const tools = [
  { logo: "/logos/1.png" }, // Adobe
  { logo: "/logos/2.png" }, // Figma
  { logo: "/logos/3.png" }, // ChatGPT
  { logo: "/logos/4.png" }, // CapCut
  { logo: "/logos/5.png" }  // Canva
];

const ToolMarquee = () => {
  return (
    <div className="mt-8">
      {/* Tools Row */}
      <div className="flex gap-6 items-center flex-wrap">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-14 h-14 flex items-center justify-center 
                       bg-white rounded-xl shadow-sm border
                       hover:scale-105 hover:shadow-md transition"
          >
            <img
              src={tool.logo}
              alt="tool-logo"
              className="w-10 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolMarquee;
