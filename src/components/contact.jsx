import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { AuroraText } from './magicui/aurora-text';
import { Send, Clock, Sparkles } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email.');
      return;
    }
    if (!message.trim()) {
      toast.error('Please enter a message.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API submit delay
    setTimeout(() => {
      const subject = encodeURIComponent(`New Portfolio Message from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:chauhanprince21153366@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoUrl;
      toast.success('Opening your mail client...');
      
      // Reset fields
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className="w-full px-6 sm:px-12 max-w-5xl mx-auto py-24 flex flex-col items-center"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      id="contact"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-4">
        Get in <AuroraText>Touch</AuroraText>
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base text-center max-w-lg mb-16 leading-relaxed">
        Let's collaborate on your next project, or just say hello. I'd love to hear from you.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Information (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 bg-zinc-950/40 border border-white/5 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-all duration-300 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Let's Connect</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Whether you have a codebase to scale, deployment pipelines to optimize, or want a freelance developer — I am available.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              {/* Availability Stats */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider block">Availability</span>
                  <span className="text-xs font-semibold text-zinc-300">Open to offers / Projects</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-purple-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider block">Response Time</span>
                  <span className="text-xs font-semibold text-zinc-300">Within 12 Hours</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-400">
                  <IoMailOutline className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-550 font-bold uppercase tracking-wider block">Email Direct</span>
                  <a href="mailto:chauhanprince21153366@gmail.com" className="text-xs font-semibold text-zinc-300 hover:text-purple-400 transition-colors">
                    chauhanprince21153366@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex gap-3 mt-8 relative z-10 pt-6 border-t border-white/5">
            <a 
              href="https://linkedin.com/in/prince1184/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a 
              href="https://github.com/Prince1895" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href="https://x.com/Chauhan18Prince" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Form (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form 
            onSubmit={handleSubmit}
            className="p-8 bg-zinc-950/40 border border-white/5 rounded-3xl flex flex-col justify-between h-full hover:border-white/10 transition-all duration-300 shadow-2xl relative"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative group w-full">
                <input
                  type="text"
                  required
                  id="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-purple-500/30 focus:bg-zinc-900/20 transition-all"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div className="relative group w-full">
                <input
                  type="email"
                  required
                  id="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-purple-500/30 focus:bg-zinc-900/20 transition-all"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Field */}
              <div className="relative group w-full">
                <textarea
                  required
                  rows={5}
                  id="message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-purple-500/30 focus:bg-zinc-900/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full py-4 rounded-2xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 hover:scale-[1.01] disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  Send Message <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;