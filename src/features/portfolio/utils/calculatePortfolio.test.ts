import { describe, expect, it } from 'vitest'
import { calculatePortfolio } from './calculatePortfolio'
import type { Holding } from '../types'

function holding(overrides: Partial<Holding> = {}): Holding {
  return {
    ticker: 'DEMO',
    name: 'Demo Company',
    quantity: 10,
    price: 110,
    dayChange: 10,
    ...overrides,
  }
}

describe('calculatePortfolio', () => {
  it('returns zero values for an empty portfolio', () => {
    expect(calculatePortfolio([])).toEqual({
      totalValue: 0,
      previousValue: 0,
      dayPL: 0,
    })
  })

  it('calculates market value from quantity and price', () => {
    const result = calculatePortfolio([
      holding({ quantity: 5, price: 200, dayChange: 0 }),
    ])

    expect(result.totalValue).toBeCloseTo(1000, 2)
  })

  it('calculates a gain relative to the previous close', () => {
    const result = calculatePortfolio([holding()])

    expect(result.totalValue).toBeCloseTo(1100, 2)
    expect(result.previousValue).toBeCloseTo(1000, 2)
    expect(result.dayPL).toBeCloseTo(100, 2)
  })

  it('calculates a loss relative to the previous close', () => {
    const result = calculatePortfolio([
      holding({ price: 90, dayChange: -10 }),
    ])

    expect(result.totalValue).toBeCloseTo(900, 2)
    expect(result.previousValue).toBeCloseTo(1000, 2)
    expect(result.dayPL).toBeCloseTo(-100, 2)
  })

  it('returns zero P&L when prices are unchanged', () => {
    const result = calculatePortfolio([
      holding({ dayChange: 0 }),
    ])

    expect(result.dayPL).toBeCloseTo(0, 2)
  })

  it('combines gains and losses across holdings', () => {
    const result = calculatePortfolio([
      holding({ ticker: 'GAIN', price: 110, dayChange: 10 }),
      holding({ ticker: 'LOSS', price: 90, dayChange: -10 }),
    ])

    expect(result.totalValue).toBeCloseTo(2000, 2)
    expect(result.previousValue).toBeCloseTo(2000, 2)
    expect(result.dayPL).toBeCloseTo(0, 2)
  })
})