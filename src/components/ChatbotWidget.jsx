import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { getPortfolioData } from '../utils/portfolioData';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroData, setHeroData] = useState(() => getPortfolioData().hero);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: heroData.chatbot?.welcome || "Hi! I am Prince's AI assistant. Ask me anything about his skills, projects, education, or contact details!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleUpdate = () => {
      setHeroData(getPortfolioData().hero);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  // Sync initial bot message if it is updated dynamically
  useEffect(() => {
    if (heroData.chatbot?.welcome) {
      setMessages([
        {
          sender: 'bot',
          text: heroData.chatbot.welcome,
        }
      ]);
    }
  }, [heroData.chatbot?.welcome]);

  const suggestions = [
    { label: '💻 Skills', query: 'skills' },
    { label: '🚀 Projects', query: 'projects' },
    { label: '🎓 Education', query: 'education' },
    { label: '✉️ Contact', query: 'contact' },
  ];

  const handleSend = (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    if (!queryText) setInput('');

    // Trigger typing response
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      const cleanInput = textToSend.toLowerCase();

      const chatbot = heroData.chatbot || {};

      if (cleanInput.includes('skill') || cleanInput.includes('tech') || cleanInput.includes('languages') || cleanInput.includes('stack')) {
        botResponse = chatbot.skillsResponse || "Prince is a Software Engineer focused on AI, Backend, Cloud, and Distributed Systems. His tech stack includes React, Node.js, Express, Java, JavaScript, TypeScript, Python, Solidity, PostgreSQL, MongoDB, Redis, ClickHouse, Docker, AWS, and AI integration using Ollama and OpenAI. He has solved 700+ LeetCode problems with a peak rating of 1767.";
      } else if (cleanInput.includes('project') || cleanInput.includes('work') || cleanInput.includes('portfolio')) {
        botResponse = chatbot.projectsResponse || "Prince's flagship systems include:\n\n1. **Flux**: An AWS Cloud Cost Optimization Engine.\n2. **Sentinel Gateway**: A distributed API Gateway with AI threat detection (Ollama) and ClickHouse analytics.\n3. **Carbon Credit Verification System**: An Ethereum smart-contract-based verification platform.\n4. **LevelUp**: A scalable e-learning platform with Razorpay and WebSockets.";
      } else if (cleanInput.includes('education') || cleanInput.includes('college') || cleanInput.includes('study') || cleanInput.includes('school')) {
        botResponse = chatbot.educationResponse || "Prince is pursuing a B.Tech in Computer Science & Engineering (Data Science) at ABES Engineering College (2023–2027), holding an 8.351 CGPA.";
      } else if (cleanInput.includes('contact') || cleanInput.includes('email') || cleanInput.includes('reach') || cleanInput.includes('social') || cleanInput.includes('linkedin')) {
        botResponse = chatbot.contactResponse || "You can connect with Prince via:\n\n- **Email**: chauhanprince21153366@gmail.com\n- **LinkedIn**: linkedin.com/in/prince1184/\n- **GitHub**: github.com/Prince1895\n- **Twitter/X**: x.com/Chauhan18Prince";
      } else {
        botResponse = chatbot.defaultResponse || "Prince is a Software Engineer who builds scalable backend systems, cloud-native platforms, AI-powered applications, and distributed software. Ask me about his skills, projects, education, or contact details!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 850);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="mb-4 w-[340px] sm:w-[380px] h-[480px] rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 bg-gradient-to-r from-purple-950/20 to-zinc-950/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-70" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-zinc-100 uppercase tracking-widest">Prince AI Assistant</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-zinc-200 rounded-tl-none'
                    }`}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 text-zinc-400 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 border-t border-white/5 bg-zinc-950/40 flex flex-wrap gap-1.5 items-center">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest mr-1">Ask:</span>
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s.query)}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/5 bg-zinc-950/80 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about skills, education, projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/30 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center justify-center shrink-0 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circular Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(124,58,237,0.3)] border border-purple-500/20 hover:shadow-[0_10px_35px_rgba(124,58,237,0.5)] transition-all"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative z-10"
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
