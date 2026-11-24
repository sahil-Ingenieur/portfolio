type Props = {
  totalValue: number
  dayPL: number
}

const money = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
})

const signedMoney = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  signDisplay: 'exceptZero',
})

const percentage = new Intl.NumberFormat('en-CA', {
  style: 'percent',
  signDisplay: 'exceptZero',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export default function PortfolioSummary({ totalValue, dayPL }: Props) {
  const previousValue = totalValue - dayPL
  const dailyReturn = previousValue > 0 ? dayPL / previousValue : 0

  const changeColor =
    dayPL > 0
      ? 'text-emerald-700'
      : dayPL < 0
        ? 'text-red-700'
        : 'text-[var(--color-muted)]'

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <section
        aria-labelledby="total-value-heading"
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      >
        <h2
          id="total-value-heading"
          className="text-sm font-medium text-[var(--color-muted)]"
        >
          Portfolio value
        </h2>

        <p className="mt-4 text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
          {money.format(totalValue)}
        </p>

        <p className="mt-4 text-xs text-[var(--color-muted)]">
          Total market value · CAD
        </p>
      </section>

      <section
        aria-labelledby="daily-change-heading"
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      >
        <h2
          id="daily-change-heading"
          className="text-sm font-medium text-[var(--color-muted)]"
        >
          Daily profit / loss
        </h2>

        <p
          className={`mt-4 text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl ${changeColor}`}
        >
          {signedMoney.format(dayPL)}
        </p>

        <p className="mt-4 text-xs text-[var(--color-muted)]">
          <span className={`font-medium ${changeColor}`}>
            {percentage.format(dailyReturn)}
          </span>
          {' '}versus previous close
        </p>
      </section>
    </div>
  )
}