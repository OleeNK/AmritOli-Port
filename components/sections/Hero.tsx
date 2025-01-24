"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl text-blue-400 mb-2">Hello, I&apos;m</h2>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            Amrit Oli
          </h1>
          <p className="text-xl md:text-2xl text-blue-300">
            Developer & Technology Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.div whileHover={{ scale: 1.1 }} className="text-blue-400">
            <Code size={32} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-blue-400">
            <Briefcase size={32} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-blue-400">
            <Mail size={32} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#contact"
            className="premium-button text-white px-8 py-4 rounded-lg text-lg font-medium"
          >
            Contact Me
          </a>
          <a
            href="#experience"
            className="bg-opacity-10 backdrop-blur-lg border border-blue-400/30 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/20 transition-colors text-lg font-medium"
          >
            View Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;