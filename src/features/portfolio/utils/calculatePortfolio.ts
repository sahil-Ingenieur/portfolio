import type { Holding } from '../types'

export function calculatePortfolio(holdings: readonly Holding[]) {
  let totalValue = 0
  let previousValue = 0

  for (const holding of holdings) {
    const currentHoldingValue = holding.quantity * holding.price
    const previousHoldingValue =
      currentHoldingValue / (1 + holding.dayChange / 100)

    totalValue += currentHoldingValue
    previousValue += previousHoldingValue
  }

  return {
    totalValue,
    previousValue,
    dayPL: totalValue - previousValue,
  }
}