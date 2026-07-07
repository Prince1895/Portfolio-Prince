import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollProgress } from "./components/magicui/scroll-progress";
import InteractiveBackground from "./components/InteractiveBackground";
import ChatbotWidget from "./components/ChatbotWidget";
import CustomCursor from "./components/CustomCursor";

// Import Pages
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Toaster />
      <CustomCursor />
      <ScrollProgress className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      <InteractiveBackground />
      
      {/* Floating Chatbot Widget */}
      <ChatbotWidget />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
