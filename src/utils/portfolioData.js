// LocalStorage Key
const DATA_KEY = 'prince_portfolio_dynamic_data';
const AUTH_KEY = 'prince_portfolio_admin_auth';

// Default Fallback Data
const defaultPortfolioData = {
  hero: {
    name: "Hi, I'm Prince Kumar 👋",
    title: "Full Stack Developer & DevOps Practitioner",
    twitterUrl: "https://twitter.com/intent/follow?screen_name=Chauhan18Prince",
    chatbot: {
      welcome: "Hi! I am Prince's AI assistant. Ask me anything about his skills, projects, education, or contact details, or choose a suggestion below!",
      skillsResponse: "Prince is a Full Stack Developer & DevOps Practitioner. His core tech stack includes React, Node.js, Express, Java, Python, MongoDB, MySQL, Git, and Tailwind CSS. He also has a strong foundation in Data Structures and Algorithms with a LeetCode rating of 1720+.",
      projectsResponse: "Some of Prince's key projects are:\n\n1. **Domiko**: A full-stack blogging platform with JWT authentication.\n2. **LevelUp**: An online interactive coding platform built with React.\n3. **MathVenture**: An educational math game for kids.",
      educationResponse: "Prince is currently pursuing his Bachelor of Technology in Computer Science (specializing in Data Science) at ABES Engineering College (Batch 2023–2027). He maintains an 8.5/10 CGPA.",
      contactResponse: "You can connect with Prince via:\n\n- **Email**: chauhanprince21153366@gmail.com\n- **LinkedIn**: linkedin.com/in/prince1184/\n- **GitHub**: github.com/Prince1895\n- **Twitter/X**: x.com/Chauhan18Prince",
      defaultResponse: "Prince is a 3rd-year CS student at ABES who loves coding, building web apps, and solving LeetCode problems. Ask about his skills, projects, education, or contact details!"
    }
  },
  bento: {
    nameLine1: "Prince",
    nameLine2: "Kumar",
    role: "Fullstack Developer",
    mindsetDescription: "Building my problem-solving muscle. Solving DSA on LeetCode gives me the analytical discipline to write clean and optimal code.",
    craftDescription: "Building scalable apps, APIs, and pipelines. I leverage modern tools like Docker, Git, AWS, and Tailwind to deploy production-ready code.",
    universityName: "ABES Engineering College",
    universityDescription: "Pursuing Computer Science & Engineering (specializing in Data Science). Collaborating on hackathons, coding tasks, and web applications.",
    locationText: "GHAZIABAD, INDIA",
    coordinatesText: "28.6757° N, 77.4912° E",
    timezoneText: "GMT +5:30",
    graduationText: "Expected graduation: 2027",
    gradeText: "Grade: 8.5 CGPA"
  },
  projects: [
    {
      id: "proj-1",
      num: "01",
      type: "WEB PORTFOLIO",
      title: "Portfolio - Prince Kumar",
      description: "A premium personal portfolio website featuring custom animations, a canvas particle field, an interactive Q&A chatbot widget, and a Bento Grid stats layout.",
      skills: ["React", "Tailwind CSS", "Framer Motion", "Magic UI", "Material UI"],
      github: "https://github.com/Prince1895/Portfolio-Prince",
      live: "http://localhost:5173/",
      gradient: "from-amber-600/25 via-amber-800/10 to-transparent",
    },
    {
      id: "proj-2",
      num: "02",
      type: "FULLSTACK APP",
      title: "Domiko - Blog Platform",
      description: "A full-featured blogging platform built with JWT-based authentication, structured RESTful API endpoints, image uploads via ImageKit, and an interactive markdown editor.",
      github: "https://github.com/Prince1895/Domiko",
      live: "https://domiko-client.vercel.app/",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "ImageKit.io"],
      gradient: "from-green-600/25 via-emerald-800/10 to-transparent",
    },
    {
      id: "proj-3",
      num: "03",
      type: "EDUCATIONAL GAME",
      title: "MathVenture",
      description: "An interactive, web-based educational math game designed for kids aged 3–8, gamifying basic math operations (addition, subtraction, multiplication, division).",
      github: "https://github.com/Prince1895/MathVenture",
      live: "https://mathventure-math-game.netlify.app/",
      skills: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      gradient: "from-purple-600/25 via-indigo-800/10 to-transparent",
    },
    {
      id: "proj-4",
      num: "04",
      type: "CODING PLATFORM",
      title: "LevelUp Coding",
      description: "An online coding practice platform built with React, providing a user-friendly environment for studying core algorithms, solving coding tasks, and practicing tech interview preparation.",
      github: "https://github.com/Prince1895/SkillSphere",
      live: "https://levelup01.vercel.app/",
      skills: ["React", "Tailwind CSS", "JavaScript", "Shadcn UI", "Netlify"],
      gradient: "from-blue-600/25 via-sky-800/10 to-transparent",
    }
  ]
};

// SHA-256 Hashing helper
export const sha256 = async (message) => {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

// Auth checks
export const checkAdminLogin = async (passwordInput) => {
  if (!passwordInput) return false;

  // 1. Check against plain text password from env
  const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;
  if (envPassword && passwordInput === envPassword) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }

  // 2. Check against hash from env
  const envHash = import.meta.env.VITE_ADMIN_PASSWORD_HASH;
  if (envHash) {
    const inputHash = await sha256(passwordInput);
    if (inputHash === envHash) {
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
  }

  // 3. Check against default sha256 for "admin_prince_2026"
  const defaultHash = "a38c9284242646d4c514757c6b9070a256a93b584d41fa7504fbb86a5a04f4c9"; // Hash for "admin_prince_2026"
  const inputHash = await sha256(passwordInput);
  if (inputHash === defaultHash) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }

  return false;
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_KEY);
};

// Data management
export const getPortfolioData = () => {
  const localData = localStorage.getItem(DATA_KEY);
  if (!localData) {
    // Return copy of default fallback data mapping stable proj IDs
    return {
      hero: { ...defaultPortfolioData.hero },
      bento: { ...defaultPortfolioData.bento },
      projects: defaultPortfolioData.projects.map((p, i) => ({
        id: p.id || `proj-${i + 1}`,
        ...p
      }))
    };
  }
  try {
    const parsed = JSON.parse(localData);
    const loadedProjects = parsed.projects || defaultPortfolioData.projects;
    const projectsWithId = loadedProjects.map((p, i) => ({
      id: p.id || `proj-${i + 1}-${Date.now()}`,
      ...p
    }));
    return {
      hero: { ...defaultPortfolioData.hero, ...parsed.hero },
      bento: { ...defaultPortfolioData.bento, ...parsed.bento },
      projects: projectsWithId,
    };
  } catch (e) {
    return defaultPortfolioData;
  }
};

export const savePortfolioData = (data) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event('portfolio-data-updated'));
};

export const resetPortfolioData = () => {
  localStorage.removeItem(DATA_KEY);
  window.dispatchEvent(new Event('portfolio-data-updated'));
};
