import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-10xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight text-gray-100"
          >
            Ashish{" "}
            <span className="text-teal-500">
              Kumar
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-400 leading-relaxed mb-8 max-w-lg"
          >
            I build scalable, responsive web applications using React,
            modern JavaScript, and backend APIs. Focused on clean
            architecture, performance, and problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition duration-300 shadow-lg shadow-teal-600/20"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-gray-600 hover:border-teal-500 px-6 py-3 rounded-lg transition duration-300 text-gray-300 hover:text-white"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <div
            className="
              relative
              w-full
              max-w-[420px]
              aspect-[6/5]
              rounded-2xl
              overflow-hidden
              bg-[#243041]
              shadow-[0_0_40px_rgba(20,184,166,0.15)]
            "
          >
            <img
              src={profile}
              alt="Ashish Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}