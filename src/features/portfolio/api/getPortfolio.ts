import { holdings, portfolioHistory } from './mockData'
import type { Holding, PortfolioHistoryPoint } from '../types'

type PortfolioResponse = {
  holdings: Holding[]
  history: PortfolioHistoryPoint[]
}

// Change to true to test the error state.
// With true, the first attempt fails and retry succeeds.
const SIMULATE_ERROR_ONCE = false

let shouldFail = SIMULATE_ERROR_ONCE

export async function getPortfolio(): Promise<PortfolioResponse> {
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, 1000)
  })

  if (shouldFail) {
    shouldFail = false
    throw new Error('Unable to load your portfolio. Please try again.')
  }

  return {
    holdings,
    history: portfolioHistory,
  }
}