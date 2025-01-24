"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Code, User, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Code size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Experience", icon: <Briefcase size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 80; // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            AO
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="premium-card px-6 py-2 flex space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive ? "text-blue-400" : "text-blue-200 hover:text-blue-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-blue-400/10 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="premium-button p-2 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          className={`md:hidden overflow-hidden`}
        >
          <div className="premium-card p-4 mb-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-blue-400/10 text-blue-400"
                    : "text-blue-200 hover:bg-blue-400/5 hover:text-blue-400"
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;