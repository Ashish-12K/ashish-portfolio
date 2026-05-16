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
      {/* Optimized Glow */}
      <div className="absolute bottom-[-80px] left-[-80px] w-[220px] h-[220px] bg-teal-500/10 blur-[70px] rounded-full pointer-events-none"></div>

      {/* CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-teal-500">Do</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="max-w-2xl mb-10 text-sm leading-relaxed"
            style={{
              color: darkMode ? "#9ca3af" : "#64748b",
            }}
          >
            Focused on building high-converting websites and Shopify stores that help businesses grow and increase sales.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group rounded-xl p-4 sm:p-5 border
                  transition-transform duration-200
                  hover:-translate-y-1
                  will-change-transform
                "
                style={{
                  borderColor: darkMode
                    ? "#374151"
                    : "#e2e8f0",

                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.75)",

                  boxShadow:
                    "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >

                {/* ICON */}
                <div className="mb-3">
                  <Icon
                    size={24}
                    className="
                      text-teal-500
                      group-hover:scale-105
                      transition-transform duration-200
                      shrink-0
                    "
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}