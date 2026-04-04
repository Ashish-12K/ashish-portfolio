import { motion } from "framer-motion";

export default function Bubble({ delay, size, left }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: -300,
        opacity: [0, 1, 1, 0],
        scale: [1, 1.2, 0.5],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        bottom: 0,
        left: `${left}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(20,184,166,0.2)",
        backdropFilter: "blur(6px)",
      }}
    />
  );
}