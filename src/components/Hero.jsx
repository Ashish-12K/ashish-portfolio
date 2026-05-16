import { motion } from "framer-motion";
import profile2 from "../assets/pr22.png";
import Bubble from "./Bubble";

import {
  Rocket,
  Star,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-10 md:pt-24 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      {/* Glow Background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-teal-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6 items-center">

        {/* LEFT SIDE */}
        <div className="z-10">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-teal-500/20 bg-white/40 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-teal-500"></div>

            <span className="text-[11px] uppercase tracking-[3px] text-teal-500 font-medium">
              Available for freelance
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-[1.08]"
          >
            I build modern <br />

            <span className="text-teal-500">
              high-converting
            </span>

            <br />

            websites
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mt-4 text-sm md:text-base leading-relaxed"
            style={{
              color: darkMode ? "#9ca3af" : "#64748b",
            }}
          >
            Helping businesses grow with fast, scalable and beautifully designed web applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 mt-6 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-teal-500/20 text-sm"
            >
              View Projects
            </a>

            <a
              href="https://wa.me/917992218094"
              className="px-6 py-3 rounded-2xl border backdrop-blur-md font-semibold hover:border-teal-400 transition-all text-sm"
              style={{
                borderColor: darkMode ? "#4b5563" : "#cbd5e1",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.4)",
              }}
            >
              Let's Talk
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >

            {/* CARD 1 */}
            <div
              className="rounded-2xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <Rocket className="text-teal-500 mb-2" size={18} />

              <h3 className="text-lg font-bold">
                15+
              </h3>

              <p className="text-[11px] text-slate-500">
                Projects Completed
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="rounded-2xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <Star className="text-yellow-500 mb-2" size={18} />

              <h3 className="text-lg font-bold">
                Fast
              </h3>

              <p className="text-[11px] text-slate-500">
                On-Time Delivery
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="rounded-2xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <ShieldCheck
                className="text-cyan-500 mb-2"
                size={18}
              />

              <h3 className="text-lg font-bold">
                100%
              </h3>

              <p className="text-[11px] text-slate-500">
                Client Satisfaction
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="rounded-2xl p-3 border backdrop-blur-md"
              style={{
                borderColor: darkMode ? "#374151" : "#e2e8f0",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              <Headphones
                className="text-teal-500 mb-2"
                size={18}
              />

              <h3 className="text-lg font-bold">
                Support
              </h3>

              <p className="text-[11px] text-slate-500">
                After Delivery
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative flex items-center justify-center">

            {/* IMAGE */}
            <img
              src={profile2}
              alt="Ashish"
              className="relative z-10 
              w-[340px] 
              sm:w-[420px] 
              md:w-[620px] 
              lg:w-[680px]
              object-contain 
              md:-mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* FLOATING BUBBLES */}
      <div className="absolute inset-0 pointer-events-none">
        <Bubble delay={0} size={20} left={10} />
        <Bubble delay={1} size={30} left={30} />
        <Bubble delay={2} size={25} left={50} />
        <Bubble delay={0.5} size={18} left={70} />
        <Bubble delay={1.5} size={35} left={85} />
      </div>
    </section>
  );
}