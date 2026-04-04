import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ darkMode }) {
  const works = [
    { 
      id:1, 
      title:'Watch Website', 
      img:'/watchImg.png', 
      description:'A responsive product showcase website built with modern UI principles, component reusability and optimized performance.',
      link:'https://watch-site-nu.vercel.app/'
    },
    { 
      id:2, 
      title:'JUD Clothing', 
      img:'/JUDClothing.png', 
      description:'A structured e-commerce interface featuring dynamic routing, scalable layout design and performance optimization.',
      link:'https://clothing-site1-v5yy.vercel.app'
    },
    { 
      id:3, 
      title:'Accessories Site', 
      img:'/accessory.png', 
      description:'Marketplace-inspired UI focusing on reusable components, clean architecture and smooth navigation.',
      link:'https://accessories-site.vercel.app'
    },
    { 
      id:4, 
      title:'Game of Thrones Cards', 
      img:'/GOTImg.png', 
      description:'Interactive character card UI with dynamic rendering and structured component logic.',
      link:'https://your-got-demo.com'
    }
  ];

  return (
    <section
      id="projects"
      className="py-16"
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#f8fafc",
        color: darkMode ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="max-w-6xl mx-auto px-3">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-teal-500">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3"
              style={{
                backgroundColor: darkMode ? "#243041" : "#ffffff",
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #e2e8f0",
                boxShadow: darkMode
                  ? "0 10px 30px rgba(20,184,166,0.08)"
                  : "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image */}
              <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
              >
              <div className="h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              </a>
              {/* Content
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {work.title}
                </h3>

                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{
                    color: darkMode ? "#d1d5db" : "#475569",
                  }}
                >
                  {work.description}
                </p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-400 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}