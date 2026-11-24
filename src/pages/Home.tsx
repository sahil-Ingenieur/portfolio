import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const stack = [
  'React',
  'TypeScript',
  'TanStack Query',
  'TanStack Table',
  'Recharts',
]

export default function Home() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <>
      <Hero />

      <section
        id="selected-work"
        aria-labelledby="selected-work-heading"
        className="scroll-mt-8 border-t border-[var(--color-border)] py-10 sm:py-12"
      >
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
          <h2
            id="selected-work-heading"
            className="text-xl font-semibold tracking-tight"
          >
            Selected work
          </h2>

          <span className="text-xs text-[var(--color-muted)]">
            Independent project / 01
          </span>
        </div>

        <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <Link
            to="/projects/portfolio-dashboard/case-study"
            aria-label="Read the Portfolio Dashboard case study"
            className="group block border-b border-[var(--color-border)] bg-slate-100 p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--color-accent)] sm:p-8"
          >
            {imageFailed ? (
              <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-[var(--color-border)] bg-white p-6">
                <p className="text-center text-sm text-[var(--color-muted)]">
                  Dashboard preview — add portfolio-dashboard.png
                  to public/images.
                </p>
              </div>
            ) : (
              <img
                src="/images/portfolio-dashboard.png"
                alt="Portfolio dashboard with valuation cards, a performance chart, and a holdings table."
                width={1600}
                height={1000}
                onError={() => setImageFailed(true)}
                className="h-auto w-full rounded-lg border border-[var(--color-border)] shadow-sm transition-shadow group-hover:shadow-md"
              />
            )}
          </Link>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Financial interfaces
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Portfolio Dashboard
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              A clear view of portfolio value, performance, and
              individual holdings. Built with searchable data,
              responsive layouts, and loading/error recovery.
            </p>

            <ul
              aria-label="Technologies used"
              className="mt-5 flex flex-wrap gap-2"
            >
              {stack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                >
                  {technology}
                </li>
              ))}
            </ul>

<div className="project-actions">
  <Link
    to="/projects/portfolio-dashboard/case-study"
    className="project-action project-action--primary"
  >
    Read case study
    <span aria-hidden="true">→</span>
  </Link>

  <Link
    to="/projects/portfolio-dashboard"
    className="project-action project-action--secondary"
  >
    View demo
    <span aria-hidden="true">→</span>
  </Link>
</div>
            <p className="mt-5 text-xs text-[var(--color-muted)]">
              Independent demonstration · Fictional portfolio data
            </p>
          </div>
        </article>
      </section>
      <section className="about-builder" aria-labelledby="about-builder-title">
  <div className="about-builder__label">
    <svg
      className="about-builder__blossom"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <ellipse cx="24" cy="14" rx="7" ry="11" />
        <ellipse
          cx="24"
          cy="14"
          rx="7"
          ry="11"
          transform="rotate(72 24 24)"
        />
        <ellipse
          cx="24"
          cy="14"
          rx="7"
          ry="11"
          transform="rotate(144 24 24)"
        />
        <ellipse
          cx="24"
          cy="14"
          rx="7"
          ry="11"
          transform="rotate(216 24 24)"
        />
        <ellipse
          cx="24"
          cy="14"
          rx="7"
          ry="11"
          transform="rotate(288 24 24)"
        />
      </g>
      <circle cx="24" cy="24" r="3" fill="#FFFDFC" />
    </svg>

    <p className="about-builder__eyebrow">A little about me</p>
  </div>

  <div className="about-builder__content">
    <h2 id="about-builder-title">I like making things real.</h2>

    <p>
      I’m drawn to the point where an idea becomes something someone
      can actually use. Taking a complicated problem, finding a clear
      approach, and building an interface that makes it feel
      straightforward—that’s the work I enjoy.
    </p>

    <p>
      I care about the details, but I also care about getting things
      out the door. For me, building and shipping belong together:
      make thoughtful decisions, follow through, and improve what
      needs improving.
    </p>

    <span className="about-builder__signature">
      Thoughtfully built. Shipped with care.
    </span>
  </div>
</section>
    </>
  )
}