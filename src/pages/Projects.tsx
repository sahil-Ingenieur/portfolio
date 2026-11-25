import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <header className="border-b border-[var(--color-border)] pb-8 sm:pb-10">
        <h1
          id="projects-heading"
          className="text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl"
        >
          Projects
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Independent work in financial interfaces and front-end
          engineering.
        </p>
      </header>

      <div className="mt-8 sm:mt-10">
        <ProjectCard
          title="Portfolio Dashboard"
          description="A responsive investment-portfolio demo with valuation summaries, performance history, searchable holdings, and loading/error recovery."
          stack={[
            'React',
            'TypeScript',
            'TanStack Query',
            'TanStack Table',
            'Recharts',
          ]}
          href="/projects/portfolio-dashboard/case-study"
        />
      </div>
    </section>
  )
}