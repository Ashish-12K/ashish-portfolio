import { motion } from "framer-motion";
import { services } from "../data/projects";

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className="relative py-10 md:py-12 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      {/* Glow */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[260px] h-[260px] bg-teal-500/10 blur-[120px] rounded-full"></div>

      {/* CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          What I <span className="text-teal-500">Do</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <p
          className="max-w-2xl mb-10 text-sm leading-relaxed"
          style={{
            color: darkMode ? "#9ca3af" : "#64748b",
          }}
        >
          Focused on building high-converting websites and Shopify stores that help businesses grow and increase sales.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
                className="group rounded-xl p-4 sm:p-5 border backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
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
                <div className="mb-3">
                  <Icon
                    size={24}
                    className="text-teal-500 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{
                    color: darkMode
                      ? "#d1d5db"
                      : "#475569",
                  }}
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