import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 150; // offset for nav height

      for (const item of navItems) {
        const el = document.getElementById(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/#' + href);
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll to hash on page load (if navigated from another page)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 ${scrolled
        ? 'bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-[11px] bg-zinc-950 flex items-center justify-center text-white font-black text-sm tracking-tighter">
              PK
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-bold text-white text-base tracking-tight group-hover:text-purple-400 transition-colors duration-300">
            Prince<span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.href;
            return (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-full select-none ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right Side Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1KKEPoSi_2H_QYdSgHtQZmlwlb50Igra2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4.5 py-2 rounded-full bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-300 font-bold text-xs transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.05)]"
          >
            Resume <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 border-b border-white/5 backdrop-blur-2xl absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2 mt-2">
              {navItems.map((item) => {
                const isActive = location.pathname === '/' && activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${isActive
                      ? 'bg-purple-600/10 text-purple-400 border border-purple-500/20'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="h-px bg-white/5 my-1" />

            <a
              href="https://drive.google.com/file/d/1KKEPoSi_2H_QYdSgHtQZmlwlb50Igra2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-colors flex items-center justify-center gap-1"
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
