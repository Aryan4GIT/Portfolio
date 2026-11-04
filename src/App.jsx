import { useState } from "react"
import { MotionConfig } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ProjectDialog from "./components/ProjectDialog"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [opened, setOpened] = useState(null)

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero onOpen={setOpened} />
        <About />
        <Experience />
        <Projects onOpen={setOpened} />
        <Skills onOpen={setOpened} />
        <Contact />
      </main>
      <Footer />
      <ProjectDialog project={opened} onClose={() => setOpened(null)} />
    </MotionConfig>
  )
}
