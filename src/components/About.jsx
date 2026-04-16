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
           I help businesses build modern, high-performing websites and Shopify stores that not only look great but also drive real results and growth.
          </p>

          <p
            className="leading-relaxed mb-6"
            style={{ color: darkMode ? "#d1d5db" : "#475569" }}
          >
            I focus on delivering clean, responsive, and user-friendly solutions tailored to each client’s needs. From idea to deployment, I ensure smooth communication, timely delivery, and strong attention to detail, aiming to exceed expectations with every project.
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
                04
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
                8+
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
                15+
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