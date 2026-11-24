import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pb-12 pt-8 sm:pb-16 sm:pt-14">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
        Sahil / Senior Front-End Engineer
      </p>

      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
        Thoughtful interfaces.
        <br />
        Reliable engineering.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
        Front-end engineering for financial services, with 9+ years
        across React, design systems, and complex customer experiences.
      </p>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
        End-client experience with RBC and TD Securities.
        Consulting experience includes Publicis Sapient.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#selected-work"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          Explore my work
          <span aria-hidden="true" className="ml-2">
            ↓
          </span>
        </a>

        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}