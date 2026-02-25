import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="max-w-full mx-auto">
      <Hero />
      <About />
      <Works />
      <Contact />
      {/* <footer className="py-8 text-center text-gray-500">© {new Date().getFullYear()} Ash — Web Development</footer> */}
    </div>
  )
}
