// src/components/About.jsx
import { FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-6 md:px-12 py-16 watermark relative">
      {/* Heading row */}
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">About Me</h2>
        <div className="text-orange-500 font-semibold text-xl md:text-2xl mt-2">( 01 )</div>
      </div>

      <hr className="border-gray-300 mb-10" />

      {/* Main grid: left graphic, right content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: overlapping circle graphic (SVG) */}
        <div className="flex justify-center md:justify-start">
          <svg
            viewBox="0 0 600 600"
            className="w-72 h-72 md:w-[420px] md:h-[420px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff6b2d" />
                <stop offset="100%" stopColor="#ffd9c7" />
              </linearGradient>
            </defs>

            {/* top circle with gradient */}
            <circle cx="240" cy="180" r="180" fill="url(#g1)" />

            {/* bottom black circle partly overlapped (use a clip so it looks like screenshot) */}
            <circle cx="300" cy="390" r="150" fill="#0b0b0b" />
            {/* optional 'cut' to show semicircle similar to screenshot */}
            <rect x="85" y="300" width="430" height="120" fill="rgba(255,255,255,0.0)" />
          </svg>
        </div>

        {/* Right: paragraph + stats */}
        <div>
          <p className="text-gray-600 leading-relaxed md:leading-loose text-lg md:text-l max-w-2xl">
            “I’m a web developer who enjoys building clean, modern and fast websites. I focus on creating designs that feel simple, intuitive and comfortable for users. I like solving problems, learning new things and improving everyday. My goal is to create digital experiences that help people and make their work easier.” 
          </p>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold">02</div>
              <div className="text-sm text-gray-600 mt-2">Years of experience</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold">5+</div>
              <div className="text-sm text-gray-600 mt-2">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold">12+</div>
              <div className="text-sm text-gray-600 mt-2">Project Completed</div>
            </div>
          </div>

          {/* thin divider */}
          <hr className="border-gray-200 my-8" />

          {/* Language pills */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 text-gray-700">
              <span className="p-2 bg-orange-100 rounded-full text-orange-500">
                <FaGlobe />
              </span>
              <span className="font-medium">Language</span>
            </div>

            <div className="flex gap-3 ml-2">
              <button className="px-5 py-2 rounded-full bg-white shadow-sm border">English</button>
              <button className="px-5 py-2 rounded-full bg-white shadow-sm border">Hindi</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
