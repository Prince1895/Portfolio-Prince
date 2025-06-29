import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SkillsMarquee from "./components/SkillsMarquee"
import ProjectsSection from "./components/ProjectsSection"
import { ScrollProgress } from "./components/magicui/scroll-progress"
import Education from "./components/Education"
import Leetcode from "./components/Leetcode"
import Contact from "./components/contact"
import PageFooter from "./components/Footer"

function App() {
  return (
   <>
   <ScrollProgress  className="h-1"/>
   <style>
  {`::selection {
    background-color: #000;
    color: #fff;
  }`}
</style>
   <Navbar/>
   <Hero/>
   <SkillsMarquee/>
   <ProjectsSection/>
   <Education/>
   <Leetcode/>
   <Contact/>
   <PageFooter/>
   </>
  )
}
export default App