import { motion } from "framer-motion";
import { services } from "../data/projects";

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className="pt-16 pb-16"
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
          className="text-5xl font-bold mb-4"
        >
          What I <span className="text-teal-500">Do</span>
        </motion.h2>

        {/* Description */}
        <p
          className="max-w-2xl mb-10 text-sm"
          style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
        >
          Focused on building high-converting websites and Shopify stores that help businesses grow and increase sales.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group p-4 sm:p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: darkMode ? "#243041" : "#ffffff",
                  boxShadow: darkMode
                    ? "0 8px 20px rgba(20,184,166,0.05)"
                    : "0 8px 20px rgba(0,0,0,0.04)",
                }}
              >
                {/* Icon */}
                <div className="mb-3">
                  <Icon
                    size={24}
                    className="text-teal-500 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm leading-snug"
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