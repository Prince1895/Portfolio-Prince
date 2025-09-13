import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import ProjectsSection from "../components/ProjectsSection";
import Education from "../components/Education";
import Leetcode from "../components/Leetcode";
import Contact from "../components/contact";
import PageFooter from "../components/Footer";
import { Meteors } from "@/components/magicui/meteors";

const Home = () => {
  return (
    <>
<div className="relative w-full">
 


  <div className="relative z-10">
    <Navbar />
    <Hero />
    <SkillsMarquee />
    <ProjectsSection />
    <Education />
    <Leetcode />
    <Contact />
    <PageFooter />
  </div>
</div>


      
    </>
  );
};

export default Home;
