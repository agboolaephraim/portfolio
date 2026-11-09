import { useEffect, useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-aqua/20 rounded-full blur-3xl transition-transform duration-500"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-calm/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[25rem] h-[25rem] bg-aqua/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-3xl text-center space-y-8">
        {/* Badge */}
        <div className={`inline-block ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <p className="text-xs tracking-[0.35em] text-calm uppercase px-4 py-2 rounded-full bg-ocean border border-white/5">
           👋Hello World
          </p>
        </div>

        {/* Main Heading with Creative Typography */}
        <div className="overflow-hidden">
  <div className="flex flex-wrap justify-center items-center text-center gap-x-6 gap-y-4">
    
    <h1
      className={`text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-100 tracking-tight
      ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
    >
      I'm ACE,
    </h1>

    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-aqua via-calm to-aqua
      text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight
      ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
      style={{ animationDelay: "0.1s" }}
    >
      Frontend Developer
    </span>

    <h1
      className={`text-4xl md:text-6xl lg:text-7xl font-medium text-slate-300 tracking-tight
      ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
      style={{ animationDelay: "0.2s" }}
    >
      & UI/UX Designer
    </h1>

  </div>
</div>


        {/* Subtitle with Creative Description */}
        <div className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
          <p className="text-base md:text-lg text-mist/90 max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-shimmer font-semibold">elegant, responsive interfaces</span> that solve real problems. 
            Based in Abuja, I'm a business-minded developer crafting digital experiences.
          </p>
        </div>

        {/* Descriptive Text - Professional & Creative */}
        <div className={`${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
          <div className="px-6 py-4 rounded-lg bg-ocean/30 border border-white/5 backdrop-blur-sm">
            <p className="text-sm md:text-base text-calm font-medium">
              💼 <span className="text-slate-100">Veritas University graduate</span> seeking a challenging role where I can drive innovation and impact through clean code and strategic thinking.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 pt-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.5s"}}>
          <a
            href="#projects"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-aqua to-calm text-deep font-semibold hover:shadow-lg hover:shadow-aqua/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-white/20 text-slate-100 font-semibold hover:border-aqua hover:text-aqua hover:bg-aqua/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-aqua rounded-full animate-float-up" />
          </div>
        </div>
      </div>
    </section>
  )
}
