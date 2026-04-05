import { motion } from "framer-motion";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-20 h-10 rounded-full overflow-hidden cursor-pointer"
    >
      {/* Background */}
      <motion.div
        animate={{
          background: darkMode
            ? "linear-gradient(to right, #0f172a, #020617)"
            : "linear-gradient(to right, #60a5fa, #3b82f6)",
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      />

      {/* 🌙 Stars */}
      {darkMode && (
        <>
          <motion.span
            className="absolute w-1 h-1 bg-white rounded-full top-2 left-4"
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            className="absolute w-1 h-1 bg-white rounded-full top-5 left-7"
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.span
            className="absolute w-1 h-1 bg-white rounded-full top-3 left-10"
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </>
      )}

      {/* ☁️ Clouds */}
      {!darkMode && (
        <>
          <motion.img
            src="/cloud.png"
            alt="cloud"
            className="absolute w-10 opacity-70 blur-[0.3px]"
            style={{ top: "30%", left: "30%" }}
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.img
            src="/cloud.png"
            alt="cloud"
            className="absolute w-8 opacity-50 blur-[0.5px]"
            style={{ top: "55%", left: "55%" }}
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </>
      )}

      {/* ☀️🌙 Toggle Circle */}
      <motion.div
        className="absolute top-1 w-8 h-8 rounded-full bg-black shadow-md flex items-center justify-center"
        animate={{ x: darkMode ? 44 : 4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {darkMode ? (
          /* 🌙 REAL Moon Image */
          <motion.img
            src="/moon.png"
            alt="moon"
            className="w-5 h-5 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : (
          /* ☀️ Sun */
          <motion.div
            className="w-8 h-8 bg-yellow-300 rounded-full shadow-[0_0_10px_rgba(255,204,0,0.7)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        )}
      </motion.div>
    </button>
  );
}