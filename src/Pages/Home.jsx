import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import TagCloud3D from "../components/TagCloud3D";
import ProjectsSection from "../components/ProjectsSection";
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
          <BentoGrid />
          <TagCloud3D />
          <ProjectsSection />
          <MoreToExplore />
          <Contact />
          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default Home;
