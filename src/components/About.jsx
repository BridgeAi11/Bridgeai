import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Lightbulb,
  GraduationCap,
  Users,
  Building2,
} from "lucide-react";

const values = [
  {
    icon: <GraduationCap size={28} />,
    title: "Industry Learning",
    description:
      "Programs designed with real industry practices and hands-on experience.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Corporate Excellence",
    description:
      "Professional training solutions that improve workforce capabilities.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Innovation",
    description:
      "Encouraging creativity, problem solving and emerging technologies.",
  },
  {
    icon: <Users size={28} />,
    title: "Community",
    description:
      "Connecting students, colleges and organizations through collaboration.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto"
        >

          <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700">
            ABOUT BRIDGEAI
          </span>

         <h3 className="mx-auto mt-4 max-w-7xl text-center font-extrabold leading-none tracking-tight text-slate-900 text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] lg:whitespace-nowrap">
            AI Automation,{" "}
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">
              Products
            </span>{" "}
            & Future-Ready Talent
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-8 text-gray-600 sm:text-lg">
            BridgeAI Innovations helps businesses, colleges, and professionals grow
            through AI automation, custom software solutions, product development,
            practical training, internships, and strategic technology partnerships.
          </p>
        </div>

        </motion.div>

        {/* Vision & Mission */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="rounded-3xl bg-gradient-to-br from-violet-700 to-blue-600 text-white p-10 shadow-xl"
          >

            <div className="mb-8 flex items-center gap-4">
              <Rocket className="text-white" size={42} />
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>

            <p className="mt-8 text-lg leading-9 text-white/90">
              To become a trusted AI innovation partner that helps businesses automate
              workflows, build scalable digital products, and prepare future-ready talent
              for the evolving technology economy.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="rounded-3xl bg-slate-900 text-white p-10 shadow-xl"
          >

            <div className="mb-8 flex items-center gap-4">
              <Target className="text-cyan-400" size={42} />
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>

            <p className="mt-8 text-lg leading-9 text-white/90">
              Deliver practical AI automation, product development, software solutions,
              training programs, internships, and college collaborations that create real
              business value and industry-ready skills.
            </p>

          </motion.div>

        </div>

        </div>

     
    </section>
  );
}