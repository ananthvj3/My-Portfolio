import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Testimonials from './section/Testimonials'

const App = () => {
  return (
    <>
    <div className="min-h-screen overflow-x-hidden">
    <Navbar/>

    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </main>

    
    </div>
    </>
  )
}

export default App