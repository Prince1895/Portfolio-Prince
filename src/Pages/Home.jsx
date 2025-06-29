import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsMarquee from "../components/SkillsMarquee";
import ProjectsSection from "../components/ProjectsSection";
import Education from "../components/Education";
import Leetcode from "../components/Leetcode";
import Contact from "../components/contact";
import PageFooter from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <ProjectsSection />
      <Education />
      <Leetcode />
      <Contact />
      <PageFooter />
    </>
  );
};

export default Home;
