import { Link } from 'react-router-dom'

const decisions = [
  {
    title: 'Separate the interface from the data source',
    description:
      'A dedicated portfolio hook connects the page to a simulated API through TanStack Query. Summary cards, the chart, and the holdings table receive data through props rather than fetching it themselves.',
    tradeoff:
      'This adds structure to a small demo, but keeps data access separate from presentation and leaves a clear integration point for a future API.',
  },
  {
    title: 'Use a headless table',
    description:
      'TanStack Table manages sorting and filtering while native HTML table elements and Tailwind CSS control the presentation. Derived market values sort numerically rather than as formatted currency strings.',
    tradeoff:
      'A headless library requires more UI implementation than a ready-made data grid, but gives direct control over markup, styling, and interaction.',
  },
  {
    title: 'Use transparent, simulated data',
    description:
      'The project uses fictional holdings and CAD-denominated prices. The final chart points and summary values are derived from the same holdings, so the latest movement agrees with the daily P&L.',
    tradeoff:
      'The demo is predictable and does not require a market-data subscription. It does not demonstrate live pricing, and earlier chart points are illustrative rather than reconstructed historical returns.',
  },
  {
    title: 'Handle more than the successful response',
    description:
      'The data layer introduces a short simulated delay and an optional one-time failure. The page provides loading feedback, an error message, and a retry action. The holdings table also handles searches with no results.',
    tradeoff:
      'These states demonstrate interface behaviour, not production network resilience. The simulated API does not exercise real HTTP failures or server-side validation.',
  },
]

const improvements = [
  'A consistent information hierarchy for portfolio value, daily movement, performance history, and individual holdings.',
  'Responsive summary cards and a horizontally scrollable table that preserves access to all columns on narrow screens.',
  'Explicit search labels, native sorting buttons, visible keyboard focus styles, and announced loading/error states.',
  'A shared calculation utility for portfolio totals and daily P&L, with unit tests covering gains, losses, unchanged prices, and an empty portfolio.',
]

const limitations = [
  'No live prices, brokerage connections, authentication, or trade execution.',
  'Simplified valuation: no cash balance, fees, dividends, transactions, or currency conversion.',
  'Earlier performance-history points are fictional, and the chart uses a fixed demo snapshot.',
  'Automated interaction tests and a formal accessibility audit are not part of this version.',
]

const sectionHeadingClass =
  'text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text)]'

const paragraphClass =
  'mt-4 text-base leading-7 text-[var(--color-muted)]'

const textLinkClass =
  'inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none'

const listClass =
  'mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--color-muted)] marker:text-[var(--color-accent)]'

