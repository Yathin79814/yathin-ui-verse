import {
  Trophy,
  Medal,
  Award,
  Flag,
  Users,
  Sparkles
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "2nd Place — IBCN Innovation Event",
    description:
      "Secured 🥈 2nd place at the IBCN event by contributing creative content, visual storytelling, and AI-powered media production using tools like CapCut, Gemini, and ElevenLabs.",
    icon: <Medal className="w-10 h-10 text-white" />,
    year: "2025"
  },
  {
    id: 2,
    title: "HackAdThon Winner",
    description:
      "Won HackAdThon for outstanding creative marketing content and campaign execution, delivering impactful design solutions under competitive conditions.",
    icon: <Sparkles className="w-10 h-10 text-white" />,
    year: "2024"
  },
  {
    id: 3,
    title: "EBSB NCC National Camp Representative",
    description:
      "Represented IIITDM at the Ek Bharat Shreshtha Bharat (EBSB) NCC National Camp in Varanasi, demonstrating leadership, discipline, and teamwork at a national level.",
    icon: <Flag className="w-10 h-10 text-white" />,
    year: "2024"
  },
  {
    id: 4,
    title: "Founder — @designpreneurss (35K+ Community)",
    description:
      "Built and grew a design-focused online community of 35K+ followers, creating educational UI/UX, Photoshop, and Canva content for aspiring designers.",
    icon: <Users className="w-10 h-10 text-white" />,
    year: "2020 – Present"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="card flex p-0 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Icon Side */}
              <div className="bg-portfolio-accent w-1/4 flex items-center justify-center">
                <div>{achievement.icon}</div>
              </div>

              {/* Content Side */}
              <div className="p-6 w-3/4">
                <div className="text-sm text-portfolio-accent font-medium mb-1">
                  {achievement.year}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>

                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16 bg-portfolio-contrast text-white rounded-xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-accent opacity-10 rounded-full -mt-20 -mr-20"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together!
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              I'm always open to exciting opportunities, collaborations, and
              impactful design + AI projects. Feel free to reach out if you'd
              like to connect!
            </p>

            <a
              href="#contact"
              className="inline-block bg-portfolio-accent hover:bg-portfolio-accent/80 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
