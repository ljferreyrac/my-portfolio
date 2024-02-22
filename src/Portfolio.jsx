import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export const Portfolio = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </main>
  )
}
