import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  const skillsData = [
    {
      category: "Frontend & Web Architecture",
      items: [
        "Next.js 16 (App Router)",
        "React (18 & 19)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Vite",
        "Tailwind CSS (v3 & v4)",
        "HTML5 & CSS3",
      ],
    },
    {
      category: "State Management & Data Pipeline",
      items: [
        "TanStack React Query",
        "Redux Toolkit",
        "Zod Schema Validation",
        "Axios (Interceptors & Auth)",
        "NextAuth.js v5",
        "Context API",
      ],
    },
    {
      category: "Realtime, APIs & Integrations",
      items: [
        "WebSockets (Socket.IO)",
        "Algolia Instant Search",
        "Sentry Performance Tracking",
        "Role-Based Access Control (RBAC)",
        "Recharts Data Visualization",
        "CKEditor 5",
      ],
    },
    {
      category: "Design Systems & Engineering Tools",
      items: [
        "UI/UX Design",
        "Radix UI & Shadcn UI",
        "Figma",
        "Git & GitHub",
        "Enterprise Architect",
        "Responsive & Dark Mode UI",
      ],
    },
  ]

  return (
    <section id="about" className="relative py-32 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div className={`space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aqua to-calm rounded-full" />
        </div>

        {/* Professional Summary */}
        <div className={`space-y-6 ${isVisible ? "stagger-item-0" : "opacity-0"}`}>
          <p className="text-lg text-mist/90 leading-relaxed">
            I'm <span className="text-aqua font-semibold">Agboola Ephraim Ayodamola-Chidozie - ACE </span>, a creative and driven software engineering graduate from Veritas University Abuja, passionate about the intersection of <span className="text-calm font-semibold">business and technology</span>.
          </p>
          
          <div className="px-6 py-4 rounded-lg bg-ocean/30 border border-white/5 backdrop-blur-sm">
            <p className="text-base text-calm font-medium">
              💼 <span className="text-slate-100">Business-minded developer</span> with a strong foundation in front-end web development, UI/UX design, and business process improvement. I deliver solutions that drive efficiency and solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${isVisible ? "stagger-item-1" : "opacity-0"}`}>
              <h3 className="text-aqua text-sm uppercase tracking-widest font-semibold mb-3">What I Do</h3>
              <p className="text-mist/90 leading-relaxed">
                I craft responsive, user-centered interfaces that blend creativity with functionality. From translating designs into clean code to optimizing performance, I ensure every pixel serves a purpose.
              </p>
            </div>

            <div className={`${isVisible ? "stagger-item-2" : "opacity-0"}`}>
              <h3 className="text-calm text-sm uppercase tracking-widest font-semibold mb-3">My Approach</h3>
              <p className="text-mist/90 leading-relaxed">
                I think strategically about business goals while maintaining technical excellence. Problem-solving, collaboration, and continuous learning drive my approach to every project.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.2s"}}>
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((skillGroup, idx) => (
              <div key={skillGroup.category} className={`${isVisible ? `stagger-item-${idx}` : "opacity-0"}`}>
                <h4 className="text-base font-semibold text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-ocean border border-white/10 text-sm text-mist hover:border-aqua hover:text-aqua hover:bg-aqua/5 transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Education</h3>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-ocean/50 border border-white/5 hover:border-aqua/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-aqua">Bachelor of Science (B.Sc) Software Engineering</h4>
                  <p className="text-mist">Veritas University Abuja • 2021 - 2025</p>
                </div>
                
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-ocean/50 border border-white/5 hover:border-calm/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-calm">Senior Secondary School Leaving Certificate</h4>
                  <p className="text-mist">Government Science and Technical College, Area 3 Garki • 2018 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-ocean/50 border border-white/5 hover:border-aqua/30 transition-all duration-300 transform hover:scale-105">
              <p className="text-aqua font-semibold mb-1">Web Design Masterclass</p>
              <p className="text-sm text-mist">Early Code Abuja • 2024</p>
            </div>
            <div className="p-6 rounded-2xl bg-ocean/50 border border-white/5 hover:border-calm/30 transition-all duration-300 transform hover:scale-105">
              <p className="text-calm font-semibold mb-1">Web Development with PHP</p>
              <p className="text-sm text-mist">Early Code Abuja • 2024</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`p-8 rounded-2xl bg-gradient-to-r from-aqua/5 to-calm/5 border border-white/10 text-center ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.5s"}}>
          <p className="text-lg text-mist/90 leading-relaxed">
            I'm eager to bring my expertise in <span className="text-aqua font-semibold">frontend development</span>, <span className="text-calm font-semibold">UI/UX design</span>, and <span className="text-aqua font-semibold">business strategy</span> to a challenging graduate position. Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  )
}
