import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.png";

export default function About() {
  return (
    <section className="relative pt-20 pb-16 bg-[#1f2937] overflow-hidden">

      {/* Vertical Divider */}
      {/* <div className="hidden md:block absolute left-[45%] top-0 h-full w-px bg-gray-700/40"></div> */}

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[40%_60%] items-center gap-8">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-100">
            About <span className="text-teal-500">me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I build modern, scalable web applications with a strong emphasis on 
            performance and clean architecture. I approach development with a 
            problem-solving mindset and a focus on long-term maintainability.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I continuously refine my technical skills through hands-on projects 
            and algorithmic challenges, striving to grow into a well-rounded 
            software engineer.
          </p>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-700/40 pt-10">

            <div>
              <h3 className="text-4xl font-bold text-gray-100">02</h3>
              <p className="text-gray-400 text-sm mt-2">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-100">5+</h3>
              <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-100">12+</h3>
              <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
            </div>

          </div>

        </motion.div>

        
          

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Illustration"
            className="w-full max-w-none"
          />
        </motion.div>

      </div>
    </section>
  );
}