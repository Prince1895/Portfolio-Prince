import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import BentoGrid from "../components/BentoGrid";
import TagCloud3D from "../components/TagCloud3D";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Github from "../components/Github";
import MoreToExplore from "../components/MoreToExplore";
import Contact from "../components/contact";
import PageFooter from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <AboutSection />
          <BentoGrid />
          <TagCloud3D />
          <ProjectsSection />
          <ExperienceTimeline />
          <Github />
          <MoreToExplore />
          <Contact />
          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
