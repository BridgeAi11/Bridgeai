import { useState, useEffect, useRef, useCallback } from "react";

import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Cpu,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Careers", href: "#careers" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

const serviceGroups = [
  {
    title: "AI & Automation",
    icon: <Cpu size={22} />,
    description: "Build intelligent systems that work for you",
    services: [
      "AI Automation",
      "AI Agents",
      "Business Process Automation",
      "Workflow Automation",
    ],
  },
  {
    title: "Product Development",
    icon: <Rocket size={22} />,
    description: "From idea to scalable, launch-ready product",
    services: [
      "Product Design",
      "MVP Development",
      "SaaS Products",
      "Custom Software",
    ],
  },
  {
    title: "Training & Partnerships",
    icon: <GraduationCap size={22} />,
    description: "Upskill talent and grow through collaboration",
    services: [
      "Student Training",
      "Corporate Training",
      "College Partnerships",
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const dropdownRef = useRef(null);

  // Track scroll position past the hero to switch navbar background
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 700;
      setScrolled(window.scrollY > heroHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the desktop dropdown on outside click and on Escape
  useEffect(() => {
    if (!programOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProgramOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setProgramOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [programOpen]);

  // Close the mobile drawer any time we navigate to a hash anchor
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-gray-200"
          : "bg-white/80 backdrop-blur-md border-transparent shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20 gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
  <img
    src="/assets/logo.png"
    alt="BridgeAI Logo"
    className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
  />

  <h1 className="font-bold leading-none whitespace-nowrap">
    <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-900">
      BridgeAI
    </span>{" "}
    <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600">
      Innovations
    </span>
  </h1>
</a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-10">
            <a
              href="#hero"
              className="font-medium text-gray-700 hover:text-violet-700 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-violet-700 transition"
            >
              About
            </a>

{/* Services Dropdown */}
<div
  ref={dropdownRef}
  className="relative"
  onMouseEnter={() => setProgramOpen(true)}
  onMouseLeave={() => setProgramOpen(false)}
>
  <button
    type="button"
    className="flex items-center gap-1 font-medium text-gray-700 hover:text-violet-700 transition"
    onClick={() => setProgramOpen((o) => !o)}
    aria-expanded={programOpen}
  >
    Services
    <ChevronDown
      size={18}
      className={`${programOpen ? "rotate-180" : ""} transition`}
    />
  </button>

  <AnimatePresence>
    {programOpen && (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.18 }}
className="absolute top-full left-1/2 z-50 mt-5 w-[620px] -translate-x-[70%] rounded-none border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-[285px_1fr]">
          <div className="border-r border-gray-200 p-3">
            {serviceGroups.map((group, index) => (
              <button
                type="button"
                key={group.title}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                className={`w-full rounded-none px-3 py-3 text-left transition ${
                  activeService === index
                    ? "text-violet-700"
                    : "text-gray-700 hover:text-violet-700"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-current">{group.icon}</span>
                  <span className="font-semibold whitespace-nowrap">
                  {group.title}
                </span>
                </span>
              </button>
            ))}
          </div>

          <div className="p-5">
            <div className="mb-4">
             
              <p className="mt-1 text-sm leading-6 text-gray-500">
                {serviceGroups[activeService].description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-1">
              {serviceGroups[activeService].services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 transition last:border-b-0 hover:text-violet-700"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

            <a
              href="#careers"
              className="font-medium text-gray-700 hover:text-violet-700 transition"
            >
              Careers
            </a>

            <a
              href="#blog"
              className="font-medium text-gray-700 hover:text-violet-700 transition"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="font-medium text-gray-700 hover:text-violet-700 transition"
            >
              Contact
            </a>
          </nav>

          {/* Right side: desktop CTA + mobile menu toggle */}
          <div className="flex items-center justify-end gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:inline-flex items-center rounded-full bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 px-6 py-2.5 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              Partner With Us
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-gray-700 hover:bg-gray-100 transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((item) =>
                item.title === "Services" ? (
                  <div
                    key={item.title}
                    className="border-t pt-6 first:border-t-0 first:pt-0"
                  >
                    <button
                      onClick={() => setMobileProgramOpen((o) => !o)}
                      className="w-full flex items-center justify-between text-lg font-semibold text-gray-700"
                      aria-expanded={mobileProgramOpen}
                    >
                      Services
                      <ChevronDown
                        size={20}
                        className={`transition ${
                          mobileProgramOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
<AnimatePresence>
  {mobileProgramOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden"
    >
      <div className="mt-4 space-y-3 pl-3">
        {serviceGroups.map((group) => (
          <a
            key={group.title}
            href="#services"
            onClick={closeMobile}
            className="block text-base font-medium text-gray-600 hover:text-violet-700"
          >
            {group.title}
          </a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
                  </div>
                  
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={closeMobile}
                    className="block text-lg font-semibold text-gray-700 hover:text-violet-700 border-t pt-6 first:border-t-0 first:pt-0"
                  >
                    {item.title}
                  </a>
                )
              )}

              <motion.a
                href="#contact"
                onClick={closeMobile}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="block w-full mt-2 rounded-full bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 py-3 text-center text-white font-semibold"
              >
                Partner With Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}