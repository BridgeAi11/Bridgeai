import { useState } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="w-full bg-white pb-5 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">

          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main Heading */}
            <h1 className="leading-tight font-extrabold text-gray-900">
              <span className="block text-6xl sm:text-8xl md:text-8xl">Let&apos;s Grow</span>
              <span className="block text-[#8B3DFF] text-4xl sm:text-6xl md:text-7xl mt-2">Together</span>
            </h1>

            {/* Quote */}
            <p className="text-gray-600 text-lg sm:text-xl max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
              Crafting Solutions. Empowering Talent. Bridging Future.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={() => setShowModal(true)}
              className="mt-10 md:mt-12 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-blue-500 text-white font-semibold text-base md:text-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Let’s get Connected!
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img
              src="/assets/Hero.png"
              alt="Illustration"
              className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center space-y-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Who are you?</h3>
            <p className="text-gray-600">Please choose an option to connect with us:</p>

            {/* Student Button */}
            <button
              onClick={() => {
                setShowModal(false);
                window.open('https://forms.gle/9YQgxcs5TZLMCM5y7', '_blank');
              }}
              className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              I’m a Student (Apply for Internship)
            </button>

            {/* Industry Button */}
            <button
              onClick={() => {
                setShowModal(false);
                window.open('https://calendly.com/bridgeai05/30min', '_blank');
              }}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              I’m an Industry Professional (Book a Demo)
            </button>

            {/* Cancel */}
            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-gray-500 hover:text-gray-800 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
