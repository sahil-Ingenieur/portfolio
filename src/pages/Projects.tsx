import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">
        Projects
      </h1>

      <p className="mt-4 text-[var(--color-muted)]">
        Independent work in financial interfaces and front-end engineering.
      </p>

      <div className="mt-8">
        <ProjectCard
          title="Portfolio Dashboard"
          description="A responsive investment-portfolio demo with valuation summaries, performance history, searchable holdings, and loading/error recovery. Read the case study →"
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