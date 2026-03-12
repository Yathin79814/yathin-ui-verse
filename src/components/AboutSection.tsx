import { GraduationCap, Sparkles, Megaphone, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            <p className="text-lg mb-6 leading-relaxed">
              I'm a Computer Science student specializing in Artificial Intelligence at 
              IIITDM Kancheepuram, with a strong passion for AI-powered content creation 
              and social media marketing.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              I create engaging digital content using AI tools and modern marketing 
              strategies. Through my design community <strong>@designpreneurss</strong>, 
              I’ve built an audience of 30K+ followers by sharing design tutorials, 
              marketing insights, and creative content.
            </p>

            <p className="text-lg mb-8 leading-relaxed">
              My work combines creativity, technology, and storytelling. I enjoy 
              experimenting with AI tools, design platforms, and content strategies 
              to help brands grow their online presence and build meaningful engagement.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                AI Content Creation
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Social Media Marketing
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Digital Branding
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Content Strategy
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Figma
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                Canva
              </span>

              <span className="bg-portfolio-secondary bg-opacity-30 text-portfolio-contrast px-3 py-1 rounded-full text-sm">
                AI Tools
              </span>
            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="grid grid-cols-2 gap-6">

            <div className="card">
              <GraduationCap className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>Computer Science (AI) at IIITDM Kancheepuram</p>
            </div>

            <div className="card">
              <Sparkles className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">AI Content Creator</h3>
              <p>Creating AI-generated visuals, videos, and creative digital content</p>
            </div>

            <div className="card">
              <Megaphone className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Social Media Marketer</h3>
              <p>Building engaging content strategies and growing online communities</p>
            </div>

            <div className="card">
              <Users className="w-10 h-10 text-portfolio-accent mb-3" />
              <h3 className="text-xl font-semibold mb-2">Community Leader</h3>
              <p>Founder of @designpreneurss & NCC Senior Under Officer</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
