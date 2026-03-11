import { useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import projects from "../data/projects"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="relative py-32 px-6 bg-ocean/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`mb-20 space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aqua to-calm rounded-full" />
          <p className="text-lg text-mist/80 max-w-2xl">
            A showcase of work that demonstrates creativity, technical excellence, and strategic thinking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative ${isVisible ? `stagger-item-${index % 3}` : "opacity-0"}`}
            >
              {/* Project Card */}
              <div className="relative h-full p-8 rounded-2xl bg-deep border border-white/5 hover:border-aqua/50 transition-all duration-300 overflow-hidden">
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-aqua/0 to-calm/0 group-hover:from-aqua/10 group-hover:to-calm/5 transition-all duration-300 -z-10" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="inline-block">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-aqua to-calm text-deep text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Badge */}
                  <div className={`flex items-center gap-2 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
                    <div className="w-3 h-3 rounded-full bg-aqua animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-calm">Project</span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-slate-100 group-hover:text-aqua transition-colors duration-300 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-mist/80 leading-relaxed ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
                    {project.description}
                  </p>

                  {/* Award Badge */}
                  {project.award && (
                    <div className="mt-4 p-3 rounded-lg bg-yellow-900/20 border border-yellow-600/30">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🏆</span>
                        <div>
                          <p className="text-yellow-400 text-sm font-bold">{project.award.title}</p>
                          <p className="text-yellow-300/80 text-xs">{project.award.position} - {project.award.category}</p>
                          <p className="text-yellow-300/60 text-xs mt-1">{project.award.event} ({project.award.year})</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags with stagger */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs bg-ocean border border-white/10 text-calm hover:border-aqua hover:text-aqua transition-all duration-300 transform hover:scale-110 ${isVisible ? `stagger-item-${idx}` : "opacity-0"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className={`flex gap-4 pt-6 border-t border-white/5 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target={project.live.startsWith("http") ? "_blank" : "_self"}
                        rel={project.live.startsWith("http") ? "noopener noreferrer" : ""}
                        className="group/link text-aqua hover:text-calm transition-colors duration-300 font-medium flex items-center gap-2"
                      >
                        {project.featured ? "View Demo" : "Live Demo"}
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link text-aqua hover:text-calm transition-colors duration-300 font-medium flex items-center gap-2"
                      >
                        View Code
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Animated border gradient on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aqua/20 to-calm/20 -z-20 blur-xl animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Creative Divider */}
        <div className={`flex items-center justify-center gap-4 py-12 mt-12 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-calm/50" />
          <span className="text-calm text-sm font-semibold">Ready to collaborate?</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-calm/50" />
        </div>

        {/* CTA Section */}
        <div className={`mt-8 text-center space-y-6 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
          <p className="text-mist text-lg">Want to see more of my work?</p>
          <a
            href="https://github.com/agboolaephraim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg border border-white/20 text-slate-100 font-medium hover:border-aqua hover:text-aqua hover:bg-aqua/5 transition-all duration-300 transform hover:scale-105"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