export default function PortfolioCaseStudy() {
  return (
    <article
      aria-labelledby="case-study-title"
      className="mx-auto min-w-0 max-w-3xl"
    >
      <Link to="/projects" className={textLinkClass}>
        <span aria-hidden="true">←</span>
        All projects
      </Link>

      <header className="mt-6 border-b border-[var(--color-border)] pb-10 sm:pb-12">
        <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.14em] text-[var(--color-accent)]">
          Case study / Independent project
        </p>

        <h1
          id="case-study-title"
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl"
        >
          Portfolio Dashboard
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          A focused investment-portfolio interface that brings together
          valuation, performance history, and searchable holdings.
        </p>

        <dl className="mt-8 grid gap-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm sm:grid-cols-3 sm:p-6">
          <div className="min-w-0">
            <dt className="text-[var(--color-muted)]">
              Role
            </dt>
            <dd className="mt-2 font-medium leading-relaxed text-[var(--color-text)]">
              Design & front-end development
            </dd>
          </div>

          <div className="min-w-0">
            <dt className="text-[var(--color-muted)]">
              Scope
            </dt>
            <dd className="mt-2 font-medium leading-relaxed text-[var(--color-text)]">
              Responsive dashboard demo
            </dd>
          </div>

          <div className="min-w-0">
            <dt className="text-[var(--color-muted)]">
              Data
            </dt>
            <dd className="mt-2 font-medium leading-relaxed text-[var(--color-text)]">
              Fictional holdings · CAD
            </dd>
          </div>
        </dl>

        <div className="action-row">
          <Link
            to="/projects/portfolio-dashboard"
            className="button button--primary"
          >
            Explore the dashboard
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <div className="space-y-10 py-10 sm:space-y-12 sm:py-12">
        <section aria-labelledby="problem-heading">
          <h2
            id="problem-heading"
            className={sectionHeadingClass}
          >
            The problem
          </h2>

          <p className={paragraphClass}>
            A portfolio overview needs to answer three questions quickly:
            what is it worth, how has it changed, and which holdings
            contribute to that value? The design challenge was to make
            those answers easy to scan without turning the page into a
            crowded trading terminal.
          </p>
        </section>

        <section aria-labelledby="approach-heading">
          <h2
            id="approach-heading"
            className={sectionHeadingClass}
          >
            The approach
          </h2>

          <p className={paragraphClass}>
            The page follows a summary-to-detail hierarchy: portfolio
            value and daily P&L first, a performance chart second, and
            individual holdings third. A restrained palette, consistent
            spacing, and aligned numeric columns keep the emphasis on
            the data.
          </p>

          <p className={paragraphClass}>
            On smaller screens, summary cards stack vertically and the
            holdings table scrolls within its own panel. Positive and
            negative changes include explicit signs, so colour is not
            the only indicator of direction.
          </p>
        </section>

        <section
          aria-labelledby="architecture-heading"
          className="min-w-0"
        >
          <h2
            id="architecture-heading"
            className={sectionHeadingClass}
          >
            Architecture
          </h2>

          <p className={paragraphClass}>
            The dashboard uses React and TypeScript, with Tailwind CSS
            and CSS variables for styling. TanStack Query manages the
            asynchronous data lifecycle, TanStack Table manages table
            behaviour, and Recharts renders performance history.
          </p>

          <pre
            tabIndex={0}
            aria-label="Architecture diagram, horizontally scrollable on smaller screens"
            className="mt-5 max-w-full overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-xs leading-7 text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:p-6 sm:text-sm"
          >
            <code>{`Mock data → Simulated API → TanStack Query
                              ↓
                         usePortfolio
                              ↓
                    PortfolioDashboard
                     ├─ Summary cards
                     ├─ Performance chart
                     └─ Holdings table

Calculation utility → Portfolio value & daily P&L`}</code>
          </pre>
        </section>

        <section aria-labelledby="decisions-heading">
          <h2
            id="decisions-heading"
            className={sectionHeadingClass}
          >
            Decisions & tradeoffs
          </h2>

          <div className="mt-6 space-y-8">
            {decisions.map((decision) => (
              <div key={decision.title}>
                <h3 className="text-lg font-medium leading-relaxed tracking-tight text-[var(--color-text)]">
                  {decision.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                  {decision.description}
                </p>

                <p className="mt-4 border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-7 text-[var(--color-muted)]">
                  <span className="font-medium text-[var(--color-text)]">
                    Tradeoff:
                  </span>{' '}
                  {decision.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="refinement-heading">
          <h2
            id="refinement-heading"
            className={sectionHeadingClass}
          >
            A responsive-layout issue
          </h2>

          <p className={paragraphClass}>
            During a 320px viewport check, the document expanded to
            766px and left a large blank area beside the content.
            Inspecting element bounds identified an off-screen Recharts
            tooltip rather than the table or page-width constraint.
          </p>

          <p className={paragraphClass}>
            Containing overflow within the chart plotting area restored
            the document width to 320px. Tooltip visibility was then
            checked at both chart edges. The fix stayed local to the
            chart rather than hiding overflow across the whole page.
          </p>
        </section>

        <section aria-labelledby="delivered-heading">
          <h2
            id="delivered-heading"
            className={sectionHeadingClass}
          >
            What the project demonstrates
          </h2>

          <ul className={listClass}>
            {improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="limitations-heading">
          <h2
            id="limitations-heading"
            className={sectionHeadingClass}
          >
            Scope & limitations
          </h2>

          <ul className={listClass}>
            {limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
            This is an independent demonstration project, not work
            delivered for or endorsed by RBC, TD, or any other financial
            institution.
          </p>
        </section>

        <footer className="border-t border-[var(--color-border)] pt-6">
          <Link
            to="/projects/portfolio-dashboard"
            className="inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] motion-reduce:transition-none"
          >
            Try the interactive dashboard
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </article>
  )
}