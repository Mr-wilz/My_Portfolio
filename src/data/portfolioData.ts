export const personalInfo = {
  name: "Wilfort Abel",
  nickname: "Mr Wilz",
  role: "Frontend Developer",
  tagline:
    "Crafting high-performance web experiences with precision and purpose.",
  bio: "I'm a Frontend Developer who crafts high-performance web experiences with React, Angular, Vue, Next.js, TypeScript, and modern UI libraries. I bridge the gap between design and engineering — turning ideas into polished, scalable products.",
  availability: "Available for freelance & full-time",
  email: "wilzabel@gmail.com",
  formspreeId: "xreaeljv",
  github: "https://github.com/mr-wilz",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mr-wilz",
    id: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mrwilz111/",
    id: "linkedin",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@atlantacityrole92?is_from_webapp=1&sender_device=pc",
    id: "tiktok",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/JuicyWhilz",
    id: "x",
  },
  {
    label: "Facebook",
    href: "https://Facebook.com/Prince.Whilz/",
    id: "facebook",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+2347061251386",
    id: "whatsapp",
  },
];

export const cvPath = "/Wilfort_AbelCV.pdf";

export const heroQuestions = [
  "Would you like to hire a developer with practical experience & deadline discipline?",
  "Would you like to hire a dev who creates real value & contributes to your organization?",
  "Would you like to hire a purpose-driven dev committed to quality work?",
  "If your answer is yes - then I am your guy, please contact me!",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: cvPath, isExternal: true },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Angular",
      "Vue",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: ["Vite", "Git", "Framer Motion", "Webpack", "Storybook", "Figma"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "GraphQL", "REST APIs", "Firebase", "PostgreSQL"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "CI/CD", "Netlify"],
  },
];

export const aboutHighlights = [
  {
    title: "Pixel-Perfect Design",
    description:
      "I bridge the gap between design and engineering, ensuring every pixel is exactly where it should be.",
  },
  {
    title: "Blazing Fast Performance",
    description:
      "Optimization is not an afterthought. I build applications that load fast and run smooth on any device.",
  },
  {
    title: "Clean & Scalable Code",
    description:
      "I write maintainable, industry-standard code that your team will love to work with in the future.",
  },
  {
    title: "Mobile-First Approach",
    description:
      "Responsive design is a priority. Your application will look and feel amazing on phones, tablets, and desktops.",
  },
];

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Satisfied Clients" },
  { value: "100%", label: "Project Success Rate" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform — SHOP-ON",
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
    title: "Chekz - SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS products with interactive charts and real-time data.",
    technologies: ["React", "TypeScript", "D3.js", "Prisma", "PostgreSQL"],
    category: "react" as const,
    githubUrl: "https://github.com/mr-wilz/Chekz",
    liveUrl: "https://chekz.vercel.app/",
    image: "/SAAS.png",
  },
  {
    id: 3,
    title: "Planit - Travel Planning App",
    description:
      "AI-powered travel planner with itinerary generation and location-based recommendations.",
    technologies: ["React", "Mapbox", "OpenAI", "Supabase", "OpenRouter API"],
    category: "react" as const,
    githubUrl: "https://github.com/Mr-wilz/PLAN-IT",
    liveUrl: "https://planitai.netlify.app/",
    image: "/Planit.png",
  },
  {
    id: 4,
    title: "NegzFit - Fitness Tracker",
    description:
      "Mobile-first fitness application with workout planning and progress tracking.",
    technologies: ["Next.js", "PWA", "Chart.js", "Firebase", "Service Workers"],
    category: "next" as const,
    githubUrl: "https://github.com/mr-wilz/NegzFit",
    liveUrl: "https://negzfit.vercel.app/",
    image: "/negzfit.png",
  },

  {
    id: 6,
    title: "GoChat",
    description:
      "WebSocket-based chat application with rooms, file sharing, and video calls.",
    technologies: ["Next.js", "Socket.io", "WebRTC", "Redis", "Docker"],
    category: "next" as const,
    githubUrl: "https://github.com/mr-wilz/GoChat",
    liveUrl: "https://go-chat-pink.vercel.app/",
    image: "/gochat.jpg",
  },
  {
    id: 7,
    title: "TeenDevAfrica",
    description:
      "A web based company that focuses on providing tech education and resources to teenagers in Africa, empowering them to become future developers and innovators.",
    technologies: ["Next.js", "Socket.io", "supabase", "Redis", "Docker"],
    category: "next" as const,
    githubUrl: "https://github.com/Mr-wilz/TeenDevAfrica",
    liveUrl: "https://teendevafrica.vercel.app/",
    image: "/project7.png",
  },
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
    duration: "2021 - 2022",
    description:
      "Developed MVP products for startups. Focused on rapid prototyping and user feedback iteration.",
    technologies: ["React", "Firebase", "Material-UI", "REST APIs"],
  },
];

export const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio%20Inquiry&body=Hello%20Wilfort,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0D%0A%0D%0AThanks,`;
