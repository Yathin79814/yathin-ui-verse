
import { Trophy, Medal, Award, Flag } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "EBSB NCC Camp",
    description: "Represented my state at the national-level Ek Bharat Shreshtha Bharat NCC Camp, showcasing leadership and team management skills.",
    icon: <Flag className="w-10 h-10 text-portfolio-accent" />,
    year: "2023"
  },
  {
    id: 2,
    title: "DeakinCyber Workshop",
    description: "Selected participant for the prestigious cybersecurity workshop, gaining hands-on experience with cutting-edge security techniques.",
    icon: <Trophy className="w-10 h-10 text-portfolio-accent" />,
    year: "2022"
  },
  {
    id: 3,
    title: "HackAdThon Marketing Success",
    description: "Led the marketing campaign for HackAdThon, reaching over 1000 participants and exceeding attendance goals by 40%.",
    icon: <Award className="w-10 h-10 text-portfolio-accent" />,
    year: "2022"
  },
  {
    id: 4,
    title: "Social Media Growth",
    description: "Grew @designpreneurss to 35K+ followers, creating a community focused on design and entrepreneurship education.",
    icon: <Medal className="w-10 h-10 text-portfolio-accent" />,
    year: "2020-Present"
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
              <div className="bg-portfolio-accent w-1/4 flex items-center justify-center">
                <div className="text-white">
                  {achievement.icon}
                </div>
              </div>
              
              <div className="p-6 w-3/4">
                <div className="text-sm text-portfolio-accent font-medium mb-1">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-portfolio-contrast text-white rounded-xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-accent opacity-10 rounded-full -mt-20 -mr-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together!</h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              I'm always open to new opportunities, collaborations, and challenging projects.
              If you're interested in working together or just want to connect, feel free to reach out.
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
