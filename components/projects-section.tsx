import { ArrowUpRight, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of recent software implementations across AI and cloud."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon
            const CardTag = project.href ? 'a' : 'div'
            return (
              <CardTag
                key={project.title}
                {...(project.href
                  ? {
                      href: project.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  {project.badge && (
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-heading text-2xl">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  {project.href ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View Code
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                      <Lock className="size-3.5" />
                      Private Repository
                    </span>
                  )}
                </div>
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
