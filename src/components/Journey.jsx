import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2021",
    title: "Started My Development Journey",
    desc: "Began learning web development with HTML, CSS, and JavaScript, building a strong foundation.",
  },
  {
    year: "2022",
    title: "Frontend Development",
    desc: "Developed responsive and modern user interfaces using React, focusing on clean design and usability.",
  },
  {
    year: "2023",
    title: "Real-World Projects",
    desc: "Worked on practical projects, improving problem-solving skills and understanding client requirements.",
  },
    {
    year: "2025",
    title: "Advanced Development & Growth",
    desc: "Enhancing full-stack skills with Node.js and Firebase while focusing on performance and scalability.",
  },
  {
    year: "2025",
    title: "Freelance & Client Projects",
    desc: "Successfully delivered projects, focusing on quality, performance, and client satisfaction.",
    },
    {
    year: "Now",
    title: "Growing as a Developer",
    desc: "Expanding skills in full-stack development and actively seeking new opportunities.",
    }
];

export default function Journey({ darkMode }) {
  return (
    <section
      id="journey"
      className="py-20"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 relative"
        >
          My <span className="text-teal-500">Journey</span>
           <span className="absolute left-1/2 -bottom-2 w-26 h-[3px] bg-teal-500 transform -translate-x-1/2 rounded"></span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-teal-500/30 transform -translate-x-1/2"></div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 md:mb-12 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[42%] md:w-[45%] p-3 md:p-5 rounded-xl shadow-md"
                style={{
                  backgroundColor: darkMode ? "#243041" : "#ffffff",
                }}
              >
                <h3 className="text-xs md:text-sm text-teal-500 font-semibold mb-1">
                  {item.year}
                </h3>

                <h4 className="text-sm md:text-lg font-bold mb-1 md:mb-2">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 md:mt-5 w-2 h-2 md:w-4 md:h-4 bg-teal-500 rounded-full border-2 md:border-4 border-white dark:border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}