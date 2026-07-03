import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Award,
  Laptop2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <BriefcaseBusiness size={30} />,
    title: "Business-First AI Automation",
    description:
      "We design automation solutions around real business workflows, helping teams save time, reduce manual work, and improve productivity.",
  },
  {
    icon: <Laptop2 size={30} />,
    title: "End-to-End Product Development",
    description:
      "From MVPs to scalable platforms, we build web apps, SaaS products, dashboards, and custom software with a practical growth-focused approach.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Fast Execution & Modern Tech",
    description:
      "We use modern AI, automation, and software tools to move quickly from idea to implementation without overcomplicating the process.",
  },
  {
    icon: <Users size={30} />,
    title: "Training With Real Projects",
    description:
      "Our training programs focus on hands-on learning, live use cases, and practical skills for students, professionals, and teams.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Trusted College & Business Partner",
    description:
      "We collaborate with colleges, institutions, startups, and businesses through training, internships, workshops, and technology partnerships.",
  },
  {
    icon: <Award size={30} />,
    title: "Solutions That Create Impact",
    description:
      "Every service is built to create measurable value, whether it is workflow automation, product delivery, talent development, or institutional growth.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-24" id="why">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-xl bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            WHY CHOOSE BRIDGEAI
          </span>

          <h2 className="mt-5 text-1.5xl font-extrabold leading-tight text-slate-900 sm:text-xl lg:text-4xl">
            Built for Automation,
            <span className="text-violet-700 "> Products & Training</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            BridgeAI Innovations brings together AI automation, product
            development, software solutions, and practical training to help
            businesses, colleges, students, and professionals grow with
            confidence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-gray-100 bg-slate-50 p-6 shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 text-white shadow-md">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}