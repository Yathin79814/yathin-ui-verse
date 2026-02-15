import {
  Briefcase,
  Award,
  Star,
  ChevronRight,
  Calendar,
  GraduationCap,
  Wrench
} from "lucide-react";

const ExperienceSection = () => {

  // ✅ Internship Experience (New)
  const internships = [
    {
      title: "Creative Design, AI Content & Digital Marketing Intern",
      organization: "Attacked AI",
      duration: "Aug 2025 – Dec 2025",
      description:
        "Worked on branding posters, website banners, AI-generated images/videos, and creative media content including AI-based podcasts.",
      icon: <Award className="w-6 h-6 text-portfolio-accent" />,
      highlight: true
    },
    {
      title: "Digital Marketing Intern",
      organization: "EVtron Tech",
      duration: "May 2025 – Aug 2025",
      description:
        "Supported campaigns to expand the digital outreach of EV charging solutions and collaborated with the marketing team on content strategy.",
      icon: <Briefcase className="w-6 h-6 text-portfolio-accent" />
    },
    {
      title: "UI Visual Designer & Branding Lead Intern",
      organization: "Viberr",
      duration: "May 2025 – Jul 2025",
      description:
        "Designed UI graphics, iconography, and visual design systems while helping build brand identity in a fast-paced startup environment.",
      icon: <Star className="w-6 h-6 text-portfolio-accent" />
    }
  ];

  // ✅ Leadership Roles (Existing)
  const leadership = [
    {
      title: "Senior Under Officer",
      organization: "National Cadet Corps (NCC)",
      duration: "Nov 2022 – May 2025",
      description:
        "Commanded parades, trained cadets in military drills, and represented the institute at national-level camps.",
      icon: <Star className="w-6 h-6 text-portfolio-accent" />
    },
    {
      title: "Placement Cell Coordinator",
      organization: "IIITDM Kancheepuram",
      duration: "2023 – Present",
      description:
        "Coordinating placement activities, facilitating communication between students and recruiters, and supporting placement drives.",
      icon: <Briefcase className="w-6 h-6 text-portfolio-accent" />
    },
    {
      title: "Founder & Content Creator",
      organization: "@designpreneurss (30K+ Followers)",
      duration: "2020 – Present",
      description:
        "Built an online design community teaching UI/UX, Photoshop, and Canva. Won HackAdThon for creative marketing content.",
      icon: <Award className="w-6 h-6 text-portfolio-accent font-bold" />,
      highlight: true
    }
  ];

  // ✅ Education Updated
  const education = [
    {
      degree: "B.Tech in Computer Science (AI Specialization)",
      institution: "IIITDM Kancheepuram",
      duration: "Nov 2022 – Apr 2026",
      description:
        "Specializing in Artificial Intelligence, Machine Learning, Human-Computer Interaction, and Product Design."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-portfolio-background">
      <div className="section-container">
        <h2 className="section-title">My Experience</h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ✅ Internship Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-portfolio-accent" />
              Internship Experience
            </h3>

            <div className="space-y-8">
              {internships.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 border-l-2 ${
                    exp.highlight
                      ? "border-portfolio-accent"
                      : "border-portfolio-secondary"
                  }`}
                >
                  <div
                    className={`absolute -left-3 top-0 w-6 h-6 ${
                      exp.highlight
                        ? "bg-portfolio-accent text-white"
                        : "bg-white"
                    } rounded-full border-2 border-portfolio-accent flex items-center justify-center`}
                  >
                    {exp.icon}
                  </div>

                  <div className="mb-1 flex items-center text-sm text-portfolio-text/70">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.duration}</span>
                  </div>

                  <h4
                    className={`text-xl font-semibold ${
                      exp.highlight ? "text-portfolio-accent" : ""
                    }`}
                  >
                    {exp.title}
                    {exp.highlight && (
                      <span className="ml-2 inline-block animate-pulse">
                        ★
                      </span>
                    )}
                  </h4>

                  <p className="text-portfolio-accent font-medium mb-2">
                    {exp.organization}
                  </p>

                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* ✅ Leadership Roles */}
            <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-portfolio-accent" />
              Leadership Roles
            </h3>

            <div className="space-y-8">
              {leadership.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 border-l-2 ${
                    exp.highlight
                      ? "border-portfolio-accent"
                      : "border-portfolio-secondary"
                  }`}
                >
                  <div
                    className={`absolute -left-3 top-0 w-6 h-6 ${
                      exp.highlight
                        ? "bg-portfolio-accent text-white"
                        : "bg-white"
                    } rounded-full border-2 border-portfolio-accent flex items-center justify-center`}
                  >
                    {exp.icon}
                  </div>

                  <div className="mb-1 flex items-center text-sm text-portfolio-text/70">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.duration}</span>
                  </div>

                  <h4 className="text-xl font-semibold">{exp.title}</h4>

                  <p className="text-portfolio-accent font-medium mb-2">
                    {exp.organization}
                  </p>

                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Education + Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-portfolio-accent" />
              Education
            </h3>

            <div className="card">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center text-sm text-portfolio-text/70">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.duration}</span>
                  </div>

                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-portfolio-accent mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Skills Section stays same */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
