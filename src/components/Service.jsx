import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  School,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <BriefcaseBusiness size={34} />,
    title: "AI Automation",
    description:
      "Automate business workflows, reduce manual work, and improve operational speed using AI-powered systems and smart agents.",
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: <Building2 size={34} />,
    title: "Product Development",
    description:
      "Design and develop scalable web apps, SaaS platforms, MVPs, dashboards, and custom software solutions for modern businesses.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <GraduationCap size={34} />,
    title: "Training & Partnerships",
    description:
      "Deliver practical training, internships, workshops, and college partnerships that help students and professionals become industry-ready.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Services()  {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            OUR SERVICES
          </span>

          

          <p className="mt-6 text-lg text-gray-600 leading-8">
            BridgeAI Innovations helps businesses automate workflows, build digital
            products, and empower students and professionals through practical training,
            internships, and technology partnerships.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                rounded-3xl
                bg-white
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                border
                border-gray-100
              "
            >

              {/* Icon */}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color}
                text-white flex items-center justify-center shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-gray-600 leading-7">
                {item.description}
              </p>

              

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}