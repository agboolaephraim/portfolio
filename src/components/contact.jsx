import { useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")
  const { ref, isVisible } = useScrollAnimation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("Please fill in all fields")
      return
    }
    setStatus("Thank you! I'll get back to you soon.")
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setStatus(""), 3000)
  }

  const socials = [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Email", url: "mailto:your@email.com", icon: "email" },
  ]

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-aqua/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aqua to-calm rounded-full mx-auto" />
          <p className="text-lg text-mist/80 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Direct Contact */}
          <div className={`p-8 rounded-2xl bg-ocean/50 border border-white/5 hover:border-aqua/30 transition-all duration-300 space-y-4 group transform hover:scale-105 ${isVisible ? "stagger-item-0" : "opacity-0"}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-aqua group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold text-slate-100">Call or Email</h3>
            </div>
            <p className="text-mist/80">Reach out directly for immediate inquiries</p>
            <div className="space-y-3">
              <a
                href="mailto:agboolaephraim@gmail.com"
                className="block px-6 py-3 rounded-lg bg-gradient-to-r from-aqua to-calm text-deep font-medium hover:shadow-lg hover:shadow-aqua/50 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Send Email
              </a>
              <div className="text-sm text-mist/70">
                <p>📧 agboolaephraim@gmail.com</p>
                <p>📱 +234 9020570468</p>
                <p>📱 +234 9136386124</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`p-8 rounded-2xl bg-ocean/50 border border-white/5 hover:border-aqua/30 transition-all duration-300 space-y-4 group transform hover:scale-105 ${isVisible ? "stagger-item-1" : "opacity-0"}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-calm group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold text-slate-100">Connect</h3>
            </div>
            <p className="text-mist/80">Find me on social media and professional platforms</p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/agboolaephraim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 text-mist hover:border-aqua hover:text-aqua transition-all duration-300 text-sm font-medium transform hover:scale-110"
                title="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/agboola-ephraim-ayodamola-chidozie-6a231a245/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 text-mist hover:border-calm hover:text-calm transition-all duration-300 text-sm font-medium transform hover:scale-110"
                title="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 text-mist hover:border-aqua hover:text-aqua transition-all duration-300 text-sm font-medium transform hover:scale-110"
                title="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`p-8 md:p-12 rounded-2xl bg-ocean/50 border border-white/5 space-y-6 ${isVisible ? "stagger-item-2" : "opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-aqua" />
            <h3 className="text-2xl font-bold text-slate-100">Send a Message</h3>
          </div>

          {/* Name Input */}
          <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
            <label htmlFor="name" className="block text-sm font-medium text-slate-100">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-deep border border-white/10 text-slate-100 placeholder-mist/40 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua/50 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
            <label htmlFor="email" className="block text-sm font-medium text-slate-100">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-deep border border-white/10 text-slate-100 placeholder-mist/40 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua/50 transition-all duration-300"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2 transform transition-all duration-300 hover:scale-105">
            <label htmlFor="message" className="block text-sm font-medium text-slate-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-deep border border-white/10 text-slate-100 placeholder-mist/40 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua/50 transition-all duration-300 resize-none"
            />
          </div>

          {/* Status Message */}
          {status && (
            <div
              className={`p-4 rounded-lg text-sm font-medium animate-slide-in-up ${
                status.includes("Thank you")
                  ? "bg-green-500/10 border border-green-500/30 text-green-300"
                  : "bg-amber-500/10 border border-amber-500/30 text-amber-300"
              }`}
            >
              {status}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-aqua to-calm text-deep font-semibold hover:shadow-lg hover:shadow-aqua/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <div className={`mt-16 text-center border-t border-white/5 pt-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
          <p className="text-mist/60 text-sm">
            © {new Date().getFullYear()} Ace. All rights reserved. Built with creativity and precision.
          </p>
        </div>
      </div>
    </section>
  )
}
