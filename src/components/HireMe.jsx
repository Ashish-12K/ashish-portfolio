import { motion } from "framer-motion";

export default function HireMe({ darkMode }) {
  return (
    <section
      id="contact"
      className="pt-20 pb-5"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f1f5f9",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Build Something{" "}
          <span className="text-teal-500">Great</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-10"
          style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
        >
          I help businesses build fast, modern and conversion-focused websites.
          If you’re looking for a developer who understands both design and performance,
          let’s work together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/917992218094"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg text-white font-medium transition shadow-md shadow-teal-500/20"
          >
            Hire Me
          </a>

          {/* Fiverr */}
          <a
            href="http://www.fiverr.com/s/o8lPqVX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border transition"
            style={{
              borderColor: darkMode ? "#4b5563" : "#cbd5e1",
              color: darkMode ? "#e5e7eb" : "#0f172a",
            }}
          >
            View Fiverr
          </a>
        </motion.div>

      </div>

        
            <div
          className="text-center mt-16 text-sm"
          style={{ color: darkMode ? "#6b7280" : "#94a3b8" }}
        >
          © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
        </div>


    </section>

    

  );
}