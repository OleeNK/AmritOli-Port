"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, MessageSquare, Brain } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <GraduationCap size={24} />, text: "Education" },
    { icon: <Users size={24} />, text: "Leadership" },
    { icon: <MessageSquare size={24} />, text: "Communication" },
    { icon: <Brain size={24} />, text: "Problem Solving" },
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="premium-card p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Education</h3>
            <p className="text-blue-200">
              Currently pursuing a Bachelor in Computer Application (BCA-IT) at
              Purbanchal University, where I&apos;m developing a strong foundation in
              computer science and information technology.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="premium-card flex items-center space-x-2 p-4 rounded-lg"
                >
                  <span className="text-blue-400">{skill.icon}</span>
                  <span className="text-blue-200">{skill.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 premium-card p-8 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Bio</h3>
          <p className="text-blue-200">
            I am a passionate technology enthusiast with a strong foundation in
            computer science and practical experience in various IT roles. My
            journey in tech has been marked by continuous learning and hands-on
            experience in different aspects of software development and IT
            operations.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;