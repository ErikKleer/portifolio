import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Contact } from "./components/Contact"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { Testimonials } from "./components/Testimonials"

import './App.css'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
