import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "home",
    "services",
    "skills",
    "projects",
    "contact",
  ];

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative md:fixed top-1.5 md:left-1/2 md:-translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto"
      >
        <div
          className="rounded-[28px] border shadow-xl backdrop-blur-xl px-6 lg:px-8 py-4 flex justify-between items-center"
          style={{
            backgroundColor: darkMode
              ? "rgba(15,23,42,0.75)"
              : "rgba(255,255,255,0.75)",

            borderColor: darkMode
              ? "rgba(255,255,255,0.08)"
              : "rgba(226,232,240,0.8)",

            boxShadow: darkMode
              ? "0 10px 40px rgba(0,0,0,0.35)"
              : "0 10px 40px rgba(15,23,42,0.08)",
          }}
        >
          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-tight">
            Ashish
            <span className="text-teal-500">.</span>
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === link
                    ? "text-teal-500"
                    : darkMode
                    ? "text-slate-300 hover:text-teal-400"
                    : "text-slate-600 hover:text-teal-500"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {activeSection === link && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-teal-500 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            {/* CTA */}
            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-3 rounded-xl font-medium shadow-lg shadow-teal-500/20 hover:scale-105 transition-all duration-300"
            >
              Let’s Talk

              <FiArrowUpRight size={18} />
            </a>

            {/* MOBILE MENU */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE SIDEBAR */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex">

          {/* OVERLAY */}
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[280px] h-full p-6 border-l"
            style={{
              backgroundColor: darkMode
                ? "#0f172a"
                : "#ffffff",

              borderColor: darkMode
                ? "#1e293b"
                : "#e2e8f0",
            }}
          >
            {/* TOP */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold">
                Menu
              </h2>

              <button
                className="text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className={`capitalize text-lg font-medium transition ${
                    activeSection === link
                      ? "text-teal-500"
                      : darkMode
                      ? "text-slate-300 hover:text-teal-400"
                      : "text-slate-700 hover:text-teal-500"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium"
            >
              Let’s Talk

              <FiArrowUpRight />
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
}