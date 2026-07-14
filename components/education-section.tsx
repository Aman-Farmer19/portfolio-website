import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Learning journey"
        />
        <ol className="mt-14 space-y-4">
          {education.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="relative flex gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                  {item.highlight && (
                    <span className="mt-2 shrink-0 self-start rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:mt-0">
                      {item.highlight}
                    </span>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
