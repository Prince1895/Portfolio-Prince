import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import avtar from '../assets/profile_img.png';
import { TypeAnimation } from 'react-type-animation';
import { Send, Sparkles } from 'lucide-react';
import { getPortfolioData } from '../utils/portfolioData';

const Hero = () => {
  const [heroData, setHeroData] = useState(() => getPortfolioData().hero);

  useEffect(() => {
    const handleUpdate = () => {
      setHeroData(getPortfolioData().hero);
    };
    window.addEventListener('portfolio-data-updated', handleUpdate);
    return () => window.removeEventListener('portfolio-data-updated', handleUpdate);
  }, []);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: heroData.chatbot.welcome,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Sync initial bot message if it is updated dynamically
  useEffect(() => {
    setMessages([
      {
        sender: 'bot',
        text: heroData.chatbot.welcome,
      }
    ]);
  }, [heroData.chatbot.welcome]);

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

      if (cleanInput.includes('skill') || cleanInput.includes('tech') || cleanInput.includes('languages')) {
        botResponse = heroData.chatbot.skillsResponse;
      } else if (cleanInput.includes('project') || cleanInput.includes('work') || cleanInput.includes('portfolio')) {
        botResponse = heroData.chatbot.projectsResponse;
      } else if (cleanInput.includes('education') || cleanInput.includes('college') || cleanInput.includes('study')) {
        botResponse = heroData.chatbot.educationResponse;
      } else if (cleanInput.includes('contact') || cleanInput.includes('email') || cleanInput.includes('reach') || cleanInput.includes('social')) {
        botResponse = heroData.chatbot.contactResponse;
      } else {
        botResponse = heroData.chatbot.defaultResponse;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden pt-28 pb-12">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Avatar with Glow */}
        <motion.a
          href={heroData.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-25 group-hover:opacity-45 transition-opacity duration-500" />
          <img
            src={avtar}
            alt="Prince Kumar"
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 object-cover shadow-2xl transition-all duration-300"
            title="Follow me on Twitter"
          />
        </motion.a>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl mt-5 font-bold tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent pb-1"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          <TypeAnimation
            sequence={[heroData.name]}
            wrapper="span"
            speed={40}
            style={{ display: 'inline-block' }}
            repeat={0}
            cursor={false}
          />
        </h1>

        {/* Subtitle Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs sm:text-sm text-zinc-300 font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
          {heroData.title}
        </motion.div>

        {/* Interactive Chatbot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 max-w-xl w-full rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-md overflow-hidden text-left shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col h-[360px]"
        >
          {/* Chat Header */}
          <div className="px-4 py-3 border-b border-white/5 bg-zinc-950/60 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">Prince AI Assistant</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-tr-none'
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
                <div className="bg-white/5 border border-white/5 text-zinc-400 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Suggestions Bar */}
          <div className="px-4 py-2 border-t border-white/5 bg-zinc-950/20 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider mr-1">Ask:</span>
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s.query)}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/5 bg-zinc-950/60 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Prince..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center justify-center shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
