import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-12 bg-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-5xl font-bold mb-6 text-gray-100 relative inline-block"
>
  Contact <span className="text-teal-500">Me</span>

  {/* Underline */}
  <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-teal-500"></span>
</motion.h2>

        {/* Contact Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-lg"
        >
          {/* Email */}
          <div>
            <span className="text-gray-400">Email:</span>{" "}
            <a
              href="mailto:ashish7840k@gmail.com"
              className="text-gray-100 hover:text-teal-400 transition"
            >
              ashish7840k@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">WhatsApp:</span>
            <a
              href="https://wa.me/917992218094"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full transition shadow-lg shadow-teal-600/20"
            >
              Message
            </a>
          </div>

          {/* Phone */}
          <div>
            <span className="text-gray-400">Phone:</span>{" "}
            <a
              href="tel:+917992218094"
              className="text-gray-100 hover:text-teal-400 transition"
            >
              +91 7992218094
            </a>
          </div>

          {/* Fiverr */}
          <div>
            <span className="text-gray-400">Fiverr:</span>{" "}
            <a
              href="http://www.fiverr.com/s/o8lPqVX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-teal-400 transition"
            >
              View Profile
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-gray-500 mt-16 text-sm">
          © {new Date().getFullYear()} Ash — Web Development
        </div>

      </div>
    </section>
  );
}