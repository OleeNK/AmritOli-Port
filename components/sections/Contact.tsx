"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, Send, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after animation
    setTimeout(() => setIsSubmitted(false), 2000);
    console.log(formData);
  };

  const floatingSparkles = Array(3).fill(null).map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: Math.random() * 100 - 50,
        y: Math.random() * -100 - 50,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.8,
        ease: "easeOut",
      }}
    >
      <Sparkles className="text-blue-400" size={16} />
    </motion.div>
  ));

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, transparent 0%, rgba(0,0,0,0) 100%)",
              "radial-gradient(circle at 100% 100%, transparent 0%, rgba(0,0,0,0) 100%)",
              "radial-gradient(circle at 0% 0%, transparent 0%, rgba(0,0,0,0) 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="relative mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
              Get in Touch
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-200 mt-4 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
          {floatingSparkles}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="premium-card p-6 cursor-pointer relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="bg-blue-400/10 p-4 rounded-full"
                >
                  <Phone className="text-blue-400" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-blue-400">Phone</h3>
                  <a
                    href="tel:+9779816058549"
                    className="text-blue-200 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    +977-9816058549
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="premium-card p-6 cursor-pointer relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: -15 }}
                  className="bg-blue-400/10 p-4 rounded-full"
                >
                  <Mail className="text-blue-400" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-blue-400">Email</h3>
                  <a
                    href="mailto:oliamrit952@gmail.com"
                    className="text-blue-200 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    oliamrit952@gmail.com
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="premium-card p-8 space-y-6 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-blue-400/5 rounded-lg"
                  style={{
                    background: "linear-gradient(45deg, rgba(96, 165, 250, 0.03), rgba(168, 85, 247, 0.03), rgba(96, 165, 250, 0.03))",
                    backgroundSize: "200% 200%",
                    animation: "gradient 15s ease infinite",
                  }}
                />
              )}
            </AnimatePresence>

            <div className="space-y-2 relative">
              <motion.label 
                htmlFor="name" 
                className={`block text-sm font-medium transition-colors ${
                  focusedField === 'name' ? 'text-blue-400' : 'text-blue-200'
                }`}
                whileHover={{ x: 5 }}
              >
                Name
              </motion.label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-blue-400/5 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400/30 transition-all relative z-10"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: focusedField === 'name' ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <motion.label 
                htmlFor="email" 
                className={`block text-sm font-medium transition-colors ${
                  focusedField === 'email' ? 'text-blue-400' : 'text-blue-200'
                }`}
                whileHover={{ x: 5 }}
              >
                Email
              </motion.label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-blue-400/5 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400/30 transition-all relative z-10"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: focusedField === 'email' ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <motion.label 
                htmlFor="message" 
                className={`block text-sm font-medium transition-colors ${
                  focusedField === 'message' ? 'text-blue-400' : 'text-blue-200'
                }`}
                whileHover={{ x: 5 }}
              >
                Message
              </motion.label>
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-blue-400/5 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400/30 transition-all resize-none relative z-10"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: focusedField === 'message' ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400/80 to-purple-500/80 text-white font-medium group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence>
                {!isSubmitted ? (
                  <motion.span
                    key="submit"
                    initial={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="relative z-10 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="success"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle2 size={18} />
                    <span>Message Sent!</span>
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-blue-400/80"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;