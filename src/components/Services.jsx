import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    description:
      "We build scalable web applications using the latest technologies including React, Node.js, MongoDB, and more. From UI to backend, we deliver end-to-end development solutions.",
    icon: "🖥️",
  },
  {
    title: "Data Analytics & Power BI",
    description:
      "Transform your raw data into actionable insights with our Power BI dashboards and data solutions. We help you make smarter business decisions through visual storytelling.",
    icon: "📊",
  },
  {
    title: "Industry-Relevant Internships",
    description:
      "We offer hands-on internship programs in web development, data analytics, cloud, and more. Interns work on real-world projects with expert mentorship and certifications.",
    icon: "🎓",
  },
  {
    title: "Custom Project Solutions",
    description:
      "Have a unique business challenge? We offer customized project development tailored to your needs—from MVP to enterprise-grade systems across various domains.",
    icon: "🧩",
  },
];

function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="bg-[#F9F9FF] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Services We Offer</h2>

        {/* Grid with animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
  key={index}
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
  className={`transition duration-300 ease-in-out transform rounded-2xl p-5 shadow-lg bg-white border-2 text-left hover:shadow-xl ${
    hovered === index
      ? "border-[#8B3DFF] scale-105 text-[#8B3DFF]"
      : "border-transparent"
  }`}
>

            
              {/* Icon with circular border and gradient bg */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#8B3DFF] mb-5 text-3xl bg-gradient-to-br from-[#f3e8ff] to-[#e0d4fc]">
                {service.icon}
              </div>

              <h3 className="font-bold text-lg mb-2 ">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots for visual feedback */}
        <div className="flex justify-center mt-10 gap-3">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                hovered === index ? "bg-[#8B3DFF] scale-125" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
