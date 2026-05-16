import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiShopify,
  SiFramer,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages & Core Technologies",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Framer Motion", icon: SiFramer, color: "#e535ab" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },

  {
    title: "UI & Design",
    skills: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38bdf8",
      },

      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952b3",
      },

      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },

  {
    title: "Tools & Workflows",
    skills: [
      { name: "Shopify", icon: SiShopify, color: "#7ab55c" },
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#000000" },
      { name: "VS Code", icon: FaCode, color: "#007acc" },
    ],
  },
];

export default function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-14 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] bg-teal-500/10 blur-[120px] rounded-full"></div>

      {/* CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12"
        >
          My Technical
          <span className="text-teal-500">
            {" "}Expertise
          </span>
        </motion.h2>

        {/* CATEGORIES */}
        <div className="space-y-10">
          {skillCategories.map((category, i) => (
            <div key={i}>

              {/* CATEGORY TITLE */}
              <h3 className="text-base font-semibold mb-4 text-teal-500 tracking-wide">
                {category.title}
              </h3>

              {/* SKILLS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">

                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                      className="flex flex-col items-center justify-center rounded-xl p-4 hover:-translate-y-1 transition-all duration-300 border backdrop-blur-md"
                      style={{
                        borderColor: darkMode
                          ? "#374151"
                          : "#e2e8f0",

                        backgroundColor: darkMode
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.55)",

                        boxShadow: darkMode
                          ? "0 6px 15px rgba(20,184,166,0.04)"
                          : "0 6px 15px rgba(0,0,0,0.03)",
                      }}
                    >
                      {/* ICON */}
                      <Icon
                        size={24}
                        color={skill.color}
                        className="mb-2"
                      />

                      {/* NAME */}
                      <span
                        className="text-xs sm:text-sm text-center leading-tight"
                        style={{
                          color: darkMode
                            ? "#d1d5db"
                            : "#475569",
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}