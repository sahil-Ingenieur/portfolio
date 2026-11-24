export type Holding = {
  ticker: string
  name: string
  quantity: number
  price: number
  dayChange: number
}

export type PortfolioHistoryPoint = {
  date: string
  value: number
}