import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Data = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCloseModal = () => {
    setShowForm(false);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mrbkvqdv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <>
      <section id="Data" className="w-full py-24 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left: Image */}
          <div
            className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-gray-200"
            data-aos="fade-up"
          >
            <img
              src="/assets/Dashboard.png"
              alt="Dashboard Preview"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Text */}
          <div
            className="w-full md:w-1/2 text-center md:text-left text-gray-900 space-y-8"
            data-aos="fade-left"
          >
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] font-extrabold leading-tight mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-700 text-transparent bg-clip-text">
                Bring us the Problem
              </span>
            </h2>

            <h3 className="text-[0.95rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.2rem] py-0 font-semibold text-indigo-700 mb-1">
              We’ll deliver the Data-Driven Solution
            </h3>

            <p className="text-[0.8rem] sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium mt-1">
              Empower your Decisions with Intelligent Insights, Interactive Dashboards, and Advanced Analytics — powered by BridgeAi.
            </p>

            <button
              onClick={() => setShowForm(true)}
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

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative">
            {!formSubmitted ? (
              <>
                <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Share Your Business Need</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <textarea
                    name="problem"
                    required
                    rows="4"
                    placeholder="Briefly describe your problem or business use case"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                  >
                    Submit
                  </button>
                </form>
                <button
                  onClick={handleCloseModal}
                  className="text-sm text-gray-500 hover:text-gray-800 underline block text-center mt-4"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-green-600">✅ Thank you!</h3>
                <p className="text-gray-700">Your submission has been received. We'll contact you soon.</p>
                <button
                  onClick={handleCloseModal}
                  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Data;
