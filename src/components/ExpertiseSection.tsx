import {
  Brain,
  Layout,
  Lightbulb,
  Monitor,
  Palette,
  PenTool,
  Users
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const expertiseAreas = [
  {
    icon: <Brain className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Artificial Intelligence",
    description:
      "Specializing in machine learning algorithms, neural networks, and practical AI applications.",
    skills: [
      { name: "Machine Learning", value: 85 },
      { name: "Neural Networks", value: 80 },
      { name: "Data Analysis", value: 90 }
    ]
  },
  {
    icon: <Layout className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and aesthetically pleasing interfaces with a focus on user experience.",
    skills: [
      { name: "Figma", value: 95 },
      { name: "Canva", value: 90 },
      { name: "User Research", value: 80 }
    ]
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Leadership",
    description:
      "Leading teams and initiatives with a strategic vision and strong communication skills.",
    skills: [
      { name: "Team Management", value: 90 },
      { name: "Strategic Planning", value: 85 },
      { name: "Public Speaking", value: 80 }
    ]
  },
  {
    icon: <PenTool className="w-12 h-12 mb-4 text-portfolio-accent" />,
    title: "Content Creation",
    description:
      "Developing engaging and educational content for social media and digital platforms.",
    skills: [
      { name: "Social Media", value: 90 },
      { name: "Copywriting", value: 85 },
      { name: "Visual Design", value: 85 }
    ]
  }
];

// ✅ Colors for Pie Sections
const COLORS = ["#EB5E28", "#403D39", "#CCC5B9"];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-portfolio-background">
      <div className="section-container">
        <h2 className="section-title">My Expertise</h2>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="card hover:border-l-4 hover:border-l-portfolio-accent transition-all"
            >
              <div className="text-center md:text-left">
                {area.icon}

                <h3 className="text-2xl font-semibold mb-3">
                  {area.title}
                </h3>

                <p className="text-gray-600 mb-6">{area.description}</p>

                {/* ✅ Pie Chart */}
                <div className="w-full h-60">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={area.skills}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                      >
                        {area.skills.map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={COLORS[i % COLORS.length]}
                          />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Skill Labels */}
                <div className="mt-6 space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex justify-between text-sm font-medium"
                    >
                      <span>{skill.name}</span>
                      <span className="text-portfolio-accent">
                        {skill.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Extra Skills Section (unchanged) */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Monitor className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">
                Technical Skills
              </h3>
              <p className="text-gray-600">
                Programming, AI frameworks, design tools
              </p>
            </div>

            <div className="text-center">
              <Palette className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">
                Creative Skills
              </h3>
              <p className="text-gray-600">
                UI/UX design, visual communication, content creation
              </p>
            </div>

            <div className="text-center">
              <Lightbulb className="w-12 h-12 mb-4 mx-auto text-portfolio-accent" />
              <h3 className="text-xl font-semibold mb-2">
                Problem Solving
              </h3>
              <p className="text-gray-600">
                Analytical thinking, creative solutions, innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
