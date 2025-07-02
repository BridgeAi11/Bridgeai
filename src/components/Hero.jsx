import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="w-full bg-white  pb-5 px-6 md:px-10 overflow-hidden">
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

          {/* CTA */}
          <motion.button
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
            src="/src/assets/Hero.png"
            alt="Illustration"
           className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] mt-0 md:mt-0"

          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
