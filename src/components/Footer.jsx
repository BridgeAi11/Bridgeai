import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
       <a href="#hero" className="group flex items-center gap-4">
  <img
    src="/assets/logo.png"
    alt="BridgeAI Logo"
    className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
  />

  <div className="leading-none">
    <h2 className="text-[2rem] font-extrabold text-white">
      BridgeAI
    </h2>

    <span className="mt-1 block text-xs font-bold uppercase tracking-[0.45em] text-violet-400">
      INNOVATIONS
    </span>
  </div>
</a>

            <p className="mt-6 leading-8 text-slate-400">
              Ideas That Inspire. Solutions That Matter.
            </p>

           <div className="mt-8 flex gap-3">
  <a
    href="https://www.instagram.com/bridgeai_innovations?igsh=MWsyamxjZXN6N256MA=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-violet-700 hover:text-white"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.youtube.com/@BridgeAi_Innovations"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-violet-700 hover:text-white"
  >
    <Youtube size={20} />
  </a>

  <a
    href="https://www.linkedin.com/company/bridgeaiinnovation/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-violet-700 hover:text-white"
  >
    <Linkedin size={20} />
  </a>
</div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#hero" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#why" className="transition hover:text-white">
                  Why BridgeAI
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>

            <ul className="space-y-4 text-slate-400">
              <li>AI Automation</li>
              <li>AI Agents</li>
              <li>Product Development</li>
              <li>Custom Software</li>
              <li>Training Programs</li>
              <li>College Partnerships</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Stay Connected</h3>

            

            <div className="mt-8 space-y-4 text-slate-400">
  <a
    href="mailto:Admin@bridgeai.in"
    className="flex items-center gap-3 transition hover:text-white"
  >
    <Mail size={18} />
    Admin@bridgeai.in
  </a>

  <a
href="https://wa.me/919342642981?text=Hi%20BridgeAI%20Innovations%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 transition hover:text-white"
  >
    <Phone size={18} />
    +91 9342642981
  </a>


              <p className="flex items-center gap-3">
                <MapPin size={18} />
                Punjai Puliampatti, Erode, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BridgeAI Innovations. All Rights
            Reserved.
          </p>

          <button
            type="button"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-blue-600 transition hover:scale-105"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}