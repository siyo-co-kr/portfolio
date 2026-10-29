import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import { isVisible } from '../data/nav'

export default function Home() {
  return (
    <>
      <Hero />
      {isVisible.about && <About />}
      {isVisible.skills && <Skills />}
      {isVisible.projects && <Projects />}
      {isVisible.experience && <Experience />}
      {isVisible.contact && <Contact />}
    </>
  )
}
