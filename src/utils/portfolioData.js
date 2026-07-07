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
      welcome: "Hi! I am Prince's AI assistant. Ask me anything about my skills, engineering projects, education, or contact details, or choose a suggestion below!",
      skillsResponse: "Prince is a Software Engineer focused on AI, Backend, Cloud, and Distributed Systems. His tech stack includes React, Node.js, Express, Java, JavaScript, TypeScript, Python, Solidity, PostgreSQL, MongoDB, Redis, ClickHouse, Docker, AWS, and AI integration using Ollama and OpenAI. He has solved 700+ LeetCode problems with a peak rating of 1767.",
      projectsResponse: "Prince's flagship systems include:\n\n1. **Flux**: An AWS Cloud Cost Optimization Engine.\n2. **Sentinel Gateway**: A distributed API Gateway with AI threat detection (Ollama) and ClickHouse analytics.\n3. **Carbon Credit Verification System**: An Ethereum smart-contract-based verification platform.\n4. **LevelUp**: A scalable e-learning platform with Razorpay and WebSockets.",
      educationResponse: "Prince is pursuing a B.Tech in Computer Science & Engineering (Data Science) at ABES Engineering College (2023–2027), holding an 8.351 CGPA.",
      contactResponse: "You can connect with Prince via:\n\n- **Email**: chauhanprince21153366@gmail.com\n- **LinkedIn**: linkedin.com/in/prince1184/\n- **GitHub**: github.com/Prince1895\n- **Twitter/X**: x.com/Chauhan18Prince",
      defaultResponse: "Prince is a Software Engineer who builds scalable backend systems, cloud-native platforms, AI-powered applications, and distributed software. Ask me about his skills, projects, education, or contact details!"
    }
  },
  bento: {
    nameLine1: "Prince",
    nameLine2: "Kumar",
    role: "Software Engineer -Building AI-Powered • Scalable Software",
    mindsetDescription: "I enjoy solving engineering challenges through scalable architectures, efficient algorithms, and modern development practices.Strong problem-solving skills built through 700+ LeetCode problems and real-world projects.",
    craftDescription: "Developing modern applications using React, Node.js, Docker, AWS, and AI technologies with a focus on scalability and maintainability.",
    universityName: "ABES Engineering College",
    universityDescription: "Relevant Coursework •Data Structures •Operating Systems •DBMS •Computer Networks •Cloud Computing",
    locationText: "GHAZIABAD, INDIA",
    coordinatesText: "28.6757° N, 77.4912° E",
    timezoneText: "GMT +5:30",
    graduationText: "Expected graduation: 2027",
    gradeText: "Grade: 8.351 CGPA"
  },
  projects: [
    {
      id: "proj-1",
      num: "01",
      type: "CLOUD PLATFORM",
      title: "Flux – Cloud Cost Optimization Engine",
      description:
        "A multi-tenant SaaS platform that identifies cloud infrastructure waste across AWS environments. It analyzes idle resources, estimates real-time cost savings, automates multi-region scans, and generates optimization reports through a scalable backend architecture.",
      skills: [
        "Node.js",
        "AWS SDK v3",
        "React",
        "PostgreSQL",
        "Redis",
        "Docker"
      ],
      highlights: [
        "Multi-Tenant SaaS",
        "Cloud Cost Analytics",
        "AWS Infrastructure Scanning"
      ],
      github: "https://github.com/Prince1895/Flux",
      live: "https://flux-web-azure.vercel.app/",
      gradient: "from-orange-600/25 via-amber-800/10 to-transparent",
    },

    {
      id: "proj-2",
      num: "02",
      type: "DISTRIBUTED SYSTEM",
      title: "Distributed API Gateway & Log Analytics",
      description:
        "A high-throughput API gateway and real-time log analytics platform featuring Redis-powered rate limiting, JWT-based identity tracking, asynchronous log processing with ClickHouse, and AI-driven anomaly detection for secure and scalable backend systems.",
      skills: [
        "Node.js",
        "Express.js",
        "Redis",
        "ClickHouse",
        "WebSockets",
        "Worker Threads",
        "JWT",
        "Docker",
        "Ollama"
      ],
      highlights: [
        "Distributed API Gateway",
        "AI Threat Detection",
        "Real-Time Log Analytics"
      ],
      github: "https://github.com/Prince1895/ai-security-cluster",
      live: "",
      gradient: "from-red-600/25 via-orange-800/10 to-transparent",
    },

    {
      id: "proj-3",
      num: "03",
      type: "BLOCKCHAIN PLATFORM",
      title: "Carbon Credit Verification System",
      description:
        "A decentralized carbon credit verification platform built on Ethereum with secure backend APIs, smart contracts, and transparent MRV workflows for immutable verification and trusted carbon credit management.",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Solidity",
        "Ethereum",
        "Prisma"
      ],
      highlights: [
        "Smart Contracts",
        "Blockchain Verification",
        "Secure REST APIs"
      ],
      github: "https://github.com/Prince1895/SIH25038-poject-Blockchain--Based-Blue-Carbon-Registry-and-MRV-System",
      live: "",
      gradient: "from-emerald-600/25 via-green-800/10 to-transparent",
    },

    {
      id: "proj-4",
      num: "04",
      type: "EDTECH PLATFORM",
      title: "LevelUp – Scalable E-Learning Platform",
      description:
        "A full-stack e-learning platform with JWT authentication, role-based access control, Razorpay payment integration, real-time progress tracking via WebSockets, and scalable REST APIs optimized for modern learning experiences.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS",
        "WebSockets",
        "Razorpay"
      ],
      highlights: [
        "RBAC Authentication",
        "Payment Integration",
        "Real-Time Progress"
      ],
      github: "https://github.com/Prince1895/LevelUP",
      live: "https://levelup01.vercel.app/",
      gradient: "from-blue-600/25 via-sky-800/10 to-transparent",
    },

    {
      id: "proj-5",
      num: "05",
      type: "CONTENT PLATFORM",
      title: "Domiko – CMS Platform",
      description:
        "A modern content management platform featuring secure JWT authentication, admin-controlled publishing workflows, scalable REST APIs, image management, and an optimized MERN architecture for content delivery.",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "ImageKit"
      ],
      highlights: [
        "JWT Authentication",
        "Admin Dashboard",
        "RESTful APIs"
      ],
      github: "https://github.com/Prince1895/Domiko",
      live: "https://domiko-client.vercel.app/",
      gradient: "from-violet-600/25 via-purple-800/10 to-transparent",
    },

    {
      id: "proj-6",
      num: "06",
      type: "PERSONAL BRAND",
      title: "Developer Portfolio",
      description:
        "A modern portfolio showcasing engineering projects, AI integration, GitHub and LeetCode analytics, interactive animations, and responsive user experiences built with React and Framer Motion.",
      skills: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
        "JavaScript"
      ],
      highlights: [
        "AI Assistant",
        "Interactive UI",
        "Responsive Design"
      ],
      github: "https://github.com/Prince1895/Portfolio-Prince",
      live: "https://portfolio-prince-kumar.vercel.app/",
      gradient: "from-indigo-600/25 via-violet-800/10 to-transparent",
    },

    {
      id: "proj-7",
      num: "07",
      type: "EDUCATIONAL GAME",
      title: "MathVenture",
      description:
        "An interactive educational platform that gamifies mathematics through engaging quizzes, adaptive gameplay, and a responsive interface designed to make learning enjoyable for young students.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Netlify"
      ],
      highlights: [
        "Gamified Learning",
        "Responsive UI",
        "Interactive Gameplay"
      ],
      github: "https://github.com/Prince1895/MathVenture",
      live: "https://mathventure-math-game.netlify.app/",
      gradient: "from-fuchsia-600/25 via-purple-800/10 to-transparent",
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
    const mergedHero = { ...defaultPortfolioData.hero, ...parsed.hero };
    if (mergedHero.chatbot) {
      if (mergedHero.chatbot.skillsResponse?.includes("1720+") || mergedHero.chatbot.skillsResponse?.includes("React, Node.js, Express, Java, Python")) {
        mergedHero.chatbot.skillsResponse = defaultPortfolioData.hero.chatbot.skillsResponse;
      }
      if (mergedHero.chatbot.projectsResponse?.includes("MathVenture") || mergedHero.chatbot.projectsResponse?.includes("Domiko: A full-stack blogging platform")) {
        mergedHero.chatbot.projectsResponse = defaultPortfolioData.hero.chatbot.projectsResponse;
      }
      if (mergedHero.chatbot.educationResponse?.includes("8.5") || mergedHero.chatbot.educationResponse?.includes("8.5/10 CGPA")) {
        mergedHero.chatbot.educationResponse = defaultPortfolioData.hero.chatbot.educationResponse;
      }
      if (mergedHero.chatbot.welcome?.includes("Hi! I am Prince's AI assistant")) {
        mergedHero.chatbot.welcome = defaultPortfolioData.hero.chatbot.welcome;
      }
      if (mergedHero.chatbot.defaultResponse?.includes("3rd-year CS student")) {
        mergedHero.chatbot.defaultResponse = defaultPortfolioData.hero.chatbot.defaultResponse;
      }
    }
    return {
      hero: mergedHero,
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
