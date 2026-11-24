import { useId } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { PortfolioHistoryPoint } from '../types'

type Props = {
  history: PortfolioHistoryPoint[]
}

const money = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 2,
})

const shortDate = new Intl.DateTimeFormat('en-CA', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

function formatDate(value: string) {
  return shortDate.format(new Date(`${value}T00:00:00Z`))
}

export default function ValueChart({ history }: Props) {
  const id = useId().replace(/:/g, '')
  const gradientId = `portfolio-gradient-${id}`

  if (history.length === 0) {
    return (
      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h2 className="font-semibold">Portfolio performance</h2>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          No performance history available.
        </p>
      </section>
    )
  }

  const first = history[0]
  const last = history[history.length - 1]

  return (
    <section
      aria-labelledby={`chart-heading-${id}`}
      className="min-w-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 id={`chart-heading-${id}`} className="font-semibold">
            Portfolio performance
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Market value across the demo period
          </p>
        </div>

        <span className="self-start rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]">
          {formatDate(first.date)} – {formatDate(last.date)}
        </span>
      </div>

      <p className="sr-only">
        Portfolio value changes from {money.format(first.value)} on{' '}
        {formatDate(first.date)} to {money.format(last.value)} on{' '}
        {formatDate(last.date)}. Values are illustrative.
      </p>

      <div className="relative mt-8 h-64 overflow-hidden sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={history}
            margin={{ top: 12, right: 12, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0.14}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="3 5"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              minTickGap={24}
              tick={{ fill: 'var(--color-muted)', fontSize: 11 }}
              tickFormatter={formatDate}
            />

            <YAxis
              domain={['dataMin - 1000', 'dataMax + 1000']}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              width={60}
              tick={{ fill: 'var(--color-muted)', fontSize: 11 }}
              tickFormatter={(value: number) =>
                `$${(value / 1000).toFixed(0)}k`
              }
            />

            <Tooltip
              labelFormatter={(label) => formatDate(String(label))}
              formatter={(value) => [
                money.format(Number(value)),
                'Portfolio value',
              ]}
              contentStyle={{
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                backgroundColor: 'var(--color-surface)',
                boxShadow: '0 8px 24px rgb(0 0 0 / 0.06)',
                fontSize: 12,
              }}
              labelStyle={{
                color: 'var(--color-muted)',
                marginBottom: 6,
              }}
            />

            <Area
              type="linear"
              dataKey="value"
              stroke="var(--color-accent)"
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{
                r: 4,
                stroke: 'var(--color-surface)',
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-5 text-xs text-[var(--color-muted)]">
        Illustrative CAD values · Vertical axis zoomed to show changes
      </p>
    </section>
  )
}