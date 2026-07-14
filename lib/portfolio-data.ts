import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Brain,
  Clapperboard,
  Cloud,
  Code,
  Cpu,
  GraduationCap,
  Heart,
  Server,
} from 'lucide-react'

export const profile = {
  name: 'Aman Tiwari',
  role: 'Software Engineer & Generative AI Developer',
  tagline:
    'A B.Tech CSE graduate specializing in software engineering and Generative AI development, focused on designing and deploying intelligent web systems and scalable cloud architectures.',
  email: 'amantripathi912@gmail.com',
  github: 'https://github.com/Aman-Farmer19',
  linkedin: 'https://www.linkedin.com/in/tiwari-aman1999/',
  instagram: 'https://www.instagram.com/i.m_aman19/',
  status: 'Available for opportunities',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Web',
    icon: Code,
    items: [
      'Python, JavaScript, TypeScript',
      'React.js, Node.js',
      'Flask, SQL, C / C++',
      'Tailwind CSS, HTML, CSS',
    ],
  },
  {
    title: 'AI & Generative AI',
    icon: Brain,
    items: [
      'Prompt Engineering',
      'LLM APIs (OpenAI / Gemini)',
      'Claude (Anthropic)',
      'Antigravity (Gemini)',
      'LangChain (basics)',
      'RAG & Agentic AI concepts',
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: Cloud,
    items: [
      'Git & GitHub, VS Code',
      'AWS (Lambda, S3, API Gateway)',
      'Postman, Vercel, Render, Railway',
      'Docker (basics)',
    ],
  },
  {
    title: 'Professional Qualities',
    icon: Cpu,
    items: [
      'Problem-Solving',
      'Critical Thinking',
      'Team Collaboration',
      'Continuous Learning',
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  href?: string
  badge?: string
  isPrivate?: boolean
}

export const projects: Project[] = [
  {
    title: 'Reelify-2.0',
    description:
      'An AI-powered web platform generating short-form video plans and script concepts using sequential steps and automated asset management.',
    tags: ['React.js', 'Flask', 'OpenAI API'],
    icon: Clapperboard,
    href: 'https://github.com/Aman-Farmer19/Reelify-2.0',
    badge: 'Latest',
  },
  {
    title: 'NextFlix',
    description:
      '🎬 A semantic, mood-based movie recommendation agent powered by Google Gemini 3.5 Flash, React 19, TypeScript, and Express.js.',
    tags: ['React 19', 'TypeScript', 'Express.js', 'Gemini API'],
    icon: Cpu,
    href: 'https://github.com/Aman-Farmer19/NextFlix',
  },
  {
    title: 'CloudChat AI',
    description:
      'A production-ready serverless chatbot platform built on AWS that leverages Large Language Models (OpenAI/Gemini) to deliver intelligent, scalable, and context-aware conversations.',
    tags: ['AWS Lambda', 'S3', 'API Gateway', 'Python', 'LLM API'],
    icon: Server,
    href: 'https://github.com/Aman-Farmer19/AI-Chatbot-With-AWS-LLM-Integration',
  },
  {
    title: 'VitalMind',
    description:
      'A premium, privacy-first AI personal health & wellness assistant featuring a glassmorphism dark-mode UI, daily biometric trackers, and direct Gemini API integration.',
    tags: ['Vite', 'JavaScript', 'CSS Variables', 'Gemini API'],
    icon: Heart,
    href: 'https://github.com/Aman-Farmer19/Vitalmind-Health-Wellness-Assistant',
  },
]

export type TimelineItem = {
  period: string
  title: string
  subtitle: string
  description?: string
  highlight?: string
  icon: LucideIcon
}

export const education: TimelineItem[] = [
  {
    period: '08/2022 – 06/2026 · Completed',
    title: 'B.Tech in Computer Science and Engineering',
    subtitle: 'Kashi Institute of Technology (AKTU, Lucknow)',
    highlight: 'CGPA 7.95',
    icon: GraduationCap,
  },
  {
    period: 'July 6, 2026',
    title: 'Python Using AI Workshop',
    subtitle:
      'AI for Techies — Certified in leveraging AI tools to write and debug Python code, and build interactive visualizations in minutes.',
    icon: Award,
  },
  {
    period: 'June 2026',
    title: 'Be10x — AI Tools Workshop',
    subtitle:
      'Certified in AI concepts, generative & agentic AI architectures, and prompt design.',
    icon: Award,
  },
  {
    period: 'September 2025',
    title: 'Centum Foundation',
    subtitle: 'Skill Up — Empowering the Next Generation Initiative.',
    icon: Award,
  },
]
