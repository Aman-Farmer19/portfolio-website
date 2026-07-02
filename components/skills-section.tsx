import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Tools, frameworks, and core competencies I work with day to day."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
