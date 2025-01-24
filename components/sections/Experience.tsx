"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, GraduationCap, Code, LineChart, Laptop, Database, Layout, Terminal, TestTube } from "lucide-react";

const technicalSkills = {
  languages: [
    { name: "C", level: "Advanced" },
    { name: "C++", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML/CSS", level: "Advanced" },
  ],
  frameworks: [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Basic" },
    { name: "Node.js", level: "Basic" },
  ],
  databases: [
    { name: "MySQL", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
    { name: "PostgreSQL", level: "Basic" },
    { name: "SQL", level: "Basic" },
  ],
  other: [
    { name: "UI/UX Design", level: "Advanced" },
    { name: "Windows Forms", level: "Advanced" },
    { name: "Git", level: "Advanced" },
  ],
};

const projects = [
  {
    title: "KoreaTestWise",
    description: "An interactive MCQ test platform for students with dynamic test generation and real-time assessment",
    icon: <TestTube className="text-blue-400" size={24} />,
    tags: ["React", "MySQL", "UI/UX", "Test Generation"],
    features: [
      "Dynamic MCQ Generation",
      "Real-time Assessment",
      "Student Progress Tracking",
      "Interactive UI"
    ]
  },
  {
    title: "Desktop Application",
    description: "Windows Form application development with C# and .NET framework",
    icon: <Laptop className="text-blue-400" size={24} />,
    tags: ["C#", "Windows Forms", ".NET"],
  },
  {
    title: "Market Management System",
    description: "Web-based application for managing market operations and inventory",
    icon: <LineChart className="text-blue-400" size={24} />,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Company Landing Pages",
    description: "Designed and developed animated landing pages for various businesses",
    icon: <Layout className="text-blue-400" size={24} />,
    tags: ["React", "HTML/CSS", "Animation"],
  },
];

const experiences = [
  {
    title: "Internship Developer",
    company: "Crystal Solution",
    period: "2023",
    description: "Developed the Marketing Management platform and a client-facing webpage",
    icon: <Code className="text-blue-400" size={24} />,
    skills: ["React", "Node.js", "Marketing Platform"],
  },
  {
    title: "Senior Employee",
    company: "AC Bazar Dot Com",
    period: "2022",
    description: "Managed attendance, tax invoices, and purchase orders",
    icon: <LineChart className="text-blue-400" size={24} />,
    skills: ["Management", "Finance", "Operations"],
  },
  {
    title: "Tutor",
    company: "Creative International Academy",
    period: "2021",
    description: "Taught Computer Fundamentals and developed students' skills",
    icon: <GraduationCap className="text-blue-400" size={24} />,
    skills: ["Teaching", "Computer Science", "Mentoring"],
  },
  {
    title: "Intern",
    company: "Nepal Bank Limited",
    period: "2020",
    description: "Assisted in customer handling, data analysis, and account maintenance",
    icon: <Building2 className="text-blue-400" size={24} />,
    skills: ["Banking", "Customer Service", "Data Analysis"],
  },
];

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level?: string }[];
  icon: JSX.Element;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => (
  <motion.div className="premium-card p-6">
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-blue-400/5 text-blue-300 border border-blue-400/20"
        >
          {skill.name} {skill.level && `• ${skill.level}`}
        </span>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        {/* Technical Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory
              title="Programming Languages"
              skills={technicalSkills.languages}
              icon={<Terminal className="text-blue-400" size={24} />}
            />
            <SkillCategory
              title="Frameworks & Libraries"
              skills={technicalSkills.frameworks}
              icon={<Code className="text-blue-400" size={24} />}
            />
            <SkillCategory
              title="Databases"
              skills={technicalSkills.databases}
              icon={<Database className="text-blue-400" size={24} />}
            />
            <SkillCategory
              title="Other Skills"
              skills={technicalSkills.other}
              icon={<Layout className="text-blue-400" size={24} />}
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
            Highlighted projects showcasing my technical abilities
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card p-6 group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-400/10 p-3 rounded-lg group-hover:bg-blue-400/20 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                </div>
                <p className="text-blue-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-400/5 text-blue-300 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <div className="mt-4 pt-4 border-t border-blue-400/10">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-blue-200 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Professional Journey
          </h2>
          <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
            A timeline of my professional experiences and achievements
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card relative overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-400/10 p-3 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                        <p className="text-blue-300">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-400/10 text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-blue-200 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-blue-400/5 text-blue-300 border border-blue-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;