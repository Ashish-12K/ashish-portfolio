import { motion } from "framer-motion";
import { services } from "../data/projects";

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className="pt-16 pb-24"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          What I <span className="text-teal-500">Do</span>
        </motion.h2>

        {/* Description */}
        <p
          className="max-w-2xl mb-16"
          style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
        >
          Focused on building modern, scalable and performance-driven web applications.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: darkMode ? "#243041" : "#ffffff",
                  boxShadow: darkMode
                    ? "0 10px 30px rgba(20,184,166,0.08)"
                    : "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={32}
                    className="text-teal-500 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{ color: darkMode ? "#d1d5db" : "#475569" }}
                >
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}