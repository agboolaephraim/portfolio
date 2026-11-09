import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Intro", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-deep/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-slate-100 hover:text-aqua transition">
          ACE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-mist hover:text-aqua transition duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-aqua group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        >
          <span
            className={`h-0.5 w-full bg-slate-100 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-slate-100 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-slate-100 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-ocean/95 backdrop-blur-xl border-b border-white/5 px-6 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-72 opacity-100 py-4" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block text-sm text-mist hover:text-aqua transition py-2.5 border-b border-white/5 last:border-none"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
