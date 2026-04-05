import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { works } from "../data/works";

export default function Projects({ darkMode }) {
 
  return (
    <section
      id="projects"
      className="py-16"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-6xl mx-auto px-3">

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="text-center mb-16"
>
  <div className="relative inline-block">
    <h2 className="text-4xl font-bold">
      Featured <span className="text-teal-500">Projects</span>
    </h2>

    {/* Underline */}
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-46 h-[3px] bg-teal-500 rounded"></span>
  </div>
</motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3"
              style={{
                backgroundColor: darkMode ? "#243041" : "#ffffff",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #e2e8f0",
                boxShadow: darkMode
                  ? "0 10px 30px rgba(20,184,166,0.08)"
                  : "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image */}
              <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
              <div className="h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              </a>
              {/* Content
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {work.title}
                </h3>

                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{
                    color: darkMode ? "#d1d5db" : "#475569",
                  }}
                >
                  {work.description}
                </p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-400 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}