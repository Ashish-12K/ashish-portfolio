import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["home", "services", "skills", "projects", "contact"];

  // 🔥 Scroll tracking (for underline)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-800"
        style={{
          backgroundColor: darkMode
            ? "rgba(24,33,47,0.8)"
            : "rgba(255,255,255,0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold">
            Ashish<span className="text-teal-500">.</span>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-gray-500">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`relative transition ${
                  activeSection === link
                    ? "text-teal-500"
                    : "hover:text-teal-500"
                }`}
              >
                {/* Capitalize text */}
                {link.charAt(0).toUpperCase() + link.slice(1)}

                {/* 🔥 Underline */}
                {activeSection === link && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500 rounded"></span>
                )}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-lg"
            >
              Fiverr
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            className="w-64 h-full p-6"
            style={{
              backgroundColor: darkMode ? "#1f2937" : "#ffffff",
            }}
          >
            {/* Close */}
            <button
              className="mb-6 text-xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className={`capitalize transition ${
                    activeSection === link
                      ? "text-teal-500"
                      : "hover:text-teal-500"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Fiverr */}
            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              className="mt-8 inline-block bg-teal-600 text-white px-5 py-2 rounded-lg"
            >
              Fiverr
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
}