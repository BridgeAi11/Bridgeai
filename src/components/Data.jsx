import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/Dashboard.png";

const Data = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Smooth animation
  }, []);

  return (
    <section id="Data" className="w-full py-24 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Image */}
        <div
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-200"
          data-aos="fade-up"
        >
          <img
            src={img}
            alt="Dashboard Preview"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left text-gray-900 space-y-8"
          data-aos="fade-left"
        >
          {/* Heading */}
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] font-extrabold leading-tight mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Bring us the Problem
            </span>
          </h2>

          {/* Subheading */}
          <h3 className="text-[0.95rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.2rem] py-0 font-semibold text-indigo-700 mb-1">
  We’ll deliver the Data-Driven Solution
</h3>

<p className="text-[0.8rem] sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium mt-1">
  Empower your Decisions with Intelligent Insights, Interactive Dashboards, and Advanced Analytics — powered by BridgeAi.
</p>


          {/* Button */}
          <button
            className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-indigo-700
            hover:from-indigo-700 hover:to-purple-600
            transition-all duration-300
            text-white font-semibold py-3 px-8 rounded-lg shadow-md"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Data;
