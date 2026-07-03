import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  CalendarDays,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={22} />,
    title: "Phone",
    value: "+91 9342642981",
    href: "https://wa.me/919342642981",
    external: true,
  },
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "Admin@bridgeai.in",
    href: "mailto:Admin@bridgeai.in",
    external: false,
  },
  {
    icon: <Globe size={22} />,
    title: "Website",
    value: "www.bridgeai.in",
    href: "https://www.bridgeai.in",
    external: true,
  },
  {
    icon: <MapPin size={22} />,
    title: "Location",
    value: "Punjai Puliampatti, Erode, Tamil Nadu",
    href: "https://www.google.com/maps/search/?api=1&query=Thabovanam%2C%20Punjai%20Puliampatti%2C%20Tamil%20Nadu%2C%20India",
    external: true,
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const organization = form.organization.value.trim();
  const interest = form.interest.value;
  const message = form.message.value.trim();

  const whatsappMessage = `New Enquiry from BridgeAI Website*

Name: ${name}

Email: ${email}

Organization: ${organization}

Interest: ${interest}

Message:
${message}`;

  const phone = "919342642981";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(url, "_blank");

  form.reset();
};

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-xl border border-violet-500 bg-violet-600/20 px-4 py-2 text-sm font-semibold text-violet-300">
            CONTACT BRIDGEAI INNOVATIONS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-4xl">
            Let’s Build, Automate
            <span className="text-cyan-400"> & Grow Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Talk to us about AI automation, product development, custom
            software, training programs, internships, workshops, or college
            partnerships.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((item) => (
  <a
    key={item.title}
    href={item.href}
    target={item.external ? "_blank" : undefined}
    rel={item.external ? "noopener noreferrer" : undefined}
    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition hover:border-violet-400/50 hover:bg-white/10"
  >
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
      {item.icon}
    </div>

    <div>
      <h3 className="font-semibold text-lg text-white">{item.title}</h3>
      <p className="text-slate-300">{item.value}</p>
    </div>
  </a>
))}
            </div>

            
          </motion.div>

       <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="rounded-2xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl lg:p-8"
>
  <div className="mb-8">
    <span className="inline-flex rounded-xl bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
      GET IN TOUCH
    </span>

    <h3 className="mt-5 text-2xl font-extrabold leading-tight lg:text-3xl">
      Send us a Message
    </h3>

    <p className="mt-3 text-gray-600">
      Tell us what you need. We'll help you with the right solution.
    </p>
  </div>

  {/* Name & Email */}

  <div className="grid gap-4 md:grid-cols-2">

    <input
      name="name"
      type="text"
      placeholder="Full Name"
      required
      className="h-14 rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none transition focus:border-violet-600 focus:bg-white"
    />

    <input
      name="email"
      type="email"
      placeholder="Email Address"
      required
      className="h-14 rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none transition focus:border-violet-600 focus:bg-white"
    />

  </div>

  {/* Organization */}

  <input
    name="organization"
    type="text"
    placeholder="Company / College / Organization"
    className="mt-4 h-14 w-full rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none transition focus:border-violet-600 focus:bg-white"
  />

  {/* Interest */}

  <select
    name="interest"
    required
    defaultValue=""
    className="mt-4 h-14 w-full rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none transition focus:border-violet-600 focus:bg-white"
  >
    <option value="" disabled>
      Select Your Interest
    </option>

    <option>AI Automation</option>
    <option>AI Agents</option>
    <option>Product Development</option>
    <option>Custom Software</option>
    <option>Training Programs</option>
    <option>Internships</option>
    <option>College Partnership</option>

  </select>

  {/* Message */}

  <textarea
    name="message"
    rows={5}
    placeholder="Tell us about your requirement..."
    required
    className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-violet-600 focus:bg-white"
  ></textarea>

  <button
    type="submit"
    className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-700 to-blue-600 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
  >
    Send Message
    <Send size={18} />
  </button>
</motion.form>
        </div>
      </div>
    </section>
  );
}