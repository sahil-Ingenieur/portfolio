import { Link } from 'react-router-dom'

type Project = {
  title: string
  description: string
  stack: string[]
  href: string
}

export default function ProjectCard({
  title,
  description,
  stack,
  href,
}: Project) {
  return (
    <Link
      to={href}
      className="group block min-w-0 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none sm:p-8"
    >
      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text)]">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
        {description}
      </p>

      <ul
        aria-label="Technologies used"
        className="mt-5 flex flex-wrap gap-2"
      >
        {stack.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-[var(--color-border)] px-2 py-1 text-[11px] leading-relaxed text-[var(--color-muted)]"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-[var(--color-border)] pt-5">
        <span className="inline-flex items-center gap-3 text-sm font-medium text-[var(--color-accent)] group-hover:underline group-hover:underline-offset-4 group-focus-visible:underline group-focus-visible:underline-offset-4">
          Read case study
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}