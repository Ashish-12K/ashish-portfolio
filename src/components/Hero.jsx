import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 py-16">
      {/* Left - text */}
      <motion.div initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}} 
        className="z-10">
        <div className="inline-flex items-center gap-3 mb-4 mt-3">
          <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">A</div>
          {/* <button className="border-2 border-orange-400 rounded-full px-6 py-3">Download PDF Resume</button> */}
        </div>

        <h1 className="text-5xl md:text-5xl font-semibold leading-tight">
          I'm Ashish<br/> Web Developer
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl">
          I build fast, modern websites for small businesses — landing pages, multi-page sites and e-commerce with payment integration. Deliver in 2–5 days.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-full">Hire me — ₹2,999</a>
          <a href="#works" className="px-6 py-3 border rounded-full">See works</a>
        </div>
      </motion.div>

      {/* Right - image */}
      <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} 
        className="rounded-2xl overflow-hidden shadow-lg">
        <img src='/boy.webp' alt="portrait" className="w-full h-[420px] md:h-[520px] object-cover" />
      </motion.div>
    </section>
  )
}
