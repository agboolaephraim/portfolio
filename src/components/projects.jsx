import { useState, useEffect } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import projects from "../data/projects"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeModalProject, setActiveModalProject] = useState(null)
  const [activeSnapshotIdx, setActiveSnapshotIdx] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const openProjectModal = (project) => {
    setActiveModalProject(project)
    setActiveSnapshotIdx(0)
  }

  return (
    <section id="projects" className="relative py-32 px-6 bg-ocean/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`mb-16 space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              Selected Enterprise Projects
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-aqua to-calm rounded-full" />
          <p className="text-lg text-mist/80 max-w-3xl">
            A deep-dive into three major enterprise platforms engineered using modern web technologies—featuring interactive page tours, technical architecture breakdowns, and key page snapshots.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col ${isVisible ? `stagger-item-${index % 3}` : "opacity-0"}`}
            >
              {/* Project Card */}
              <div className="relative h-full flex flex-col rounded-2xl bg-deep border border-white/10 hover:border-aqua/40 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)] transition-all duration-500 overflow-hidden">
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-aqua/0 to-calm/0 group-hover:from-aqua/10 group-hover:to-calm/5 transition-all duration-300 -z-10" />

                {/* Card Top Preview Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-ocean/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-aqua to-calm text-deep text-xs font-bold uppercase tracking-wider shadow-md">
                      Featured System
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Subtitle / Category */}
                    <p className="text-xs uppercase tracking-widest font-semibold text-calm">
                      {project.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-aqua transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-mist/85 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] bg-ocean/80 border border-white/10 text-mist/90 hover:border-aqua hover:text-aqua transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 6 && (
                        <span className="px-2 py-1 rounded-md text-[11px] bg-aqua/10 text-aqua font-medium">
                          +{project.tags.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Actions & Interactive Snapshot Modal Trigger */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-aqua/20 to-calm/20 hover:from-aqua/40 hover:to-calm/40 border border-aqua/40 text-aqua hover:text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <span>📸 Explore Key Snapshots</span>
                        <span>→</span>
                      </button>

                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-mist/70 hover:text-calm text-center py-1 transition-colors flex items-center justify-center gap-1"
                        >
                          <span>View Repository on GitHub</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated border glow on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aqua/20 to-calm/20 -z-20 blur-xl animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Modal: Interactive Project Tour & Snapshot Viewer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep/80 backdrop-blur-md animate-fade-in">
            <div
              className="relative w-full max-w-5xl max-h-[90vh] bg-deep border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-ocean/50">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-calm">
                    Interactive Portfolio Demo & Page Snapshots
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 flex items-center gap-3">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-lg"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Snapshot Selection Tabs */}
                <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
                  {activeModalProject.snapshots.map((snap, idx) => (
                    <button
                      key={snap.id}
                      onClick={() => setActiveSnapshotIdx(idx)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                        activeSnapshotIdx === idx
                          ? "bg-gradient-to-r from-aqua to-calm text-deep shadow-lg"
                          : "bg-ocean/60 text-mist hover:bg-ocean hover:text-slate-100 border border-white/5"
                      }`}
                    >
                      <span>{idx + 1}.</span>
                      <span>{snap.title}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Snapshot Details */}
                {activeModalProject.snapshots[activeSnapshotIdx] && (
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    {/* Visual Preview Image */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="relative rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-inner group">
                        <img
                          src={activeModalProject.image}
                          alt={activeModalProject.snapshots[activeSnapshotIdx].title}
                          className="w-full h-auto max-h-[380px] object-cover object-top"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-xs text-mist/90 flex justify-between items-center">
                          <span className="font-semibold text-aqua">
                            {activeModalProject.snapshots[activeSnapshotIdx].title}
                          </span>
                          <span className="text-[10px] bg-ocean/80 px-2 py-0.5 rounded text-calm">
                            Page Snapshot {activeSnapshotIdx + 1} of {activeModalProject.snapshots.length}
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack Pills for this project */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {activeModalProject.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded bg-ocean/60 border border-white/10 text-[10px] text-calm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Explanatory Breakdown Panel */}
                    <div className="lg:col-span-5 space-y-4 bg-ocean/20 p-5 rounded-xl border border-white/5">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-aqua font-semibold">
                          Feature Overview
                        </span>
                        <h4 className="text-lg font-bold text-slate-100 mt-1">
                          {activeModalProject.snapshots[activeSnapshotIdx].title}
                        </h4>
                      </div>

                      <p className="text-sm text-mist/90 leading-relaxed">
                        {activeModalProject.snapshots[activeSnapshotIdx].description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <h5 className="text-xs uppercase tracking-wider text-calm font-semibold">
                          Key Technical & Architecture Highlights:
                        </h5>
                        <ul className="space-y-2 text-xs text-mist/85">
                          {activeModalProject.snapshots[activeSnapshotIdx].highlights.map(
                            (item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-aqua font-bold">✓</span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Full Project Description Footer */}
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-[11px] text-mist/60 italic leading-snug">
                          {activeModalProject.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-ocean/40 text-xs text-mist/70">
                <span>Press ESC or click ✕ to close snapshot tour</span>
                {activeModalProject.github && activeModalProject.github !== "#" && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aqua hover:underline flex items-center gap-1 font-medium"
                  >
                    View Project Code on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Creative Divider */}
        <div className={`flex items-center justify-center gap-4 py-12 mt-12 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-calm/50" />
          <span className="text-calm text-sm font-semibold">Ready to collaborate?</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-calm/50" />
        </div>

        {/* CTA Section */}
        <div className={`mt-8 text-center space-y-6 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
          <p className="text-mist text-lg">Want to discuss these projects or view full repositories?</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/agboolaephraim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg border border-white/20 text-slate-100 font-medium hover:border-aqua hover:text-aqua hover:bg-aqua/5 transition-all duration-300 transform hover:scale-105"
            >
              Visit My GitHub Profile
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-aqua to-calm text-deep font-semibold hover:shadow-lg hover:shadow-aqua/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
