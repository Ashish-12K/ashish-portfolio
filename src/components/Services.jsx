import { motion } from "framer-motion";
import {
  Code,
  Server,
  LayoutDashboard,
  Database,
  Zap,
  Brain
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Building responsive and scalable user interfaces using React and modern component architecture."
  },
  {
    icon: Server,
    title: "Backend API Development",
    desc: "Creating RESTful APIs with Node.js and Express focusing on structure and scalability."
  },
  {
    icon: LayoutDashboard,
    title: "Full Stack Applications",
    desc: "Integrating frontend, backend, and database into complete production-ready applications."
  },
  {
    icon: Database,
    title: "Firebase & Database",
    desc: "Implementing authentication, real-time data, and secure database systems."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Improving load time, optimizing rendering, and enhancing overall app performance."
  },
  {
    icon: Brain,
    title: "Data Structures & Algorithms",
    desc: "Strong problem-solving foundation with focus on scalable thinking and logic building."
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-16 pb-24 bg-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 text-gray-100"
        >
          What I <span className="text-teal-500">Do</span>
        </motion.h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mb-16">
          Focused on building modern, scalable and performance-driven web applications.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-[#243041] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={32}
                    className="text-teal-500 group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}