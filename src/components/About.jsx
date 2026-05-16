import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className="relative pt-16 md:pt-24 pb-16 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-teal-500/10 blur-[120px] rounded-full"></div>

      {/* CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="z-10"
        >

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-teal-500">me</span>
          </h2>

          {/* TEXT */}
          <p
            className="leading-relaxed mb-4"
            style={{
              color: darkMode ? "#d1d5db" : "#475569",
            }}
          >
            I help businesses build modern, high-performing websites and Shopify stores that not only look great but also drive real results and growth.
          </p>

          <p
            className="leading-relaxed mb-6"
            style={{
              color: darkMode ? "#d1d5db" : "#475569",
            }}
          >
            I focus on delivering clean, responsive, and user-friendly solutions tailored to each client’s needs. From idea to deployment, I ensure smooth communication, timely delivery, and strong attention to detail, aiming to exceed expectations with every project.
          </p>

          {/* STATS */}
          <div
            className="mt-8 grid grid-cols-3 gap-3 pt-6"
            style={{
              borderTop: darkMode
                ? "1px solid #374151"
                : "1px solid #e2e8f0",
            }}
          >

            {/* CARD */}
            <div
              className="rounded-xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <h3 className="text-2xl font-bold">
                04
              </h3>

              <p
                className="text-[11px] mt-1 leading-tight"
                style={{
                  color: darkMode ? "#9ca3af" : "#64748b",
                }}
              >
                Years of Experience
              </p>
            </div>

            {/* CARD */}
            <div
              className="rounded-xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <h3 className="text-2xl font-bold">
                8+
              </h3>

              <p
                className="text-[11px] mt-1 leading-tight"
                style={{
                  color: darkMode ? "#9ca3af" : "#64748b",
                }}
              >
                Happy Clients
              </p>
            </div>

            {/* CARD */}
            <div
              className="rounded-xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <h3 className="text-2xl font-bold">
                15+
              </h3>

              <p
                className="text-[11px] mt-1 leading-tight"
                style={{
                  color: darkMode ? "#9ca3af" : "#64748b",
                }}
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
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={aboutImg}
            alt="About Illustration"
            className="w-[320px] sm:w-[420px] md:w-[580px] lg:w-[650px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}