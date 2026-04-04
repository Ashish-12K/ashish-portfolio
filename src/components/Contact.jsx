import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className="pt-20 pb-12"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 relative inline-block"
        >
          Contact <span className="text-teal-500">Me</span>

          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-teal-500"></span>
        </motion.h2>

        {/* Contact Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-lg"
        >
          {/* Email */}
          <div>
            <span style={{ color: darkMode ? "#9ca3af" : "#64748b" }}>
              Email:
            </span>{" "}
            <a
              href="mailto:ashish7840k@gmail.com"
              className="hover:text-teal-400 transition"
            >
              ashish7840k@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <span style={{ color: darkMode ? "#9ca3af" : "#64748b" }}>
              WhatsApp:
            </span>
            <a
              href="https://wa.me/917992218094"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full transition shadow-md shadow-teal-500/20 text-white"
            >
              Message
            </a>
          </div>

          {/* Phone */}
          <div>
            <span style={{ color: darkMode ? "#9ca3af" : "#64748b" }}>
              Phone:
            </span>{" "}
            <a
              href="tel:+917992218094"
              className="hover:text-teal-400 transition"
            >
              +91 7992218094
            </a>
          </div>

          {/* Fiverr */}
          <div>
            <span style={{ color: darkMode ? "#9ca3af" : "#64748b" }}>
              Fiverr:
            </span>{" "}
            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              View Profile
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div
          className="text-center mt-16 text-sm"
          style={{ color: darkMode ? "#6b7280" : "#94a3b8" }}
        >
          © {new Date().getFullYear()} Ash — Web Development
        </div>

      </div>
    </section>
  );
}