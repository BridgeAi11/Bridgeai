import React from "react";
import { FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <footer className="bg-white text-black px-6 py-12 border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-sm md:text-base">
        
        {/* Company Logo + Name + Quote */}
        <div className="flex flex-col md:items-start">
          <div className="flex items-center mb-2">
            <img
              src="\src\assets\logo.png"
              alt="BridgeAi Logo"
              className="w-16 h-16 object-contain mr-3"
            />
            <h1 className="text-2xl font-extrabold tracking-wide text-black">
              BridgeAi Pvt Ltd.
            </h1>
          </div>
          <p className="italic text-gray-500 text-sm ml-5 mt-1">
            Empowering the future with intelligent solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-black">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-2 flex items-center gap-2">
            <span role="img" aria-label="email">📧</span>
            <a
              href="mailto:contact@bridgeai.in"
              className="text-blue-700 hover:text-blue-900 font-medium transition"
            >
              contact@bridgeai.in
            </a>
          </p>
          <p className="mb-2 flex items-center gap-2">
            <span role="img" aria-label="phone">📞</span>
            <span className="font-medium">+91 6374642981</span>
          </p>
          <p className="mt-2 text-black leading-relaxed flex items-start gap-2">
            <span role="img" aria-label="location">🏢</span>
            SNS Kalvi Nagar, Valiyampalayam,<br />
            Coimbatore, Tamil Nadu 641035
          </p>
          <p className="mt-2 text-black leading-relaxed flex items-start gap-2">
            <span role="img" aria-label="location">🏢</span>
            1st C Cross Rd, Sundar Ram Shetty Nagar,
            Bilekahalli, Bengaluru, Karnataka 560076
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-black">
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex space-x-5  text-2xl">
            <a
              href="https://linkedin.com/company/bridgeai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/916374642981"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+916374642981"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition hover:scale-110"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center md:text-left text-black">
          <h2 className="text-xl font-semibold mb-3">Start Your Journey</h2>
          <p className="mb-4 font-medium">
            Let’s talk about how AI can transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-black text-sm pt-6 border-t border-gray-300">
        © {new Date().getFullYear()} <strong>BridgeAi Pvt Ltd.</strong> All rights reserved.
      </div>
    </footer>
  );
};

export default CompanyInfo;
