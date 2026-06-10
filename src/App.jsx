import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollProgress } from "./components/magicui/scroll-progress";
import InteractiveBackground from "./components/InteractiveBackground";

// Import Pages
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Toaster />
      <ScrollProgress className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      <InteractiveBackground />
      
      {/* Floating Resume Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://drive.google.com/file/d/16VAYIjaeAnD1UditSsEg-iK2q7RsY_06/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105"
        >
          📄 Resume
        </a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
