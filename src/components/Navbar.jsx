import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ darkMode, setDarkMode }) {
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
          <a href="#home" className="hover:text-teal-500 transition">Home</a>
          <a href="#services" className="hover:text-teal-500 transition">Services</a>
          <a href="#projects" className="hover:text-teal-500 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Fiverr */}
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