import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    let current = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // adjust for navbar
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-800"
      style={{
        backgroundColor: darkMode ? "rgba(24,33,47,0.8)" : "rgba(255,255,255,0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Ashish<span className="text-teal-500">.</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-gray-500">

          {/* Home */}
          <a
            href="#home"
            className={`relative transition ${
              activeSection === "home"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            Home
            {activeSection === "home" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500"></span>
            )}
          </a>

          {/* Services */}
          <a
            href="#services"
            className={`relative transition ${
              activeSection === "services"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            Services
            {activeSection === "services" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500"></span>
            )}
          </a>

          {/* Skills */}
          <a
            href="#skills"
            className={`relative transition ${
              activeSection === "skills"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            Skills
            {activeSection === "skills" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500"></span>
            )}
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className={`relative transition ${
              activeSection === "projects"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500"></span>
            )}
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className={`relative transition ${
              activeSection === "contact"
                ? "text-teal-500"
                : "hover:text-teal-500"
            }`}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-500"></span>
            )}
          </a>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <a
            href="http://www.fiverr.com/s/o8lPqVX"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg transition"
          >
            Fiverr
          </a>

        </div>
      </div>
    </motion.nav>
  );
}