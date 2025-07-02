import React from "react";

const VisionMission = () => {
  return (
    <section id="Vision & Mission" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
          Vision & Mission
        </h1>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Our guiding principles that shape everything we do.
        </p>

        {/* Cards Container */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-left border border-purple-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🚀</span>
              <h2 className="text-2xl font-semibold text-purple-700">Vision</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              To become a trusted leader in solving real-world problems across industries
              through data-driven innovation, while nurturing the next generation of talent
              by bridging the gap between academic learning and corporate experience.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-left border border-indigo-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎯</span>
              <h2 className="text-2xl font-semibold text-indigo-700">Mission</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              To deliver impactful solutions powered by data and technology, and to
              empower students through meaningful internship opportunities that connect
              education with practical industry needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
