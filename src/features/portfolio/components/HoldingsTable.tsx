import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { ColumnDef, SortingState } from '@tanstack/react-table'
import type { Holding } from '../types'

type Props = {
  holdings: Holding[]
}

const currency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
})

const percentage = new Intl.NumberFormat('en-CA', {
  style: 'percent',
  signDisplay: 'always',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const columns: ColumnDef<Holding>[] = [
  {
    accessorKey: 'ticker',
    header: 'Symbol',
    cell: ({ row }) => (
      <span className="font-medium">{row.original.ticker}</span>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Company',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    enableGlobalFilter: false,
    cell: ({ row }) => currency.format(row.original.price),
  },
  {
    id: 'marketValue',
    accessorFn: (holding) => holding.quantity * holding.price,
    header: 'Market value',
    enableGlobalFilter: false,
    cell: ({ row }) =>
      currency.format(row.original.quantity * row.original.price),
  },
  {
    accessorKey: 'dayChange',
    header: 'Day change',
    enableGlobalFilter: false,
    cell: ({ row }) => {
      const change = row.original.dayChange

      return (
        <span
          className={
            change > 0
              ? 'text-green-700'
              : change < 0
                ? 'text-red-700'
                : 'text-[var(--color-muted)]'
          }
        >
          {percentage.format(change / 100)}
        </span>
      )
    },
  },
]

export default function HoldingsTable({ holdings }: Props) {
  const [search, setSearch] = useState('')
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'marketValue', desc: true },
  ])

  const table = useReactTable({
    data: holdings,
    columns,
    state: {
      globalFilter: search,
      sorting,
    },
    onGlobalFilterChange: setSearch,
    onSortingChange: setSorting,
    globalFilterFn: 'includesString',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const visibleRows = table.getRowModel().rows

  return (
    <section
      aria-labelledby="holdings-heading"
      className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="holdings-heading" className="text-lg font-semibold">
            Holdings
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Illustrative data · All amounts in CAD
          </p>
        </div>

        <div>
          <label
            htmlFor="holdings-search"
            className="mb-2 block text-sm font-medium"
          >
            Search holdings
          </label>
          <input
            id="holdings-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Symbol or company"
            className="w-full rounded-md border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:w-56"
          />
        </div>
      </div>
<p className="border-t border-[var(--color-border)] px-6 py-3 text-xs text-[var(--color-muted)] md:hidden">
  Scroll horizontally to view all columns →
</p>
      <div
        role="region"
        aria-label="Holdings table"
        tabIndex={0}
        className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
      >
        <table className="w-full min-w-[680px] text-left text-sm">
          <caption className="sr-only">
            Portfolio holdings. Activate a column heading to sort.
          </caption>

          <thead className="border-y border-[var(--color-border)] bg-gray-50">
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => {
                  const sorted = header.column.getIsSorted()

                  const isNumeric = [
                    'quantity',
                    'price',
                    'marketValue',
                    'dayChange',
                  ].includes(header.column.id)

                  return (
                    <th
                      key={header.id}
                      scope="col"
                      aria-sort={
                        sorted === 'asc'
                          ? 'ascending'
                          : sorted === 'desc'
                            ? 'descending'
                            : 'none'
                      }
                      className="whitespace-nowrap px-4 py-3 font-medium"
                    >
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className={`inline-flex items-center gap-2 rounded-sm transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] ${sorted ? 'text-[var(--color-accent)]' : ''
                          }`}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        <span
                          aria-hidden="true"
                          className={sorted ? 'opacity-100' : 'opacity-40'}
                        >
                          {sorted === 'asc' ? '↑' : sorted === 'desc' ? '↓' : '↕\uFE0E'}
                        </span>
                      </button>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-[var(--color-border)]">
            {visibleRows.length > 0 ? (
              visibleRows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => {
                    const isNumeric = [
                      'quantity',
                      'price',
                      'marketValue',
                      'dayChange',
                    ].includes(cell.column.id)

                    return (
                      <td
                        key={cell.id}
                        className={`whitespace-nowrap px-4 py-4 tabular-nums ${isNumeric ? 'text-right' : 'text-left'
                          }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-10 text-center text-[var(--color-muted)]"
                >
                  No holdings match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p
        role="status"
        className="border-t border-[var(--color-border)] px-6 py-4 text-sm text-[var(--color-muted)]"
      >
        Showing {visibleRows.length} of {holdings.length} holdings
      </p>
    </section>
  )
}