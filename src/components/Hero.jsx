import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  Award,
  Users,
} from "lucide-react";

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "30+", label: "College Partners" },
  { number: "100+", label: "Internships" },
];

const cards = [
  
  {
    icon: <Building2 size={28} />,
    title: "AI Automation",
    desc: "Automate business workflows with AI",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Training & Internships",
    desc: "Industry-ready learning programs",
  },
  
  {
    icon: <Award size={28} />,
    title: "Product Development",
    desc: "Build scalable AI & SaaS products",
  },
  {
    icon: <Users size={28} />,
    title: "Software Solutions",
    desc: "Web, Mobile & Enterprise applications",
  },
];

export default function Hero() {
  return (
      <section
  id="hero"
  className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50 px-0 pt-8 pb-12 lg:pt-10 lg:pb-10"
>
      {/* Background Blur */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>

<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:min-h-[78vh] lg:grid-cols-2 lg:gap-20">        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex max-w-full items-center gap-2 rounded-xl bg-violet-100 px-4 py-2 text-xs font-semibold leading-6 text-violet-700 sm:text-sm">
  <span>🚀</span>
  <span>Automating Businesses, Building Products & Upskilling Talent</span>
</span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
  BridgeAI
  <span className="block bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
    Innovations
  </span>
</h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mt-8">
            We build AI-powered products, intelligent automation solutions, custom
            software, industry-focused training, and strategic partnerships that help
            businesses, colleges, and professionals innovate and grow.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 lg:mt-12 lg:flex lg:flex-wrap">
            <a
              href="#services"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 px-3 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 sm:px-7 sm:py-4 sm:text-base"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-600 hover:text-violet-700 sm:px-7 sm:py-4 sm:text-base"
            >
              Work With Us
            </a>
          </div>

         
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
              {cards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}
                className="rounded-xl border border-white/60 bg-white/75 p-5 shadow-lg backdrop-blur-xl sm:p-6 lg:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-700 to-blue-600 text-white">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-violet-300/30 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}