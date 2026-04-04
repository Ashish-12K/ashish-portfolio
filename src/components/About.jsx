import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";

export default function About({ darkMode }) {
  return (
    <section
      className="relative pt-20 pb-16 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[40%_60%] items-center gap-8">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-teal-500">me</span>
          </h2>

          <p
            className="leading-relaxed mb-4"
            style={{ color: darkMode ? "#d1d5db" : "#475569" }}
          >
            I build modern, scalable web applications with a strong emphasis on 
            performance and clean architecture. I approach development with a 
            problem-solving mindset and a focus on long-term maintainability.
          </p>

          <p
            className="leading-relaxed mb-6"
            style={{ color: darkMode ? "#d1d5db" : "#475569" }}
          >
            I continuously refine my technical skills through hands-on projects 
            and algorithmic challenges, striving to grow into a well-rounded 
            software engineer.
          </p>

          {/* Stats */}
          <div
            className="mt-12 grid grid-cols-3 gap-8 pt-10"
            style={{
              borderTop: darkMode
                ? "1px solid #374151"
                : "1px solid #cbd5e1",
            }}
          >
            <div>
              <h3 className="text-4xl font-bold">
                02
              </h3>
              <p
                className="text-sm mt-2"
                style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
              >
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                5+
              </h3>
              <p
                className="text-sm mt-2"
                style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
              >
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                12+
              </h3>
              <p
                className="text-sm mt-2"
                style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
              >
                Projects Completed
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Illustration"
            className="w-full max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}