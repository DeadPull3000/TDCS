import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'
import Hero from './components/sections/Hero'
import MarqueeSection from './components/sections/MarqueeSection'
import About from './components/sections/About'

import MakerspaceSection from './components/sections/MakerspaceSection'
import Timeline from './components/sections/Timeline'
import RonnieGallery from './components/sections/RonnieGallery'
import Resources from './components/sections/Resources'
import Instructors from './components/sections/Instructors'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Hero />
        <MarqueeSection />
        <Resources />
        <About />
        <Timeline />
        <RonnieGallery />
        <Instructors />
        <MakerspaceSection />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
