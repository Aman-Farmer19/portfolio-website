import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-7 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {profile.status}
          </div>

          <h1 className="text-balance font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-primary">{profile.name}</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Projects
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-2xl"
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Education
                </p>
                <h2 className="mt-1 font-heading text-2xl">B.Tech Graduate</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kashi Institute of Technology
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <p className="font-heading text-3xl text-primary">7.95</p>
                  <p className="text-xs text-muted-foreground">Current CGPA</p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-foreground">2026</p>
                  <p className="text-xs text-muted-foreground">Graduated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
