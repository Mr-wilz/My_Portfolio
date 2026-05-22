export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform - 🛒 SHOP-ON",
    description:
      "A modern e-commerce solution with real-time inventory management and payment integration.",
    technologies: ["React", "TypeScript", "Stripe", "Tailwind", "Node.js"],
    category: "react" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://shpon.netlify.app/",
    image: "ShopOn.png",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS products with interactive charts and real-time data.",
    technologies: ["React", "TypeScript", "D3.js", "Prisma", "PostgreSQL"],
    category: "react" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    image: "/SAAS.png",
  },
  {
    id: 3,
    title: "Travel Planning App",
    description:
      "AI-powered travel planner with itinerary generation and location-based recommendations.",
    technologies: ["React", "Mapbox", "OpenAI", "Supabase", "OpenRouter API"],
    category: "react" as const,
    githubUrl: "https://github.com/Mr-wilz/PLAN-IT",
    liveUrl: "https://planitai.netlify.app/",
    image: "/planit.png",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness application with workout planning and progress tracking.",
    technologies: ["Next.js", "PWA", "Chart.js", "Firebase", "Service Workers"],
    category: "next" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    image: "/project4.jpg",
  },
  {
    id: 5,
    title: "Design System",
    description:
      "Comprehensive design system with reusable components and documentation.",
    technologies: ["React", "Storybook", "Figma", "Jest", "Testing Library"],
    category: "react" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    image: "/project5.jpg",
  },
  {
    id: 6,
    title: "Real-time Chat",
    description:
      "WebSocket-based chat application with rooms, file sharing, and video calls.",
    technologies: ["Next.js", "Socket.io", "WebRTC", "Redis", "Docker"],
    category: "next" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    image: "/project6.jpg",
  },
];

export const techStack = [
  { name: "React", icon: "⚛️", level: 95, color: "#61DAFB" },
  { name: "TypeScript", icon: "📘", level: 90, color: "#3178C6" },
  { name: "Next.js", icon: "▲", level: 88, color: "#000000" },
  { name: "Tailwind", icon: "🎨", level: 92, color: "#06B6D4" },
  { name: "Node.js", icon: "🟢", level: 85, color: "#339933" },
  { name: "GraphQL", icon: "📊", level: 80, color: "#E10098" },
  { name: "Framer Motion", icon: "✨", level: 88, color: "#0055FF" },
  { name: "Vite", icon: "⚡", level: 90, color: "#646CFF" },
  { name: "Git", icon: "📦", level: 92, color: "#F05032" },
  { name: "Docker", icon: "🐳", level: 75, color: "#2496ED" },
];

export const experiences = [
  {
    id: 1,
    company: "ALX SE Program",
    position: "Intern Software Engineer",
    duration: "2023 - 2025",
    description:
      "Implemented scalable web applications using React and TypeScript. Participated in code reviews and collaborated in an agile team environment.",
    technologies: ["React", "TypeScript", "Webpack", "Docker"],
  },
  {
    id: 2,
    company: "Freelance",
    position: "Frontend Developer",
    duration: "2022 - 2023",
    description:
      "Built responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
    technologies: ["React", "Next.js", "Tailwind", "Figma", "GraphQL"],
  },
  {
    id: 3,
    company: "Startup Studio",
    position: "Intern Developer",
    duration: "2021- 2022",
    description:
      "Developed MVP products for startups. Focused on rapid prototyping and user feedback iteration.",
    technologies: ["React", "Firebase", "Material-UI", "REST APIs"],
  },
];
