import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  isAdminLoggedIn, checkAdminLogin, logoutAdmin, 
  getPortfolioData, savePortfolioData, resetPortfolioData 
} from '../utils/portfolioData';
import { MagicCard } from '../components/magicui/magic-card';
import { AuroraText } from '../components/magicui/aurora-text';
import { 
  Lock, LogOut, Check, RefreshCw, Plus, Trash2, ChevronUp, ChevronDown 
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  const [formData, setFormData] = useState(() => getPortfolioData());

  useEffect(() => {
    setIsLoggedIn(isAdminLoggedIn());
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const success = await checkAdminLogin(password);
    if (success) {
      setIsLoggedIn(true);
      setFormData(getPortfolioData());
      toast.success('Successfully authenticated!');
    } else {
      toast.error('Invalid password. Access Denied.');
    }
    setPassword('');
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsLoggedIn(false);
    toast.success('Logged out successfully.');
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleChatbotChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        chatbot: {
          ...prev.hero.chatbot,
          [field]: value
        }
      }
    }));
  };

  const handleProjectChange = (idx, field, value) => {
    setFormData((prev) => {
      const updatedProjects = [...prev.projects];
      if (field === 'skills') {
        updatedProjects[idx] = {
          ...updatedProjects[idx],
          skills: value.split(',').map(s => s.trim()).filter(Boolean)
        };
      } else {
        updatedProjects[idx] = {
          ...updatedProjects[idx],
          [field]: value
        };
      }
      return {
        ...prev,
        projects: updatedProjects
      };
    });
  };

  const handleAddProject = () => {
    setFormData((prev) => {
      const numString = String(prev.projects.length + 1).padStart(2, '0');
      const newProject = {
        id: `proj-${Date.now()}`,
        num: numString,
        type: 'WEB APP',
        title: 'New Project Title',
        description: 'Describe your featured project here...',
        skills: ['React', 'CSS'],
        github: 'https://github.com/',
        live: 'https://',
        gradient: 'from-purple-600/25 via-indigo-800/10 to-transparent',
      };
      const updated = {
        ...prev,
        projects: [...prev.projects, newProject]
      };
      savePortfolioData(updated);
      return updated;
    });
    toast.success('Added new project capsule (auto-saved).');
  };

  const handleRemoveProject = (idx) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setFormData((prev) => {
        const filtered = prev.projects.filter((_, i) => i !== idx);
        const reindexed = filtered.map((p, i) => ({
          ...p,
          num: String(i + 1).padStart(2, '0')
        }));
        const updated = {
          ...prev,
          projects: reindexed
        };
        savePortfolioData(updated);
        return updated;
      });
      toast.success('Project deleted (auto-saved).');
    }
  };

  const handleMoveProject = (idx, direction) => {
    setFormData((prev) => {
      const updatedList = [...prev.projects];
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= updatedList.length) return prev;
      
      const temp = updatedList[idx];
      updatedList[idx] = updatedList[targetIdx];
      updatedList[targetIdx] = temp;

      const reindexed = updatedList.map((p, i) => ({
        ...p,
        num: String(i + 1).padStart(2, '0')
      }));

      const updated = {
        ...prev,
        projects: reindexed
      };
      savePortfolioData(updated);
      return updated;
    });
    toast.success('Order swapped (auto-saved).');
  };

  const handleSave = () => {
    savePortfolioData(formData);
    toast.success('Portfolio changes saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data to code defaults?')) {
      resetPortfolioData();
      setFormData(getPortfolioData());
      toast.success('Restored default credentials & content.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#030303] text-white py-24 px-4 relative flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Modern Dot Grid Background Layer */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          /* Lock Screen Card */
          <motion.div
            key="lockscreen"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <MagicCard
              className="!bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-2xl"
              gradientColor="rgba(168, 85, 247, 0.15)"
              gradientSize={240}
            >
              <div className="w-16 h-16 rounded-full bg-purple-950/20 border border-purple-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Admin <AuroraText>Access</AuroraText>
              </h2>
              <p className="text-zinc-500 text-xs mb-6 max-w-[240px]">
                Enter password to unlock portfolio dashboard and modify display values
              </p>

              <form onSubmit={handleLoginSubmit} className="w-full space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white placeholder-zinc-600 text-sm focus:outline-none transition-all duration-300 text-center font-mono tracking-widest"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 font-semibold text-sm transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:scale-[1.01]"
                >
                  Unlock Dashboard
                </button>
              </form>
            </MagicCard>
          </motion.div>
        ) : (
          /* Editor Panels */
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <div className="w-full flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Portfolio <AuroraText>CMS Dashboard</AuroraText>
                </h1>
                <p className="text-xs text-zinc-500 mt-1">Direct editing portal linked to local reactive store</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  title="Reset all values to defaults"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleLogout}
                  title="Log out"
                  className="p-2.5 rounded-xl bg-red-650/10 border border-red-500/20 hover:bg-red-650/20 text-red-400 transition-all flex items-center gap-1.5 text-xs font-semibold"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>

            {/* Tab navigation headers */}
            <div className="flex border-b border-white/5 gap-2 mb-6">
              {['hero', 'bento', 'projects'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 font-bold text-xs uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === tab
                      ? 'border-purple-500 text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab === 'hero' ? 'Hero & AI Chat' : tab === 'bento' ? 'Bento Stats' : 'Projects'}
                </button>
              ))}
            </div>

            {/* Tab contents forms */}
            <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md min-h-[400px]">
              
              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold border-b border-white/5 pb-2 text-zinc-300">Hero Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Greeting Name</label>
                      <input
                        type="text"
                        value={formData.hero.name}
                        onChange={(e) => handleInputChange('hero', 'name', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Hero Tagline</label>
                      <input
                        type="text"
                        value={formData.hero.title}
                        onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold border-b border-white/5 pb-2 pt-4 text-zinc-300">AI Assistant Prompt Responses</h3>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500 font-bold uppercase">Welcome Message</label>
                    <textarea
                      rows={2}
                      value={formData.hero.chatbot.welcome}
                      onChange={(e) => handleChatbotChange('welcome', e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Skills Query Response</label>
                      <textarea
                        rows={4}
                        value={formData.hero.chatbot.skillsResponse}
                        onChange={(e) => handleChatbotChange('skillsResponse', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Projects Query Response</label>
                      <textarea
                        rows={4}
                        value={formData.hero.chatbot.projectsResponse}
                        onChange={(e) => handleChatbotChange('projectsResponse', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Education Query Response</label>
                      <textarea
                        rows={4}
                        value={formData.hero.chatbot.educationResponse}
                        onChange={(e) => handleChatbotChange('educationResponse', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Contact Query Response</label>
                      <textarea
                        rows={4}
                        value={formData.hero.chatbot.contactResponse}
                        onChange={(e) => handleChatbotChange('contactResponse', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-sans"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bento' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold border-b border-white/5 pb-2 text-zinc-300">Bento Card Profile details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">First Name</label>
                      <input
                        type="text"
                        value={formData.bento.nameLine1}
                        onChange={(e) => handleInputChange('bento', 'nameLine1', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Last Name</label>
                      <input
                        type="text"
                        value={formData.bento.nameLine2}
                        onChange={(e) => handleInputChange('bento', 'nameLine2', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Display Role</label>
                      <input
                        type="text"
                        value={formData.bento.role}
                        onChange={(e) => handleInputChange('bento', 'role', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500 font-bold uppercase">Mindset Text Description</label>
                    <textarea
                      rows={2}
                      value={formData.bento.mindsetDescription}
                      onChange={(e) => handleInputChange('bento', 'mindsetDescription', e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500 font-bold uppercase">Craft Text Description</label>
                    <textarea
                      rows={2}
                      value={formData.bento.craftDescription}
                      onChange={(e) => handleInputChange('bento', 'craftDescription', e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                    />
                  </div>

                  <h3 className="text-lg font-bold border-b border-white/5 pb-2 pt-4 text-zinc-300">University Coordinates</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">College Name</label>
                      <input
                        type="text"
                        value={formData.bento.universityName}
                        onChange={(e) => handleInputChange('bento', 'universityName', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Location City</label>
                      <input
                        type="text"
                        value={formData.bento.locationText}
                        onChange={(e) => handleInputChange('bento', 'locationText', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">GPS Coordinates</label>
                      <input
                        type="text"
                        value={formData.bento.coordinatesText}
                        onChange={(e) => handleInputChange('bento', 'coordinatesText', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-zinc-500 font-bold uppercase">Grade (CGPA)</label>
                      <input
                        type="text"
                        value={formData.bento.gradeText}
                        onChange={(e) => handleInputChange('bento', 'gradeText', e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500 font-bold uppercase">College description</label>
                    <textarea
                      rows={2}
                      value={formData.bento.universityDescription}
                      onChange={(e) => handleInputChange('bento', 'universityDescription', e.target.value)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <h3 className="text-lg font-bold text-zinc-300">Manage Featured Projects</h3>
                    <button
                      onClick={handleAddProject}
                      className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Project
                    </button>
                  </div>

                  <div className="space-y-8 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin mt-4">
                    {formData.projects.length === 0 ? (
                      <p className="text-center py-12 text-zinc-500 text-xs">No projects added. Click "Add Project" above to create one.</p>
                    ) : (
                      formData.projects.map((project, idx) => (
                        <div key={project.id} className="space-y-4 border-b border-white/5 pb-8 last:border-b-0 last:pb-0 relative group">
                          
                          {/* Project Header controls (delete, move up/down) */}
                          <div className="flex justify-between items-center bg-zinc-950/60 p-3 rounded-2xl border border-white/5">
                            <span className="text-xs font-extrabold text-purple-400">
                              Project #{project.num} ({project.type})
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => handleMoveProject(idx, 'up')}
                                disabled={idx === 0}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                                title="Move Up"
                              >
                                <ChevronUp className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleMoveProject(idx, 'down')}
                                disabled={idx === formData.projects.length - 1}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                                title="Move Down"
                              >
                                <ChevronDown className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleRemoveProject(idx)}
                                className="p-1.5 rounded-lg bg-red-650/10 hover:bg-red-500/20 text-red-400 transition-all border border-red-500/20 ml-2"
                                title="Delete Project"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">Project Title</label>
                              <input
                                type="text"
                                value={project.title}
                                onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">Category Type (e.g. FULLSTACK APP)</label>
                              <input
                                type="text"
                                value={project.type}
                                onChange={(e) => handleProjectChange(idx, 'type', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">GitHub Repo Link</label>
                              <input
                                type="text"
                                value={project.github}
                                onChange={(e) => handleProjectChange(idx, 'github', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">Live Site Link</label>
                              <input
                                type="text"
                                value={project.live}
                                onChange={(e) => handleProjectChange(idx, 'live', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">Tech Stack (comma-separated)</label>
                              <input
                                type="text"
                                value={project.skills.join(', ')}
                                onChange={(e) => handleProjectChange(idx, 'skills', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <label className="text-xs text-zinc-500 font-bold uppercase">Card Gradient (Tailwind gradient class)</label>
                              <input
                                type="text"
                                value={project.gradient}
                                onChange={(e) => handleProjectChange(idx, 'gradient', e.target.value)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none font-mono text-xs"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-500 font-bold uppercase">Description</label>
                            <textarea
                              rows={2}
                              value={project.description}
                              onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 text-white text-sm focus:outline-none"
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons Footer */}
              <div className="flex gap-4 border-t border-white/5 pt-6 mt-8">
                <button
                  onClick={handleSave}
                  className="flex-1 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Save Portfolio Changes
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
