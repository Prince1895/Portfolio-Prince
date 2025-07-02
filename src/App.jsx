import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollProgress } from "./components/magicui/scroll-progress";

// Import Pages
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import { RainbowButton } from "./components/magicui/rainbow-button";

function App() {
  return (
    <Router>
      <Toaster />
      <ScrollProgress className="h-1" />
      <style>
        {`::selection {
          background-color: #000;
          color: #fff;
        }`}
      </style>
        <RainbowButton className="fixed bottom-4 right-4 z-50 flex hover:scale-110">
          <a
            href="/your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
           
          >
            📄 Resume
          </a>
        </RainbowButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
