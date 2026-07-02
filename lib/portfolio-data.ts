import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Brain,
  Clapperboard,
  Cloud,
  Code,
  Cpu,
  GraduationCap,
  Server,
} from 'lucide-react'

export const profile = {
  name: 'Aman Tiwari',
  role: 'Software Engineer & Generative AI Developer',
  tagline:
    'A B.Tech CSE graduate working as a software engineer and Generative AI developer, focused on designing and deploying intelligent web systems and scalable cloud architectures.',
  email: 'amantripathi912@gmail.com',
  phone: '+91 7355322660',
  github: 'https://github.com/Aman-Farmer19',
  linkedin: 'https://www.linkedin.com/in/tiwari-aman1999/',
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
      'Postman, Vercel, Render',
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
      'An AI-powered movie recommendation system leveraging React, Flask, and the TMDb API to match user preferences and return dynamic results.',
    tags: ['React.js', 'TMDb API', 'Flask'],
    icon: Cpu,
    isPrivate: true,
  },
  {
    title: 'CloudChat',
    description:
      'A serverless AI chatbot deployed on AWS with Lambda and API Gateway, using S3 to handle structured, stateful chat conversations.',
    tags: ['AWS Lambda', 'S3', 'OpenAI API'],
    icon: Server,
    isPrivate: true,
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
