export const EMAIL = "omarmg831@gmail.com"

export const CV_PATH = ""

export const socials = {
  linkedin: "",
  github: "",
  email: `mailto:${EMAIL}`,
}

export const navItems = ["About", "Projects", "Skills", "Contact"] as const

export const roles = ["Web Developer", "UI Designer", "Programmer", "AI Enthusiast"]

export type Project = {
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
  github?: string
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project 2",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project 3",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project 4",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project 5",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project 6",
    description: "A brief description of the project goes here.",
    tags: ["React", "Next.js", "TypeScript"],
  },
]

export const skillClusters = [
  {
    title: "Frontend",
    accent: "from-blue-500/30 to-cyan-400/5",
    items: ["React", "Next.js", "Tailwind", "GSAP", "TypeScript"],
  },
  {
    title: "Backend",
    accent: "from-rose-500/30 to-orange-400/5",
    items: ["Node.js", "Express", "Firebase", "Supabase"],
  },
  {
    title: "Dev Tools",
    accent: "from-amber-400/30 to-yellow-300/5",
    items: ["Git", "VS Code", "Vercel", "Figma", "Android Studio"],
  },
  {
    title: "App Development",
    accent: "from-emerald-500/30 to-teal-400/5",
    items: ["Kotlin with Compose", "Java"],
  },
  {
    title: "Soft Skills",
    accent: "from-purple-500/30 to-pink-400/5",
    items: ["Problem Solving", "Collaboration", "Adaptability", "Creativity", "Fast Learner"],
  },
]

/** Devicon slugs used by the floating background and the tech marquee. */
export const techIcons: { slug: string; name: string; variant?: string }[] = [
  { slug: "html5", name: "HTML5" },
  { slug: "css3", name: "CSS3" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "react", name: "React" },
  { slug: "nextjs", name: "Next.js" },
  { slug: "tailwindcss", name: "Tailwind" },
  { slug: "nodejs", name: "Node.js" },
  { slug: "express", name: "Express" },
  { slug: "firebase", name: "Firebase" },
  { slug: "supabase", name: "Supabase" },
  { slug: "python", name: "Python" },
  { slug: "java", name: "Java" },
  { slug: "kotlin", name: "Kotlin" },
  { slug: "php", name: "PHP" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "mysql", name: "MySQL" },
  { slug: "graphql", name: "GraphQL", variant: "plain" },
  { slug: "figma", name: "Figma" },
  { slug: "git", name: "Git" },
  { slug: "vscode", name: "VS Code" },
  { slug: "androidstudio", name: "Android Studio" },
  { slug: "vercel", name: "Vercel" },
]

export const deviconUrl = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`
