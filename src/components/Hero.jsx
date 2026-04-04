import { motion } from "framer-motion";
import profile2 from "../assets/profile2.png";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      {/* Glow background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm uppercase tracking-widest text-teal-500"
          >
            Available for freelance
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            I build modern <br />
            <span className="text-teal-500">
              high-converting websites
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mb-8"
            style={{ color: darkMode ? "#9ca3af" : "#64748b" }}
          >
            Helping businesses grow with fast, scalable and beautifully designed web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg text-white font-medium shadow-md shadow-teal-500/20"
            >
              View Work
            </a>

            <a
              href="https://wa.me/917992218094"
              className="px-6 py-3 rounded-lg border"
              style={{
                borderColor: darkMode ? "#4b5563" : "#cbd5e1",
              }}
            >
              Hire Me
            </a>
          </motion.div>

        </div>



        {/* RIGHT */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="flex justify-center relative"
>
  <div className="relative flex items-end justify-center">

    {/* CURVED BACKGROUND (THIS IS THE MAGIC) */}
    <div
      className="absolute bottom-0 w-[300px] md:w-[420px] h-[360px] md:h-[500px]"
      style={{
       background: "linear-gradient(135deg, #2dd4bf, #0f766e)",
        borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
      }}
    ></div>

    {/* IMAGE */}
    <img
      src={profile2}
      alt="Ashish"
      className="relative z-10 w-[260px] md:w-[320px]"
    />

  </div>
</motion.div>

      </div>
    </section>
  );
}