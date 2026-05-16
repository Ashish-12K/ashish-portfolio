import { motion } from "framer-motion";
import profile2 from "../assets/pr22.png";
import Bubble from "./Bubble";

import {
  Rocket,
  Star,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Rocket,
    title: "15+",
    text: "Projects Completed",
    color: "text-teal-500",
  },
  {
    icon: Star,
    title: "Fast",
    text: "On-Time Delivery",
    color: "text-yellow-500",
  },
  {
    icon: ShieldCheck,
    title: "100%",
    text: "Client Satisfaction",
    color: "text-cyan-500",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "After Delivery",
    color: "text-teal-500",
  },
];

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
      {/* Optimized Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-teal-500/10 blur-[70px] rounded-full pointer-events-none"></div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1350px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="z-10"
        >

          {/* TAG */}
          <div
            className="
              inline-flex items-center gap-2
              mb-4 px-4 py-2 rounded-full border
            "
            style={{
              borderColor: "rgba(20,184,166,0.2)",
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.03)"
                : "rgba(255,255,255,0.65)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-teal-500"></div>

            <span className="text-[11px] uppercase tracking-[3px] text-teal-500 font-medium">
              Available for freelance
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-[1.08]">
            I build modern <br />

            <span className="text-teal-500">
              high-converting
            </span>

            <br />

            websites
          </h1>

          {/* SUBTEXT */}
          <p
            className="max-w-md mt-4 text-sm md:text-base leading-relaxed"
            style={{
              color: darkMode ? "#9ca3af" : "#64748b",
            }}
          >
            Helping businesses grow with fast, scalable and beautifully designed web applications.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 flex-wrap">

            <a
              href="#projects"
              className="
                bg-gradient-to-r from-teal-500 to-cyan-500
                hover:scale-105
                transition-transform duration-200
                px-6 py-3 rounded-2xl
                text-white font-semibold text-sm
                will-change-transform
              "
            >
              View Projects
            </a>

            <a
              href="https://wa.me/917992218094"
              className="
                px-6 py-3 rounded-2xl border
                font-semibold text-sm
                transition-colors duration-200
              "
              style={{
                borderColor: darkMode ? "#4b5563" : "#cbd5e1",
                backgroundColor: darkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              Let's Talk
            </a>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-2xl p-3 border
                    transition-transform duration-200
                    hover:-translate-y-1
                    will-change-transform
                  "
                  style={{
                    borderColor: darkMode ? "#374151" : "#e2e8f0",

                    backgroundColor: darkMode
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.75)",

                    boxShadow:
                      "0 2px 6px rgba(0,0,0,0.04)",
                  }}
                >
                  <Icon
                    className={`${item.color} mb-2`}
                    size={18}
                  />

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative flex items-center justify-center">

            {/* IMAGE */}
            <img
              src={profile2}
              alt="Ashish"
              loading="eager"
              decoding="async"
              className="
                relative z-10
                w-[300px]
                sm:w-[400px]
                md:w-[560px]
                lg:w-[620px]
                object-contain
                md:-mt-2
                select-none
              "
            />
          </div>
        </motion.div>
      </div>

      {/* FLOATING BUBBLES */}
      <div className="absolute inset-0 pointer-events-none">
        <Bubble delay={0} size={20} left={10} top="70%" />
        <Bubble delay={1} size={30} left={30} top="75%" />
        <Bubble delay={2} size={25} left={50} top="72%" />
        <Bubble delay={0.5} size={18} left={70} top="78%" />
        <Bubble delay={1.5} size={35} left={85} top="74%" />
      </div>
    </section>
  );
}