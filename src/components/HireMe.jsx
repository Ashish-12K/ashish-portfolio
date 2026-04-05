import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

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


            {/* Premium Social Links */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="flex justify-center gap-6 mt-10"
>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ashish-kumar-67a1b63b7/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
  >
    <div className="p-[2px] rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
      <div
        className="p-3 rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: darkMode
            ? "rgba(36,48,65,0.6)"
            : "rgba(255,255,255,0.6)",
        }}
      >
        <FaLinkedin size={18} className="text-[#0A66C2]" />
      </div>
    </div>
  </a>

  {/* Instagram */}
  <a
  href="https://www.instagram.com/ashishk_092/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group"
>
  <div className="p-0.5 rounded-full bg-linear-to-r from-pink-400 via-pink-500 to-rose-500">
    <div
      className="p-3 rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
      style={{
        backgroundColor: darkMode
          ? "rgba(36,48,65,0.6)"
          : "rgba(255,255,255,0.6)",
      }}
    >
      <FaInstagram size={18} className="text-pink-600" />
    </div>
  </div>
</a>

  {/* Email */}
  <a
    href="mailto:ahish7840k@gmail.com"
    className="relative group"
  >
    <div className="p-0.5 rounded-full bg-linear-to-r from-teal-400 to-green-500">
      <div
        className="p-3 rounded-full backdrop-blur-md transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: darkMode
            ? "rgba(36,48,65,0.6)"
            : "rgba(255,255,255,0.6)",
        }}
      >
        <FaEnvelope size={18} className="text-teal-500" />
      </div>
    </div>
  </a>
</motion.div>




        
            <div
          className="text-center mt-16 text-sm"
          style={{ color: darkMode ? "#6b7280" : "#94a3b8" }}
        >
          © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
        </div>


            





    </section>

    

  );
}