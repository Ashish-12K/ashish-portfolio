import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress
} from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: FaGitAlt }
];

export default function Skills() {
  return (
    <section className="py-5 bg-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16"
        >
          Technical <span className="text-teal-500">Skills</span>
        </motion.h2>

        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group cursor-default"
              >
                <Icon
                  size={28}
                  className="text-teal-500 group-hover:scale-110 transition"
                />
                <span className="text-gray-300 group-hover:text-white transition">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}