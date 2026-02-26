import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-[#18212f]/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Ashish<span className="text-teal-500">.</span>
        </h1>

        <div className="hidden md:flex gap-10 text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          className="bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded-lg transition"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}