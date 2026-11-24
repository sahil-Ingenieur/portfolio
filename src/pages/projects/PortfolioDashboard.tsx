import { Link } from 'react-router-dom'
import { usePortfolio } from '../../features/portfolio/hooks/usePortfolio'
import PortfolioSummary from '../../features/portfolio/components/PortfolioSummary'
import ValueChart from '../../features/portfolio/components/ValueChart'
import HoldingsTable from '../../features/portfolio/components/HoldingsTable'

export default function PortfolioDashboard() {
  const {
    holdings,
    history,
    totalValue,
    dayPL,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  } = usePortfolio()

  const snapshotDate = history[history.length - 1]?.date

  return (
    <section>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 rounded-sm text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        <span aria-hidden="true">←</span>
        All projects
      </Link>

      <header className="mb-8 mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Finance / Front-end engineering
        </p>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Portfolio overview
          </h1>

          <span className="self-start rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] sm:self-auto">
            Demo environment
          </span>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
          An illustrative investment portfolio, built to explore
          data-rich interfaces, clear reporting, and resilient UI states.
        </p>

        {snapshotDate && (
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Snapshot: {snapshotDate} · All amounts in CAD
          </p>
        )}
      </header>

      {isPending ? (
        <div
          role="status"
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
        >
          <p className="text-sm text-[var(--color-muted)]">
            Loading your portfolio…
          </p>
        </div>
      ) : isError ? (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-6"
        >
          <h2 className="font-semibold text-red-900">
            Portfolio unavailable
          </h2>

          <p className="mt-2 text-sm text-red-800">
            {error?.message ?? 'Something went wrong.'}
          </p>

          <button
            type="button"
            disabled={isFetching}
            onClick={() => void refetch()}
            className="mt-4 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-white disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {isFetching ? 'Trying again…' : 'Try again'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <PortfolioSummary totalValue={totalValue} dayPL={dayPL} />
          <ValueChart history={history} />
          <HoldingsTable holdings={holdings} />

          <p className="text-xs leading-relaxed text-[var(--color-muted)]">
            Independent demonstration project. Holdings, prices, and
            performance are fictional and are not affiliated with any
            financial institution.
          </p>
        </div>
      )}
    </section>
  )
}