import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
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
    <section id="projects" className="py-12 bg-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-teal-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#243041] rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-3 hover:border-emerald-500/40 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {work.title}
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
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

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}