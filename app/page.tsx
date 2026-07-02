import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top" className="min-h-screen scroll-smooth">
      <SiteHeader />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
